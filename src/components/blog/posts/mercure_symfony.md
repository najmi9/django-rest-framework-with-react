<h2 class="article-title">
Mercure Protocol With Symfony and Api Platform
</div>

## Demo and Inspiration  :

When the admin publish a notification all connected users will be notified by the message of the admin in real time.
<div class="text-center">
<img src="imgs/mercure_demo.png" alt="Mercure Notitfication Demo" width="100%">
</div>
## Mercure Protocol :
[Mercure Protocol](https://mercure.rocks/docs/mercure) is a protocol allowing to push data updates to web browsers and other HTTP clients in a convenient, fast, reliable and battery-efficient way. It is especially useful to publish async and real-time updates of resources served through web APIs, to reactive web and mobile apps.

This protocol built-in top of [server-sent-event](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) and POST HTTP request.

## [Symfony](https://symfony.com)
PHP Framework and a set of decoupled and reusable PHP libraries
aim to automate the common activities in web development like authentication, sessions, databases etc...

## How SEE works

Traditionally, a web page has to send a request to the server to receive new data; that is, the page requests data from the server. With server-sent events, it's possible for a server to send new data to a web page at any time, by pushing messages to the web page. These incoming messages can be treated as Events + data inside the web page.

## Install Symfony
```bash
composer create-project symfony/website-skeleton mercure_symfony
cd mercure_symfony
php bin/console make:controller HomeController
#run the php server on 80 port
php -S localhost:8000 -t public
```

### Install Mercure
In applications using Symfony Flex, run this command to install mercure.

```bash
composer require mercure 
```

Download the hub binary from [github](https://github.com/dunglas/mercure/realeses) and extract it with the following command. 


```bash
tar -xzf mercure_0.10.4_Linux_arm64.tar.gz
```
Set the URL of your hub as the value of the `MERCURE_PUBLISH_URL` env var. The `.env` file of your project has been updated by the Flex recipe to provide example values. Set it to the URL of the Mercure Hub (http://localhost:3000/.well-known/mercure by default).

Set a secret key for your Mercure Hub in `.env` file, by default equal `!ChangeMe!` you should use a strong one in production. For the `MERCURE_JWT_TOKEN` leave it as it becuase we will create one programmatically just in a few moments.
```python
#.env
MERCURE_PUBLISH_URL=http://localhost:3000/.well-known/mercure
MERCURE_JWT_KEY=!ChangeMe!
MERCURE_JWT_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOltdfX0.Oo0yg7y4yMa1vr_bziltxuTCqb8JVHKxp-f_FwwOim0

```

## Publication
The publisher sends updates by issuing POST HTTPS requests on the hub URL. When it receives an update, the hub dispatches it to subscribers using the established server-sent events connections.

```
POST /.well-known/mercure HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer $JWT

topic=https://example.com/foo&data=the%20content
```
In Symfony the Mercure Component provides an Update value object representing the update to publish. It also provides a Publisher service to dispatch updates to the Hub.
The Publisher service can be injected using the autowiring in any other 
service, including controllers.

You can also let Symfony dispatching the updates asynchronously thanks to the provided integration with the Messenger component.
To install it run this command : 
```bash
composer require messenger
```

```php
<?php
#src/Controller/MessageController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Mercure\Update;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class MessageController extends AbstractController
{
    /**
     * @Route(path="/message", name="message", methods={"POST"})
     */
    public function index(Request $request, MessageBusInterface $bus):Response
    {
           $data = json_decode($request->getContent(), true);        
           $update = new Update(
            #topics
            [
                sprintf("http://my-website.com/notify"),
            ],
            #data
           json_encode([
               'message'=>$data['message'],
               ]),
       );

         // Sync, or async (RabbitMQ, Kafka...)
        $bus->dispatch($update);
        return $this->json(['message'=>'published']);
    }
```

The first parameter to pass to the Update constructor is the topic being updated. This topic should be an IRI (Internationalized Resource Identifier, RFC 3987): a unique identifier of the resource being dispatched.

Usually, this parameter contains the original URL of the resource transmitted to the client, but it can be any valid IRI, it doesn’t have to be a URL that exists (similarly to XML namespaces).

The second parameter of the constructor is the content of the update. It can be anything, stored in any format. However, serializing the resource in a hypermedia format such as JSON-LD, Atom, HTML or XML is recommended.

## Subscrining to the events

We listen to that in javascript by a classic listener:

```js
{# templates/home/index.html.twig #}
{% extends 'base.html.twig' %}

{% block body %}
<div class="container m-5 p-5">
  <div class="alert" id="message">
  </div>
  <div class="bg-light"> 
      <h1> Go to admin page tp publish a notification ! </h1>
      <a href="{{ path('admin') }}" class="btn btn-outline-primary">
          Admin Page Here !
      </a>
  </div>
</div>

<script type="text/javascript">
  const url = new URL('http://localhost:3000/.well-known/mercure');
  url.searchParams.append('topic', 'http://my-website.com/notify');
  const eventSource = new EventSource(url);
  eventSource.onmessage = e => {
    const data = JSON.parse(e.data);
    const div = document.createElement("div");
    div.setAttribute("class", "alert alert-success");
    div.innerHTML = data.message;
    document.querySelector("div#message").appendChild(div);
  }; 
</script>
{% endblock %}
 ```
From the `admin` route we will publish notification to all connected devices.

```php
<?php
#src/Controller/AdminController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index()
    {
        return $this->render('admin/index.html.twig');
    }
}
```

With a POST ajax request to ```/message``` we dispatch an update for the topic ```http://my-website.com/notify```.

```html
{# templates/admin/index.html.twig #}
{% extends 'base.html.twig' %}
{% block body %}
<div class="m-5 p-5 bg-light border">
 <h4> Message to notify all connected users ! </h4>
 <form method="POST">
    <div class="form-group">
    <input type="text" name="message"
     class="form-control" placeholder="Enter a mssage !">
    </div>
    <div class="form-group">
    <button type="submit" class="btn btn-success">  submit  </button>
    </div>
  </form>
</div>
<script type="text/javascript">
document.querySelector("form").onsubmit = e =>{
  e.preventDefault();
  const msg = document.querySelector("input[name='message']").value;

  fetch("/message", {
    method: "POST",
    body: JSON.stringify({'message': msg}) ,
  });
};
</script>
{% endblock %}
```

## Authorization

To subscribe to private updates, subscribers must provide to the Hub a JWT containing a topic selector matching by the update’s topic.

To provide this JWT, the subscriber can use a cookie, or a Authorization HTTP header.

Cookies are automatically sent by the browsers when opening an EventSource connection if the `withCredentials` attribute is set to `true`.

```js
const eventSource = new EventSource(hub, {
    withCredentials: true
});
```

the generated cookie contains a JWT, itself containing the appropriate topic selector. This cookie will be automatically sent by the web browser when connecting to the Hub. Then, the Hub will verify the validity of the provided JWT, and extract the topic selectors from it.
To generate the JWT, we’ll use the `lcobucci/jwt` library. to install it:

```bash
composer require lcobucci/jwt
```

## Generating Programmatically The JWT Used to Publish.

Instead of directly storing a JWT in the configuration, you can create a service that will return the token used by the Publisher object:

```php
<?php

#src/Mercure/JWTProvider.php

namespace App\Mercure;

use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Builder;

class JWTProvider
{
	 private $secret;

	 function __construct(string $secret)
	  {
	  	$this->secret = $secret;
	  } 

	 public function __invoke(): string
    {
         return (new Builder())
         // we publish to all topics
            ->set('mercure', ['publish'=>
            	[
            	"*"
                ]
            ])
            ->sign(new Sha256(), $this->secret)
            ->getToken()
         ;
    }
}
```
Then, reference this service in the bundle configuration:

```yaml
# config/packages/mercure.yaml
mercure:
    hubs:
        default:
            url: '%env(MERCURE_PUBLISH_URL)%'
            jwt_provider: App\Mercure\JWTProvider

```

Now you can remove the `MERCURE_JWT_TOKEN` in `.env` file because it will be generated programmatically.

This method is especially convenient when using tokens having an expiration date, that can be refreshed programmatically.


```php
<?php

#src/Mercure/MercureCookieGenerator.php

namespace App\Mercure;

use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use App\Entity\User;

class MercureCookieGenerator
{
	private $secret;
	function __construct(string $secret)
	{
		$this->secret = $secret;
	}

	public function generate(): string
	{
         $token = (new Builder())
          ->set('mercure', ['subscribe'=>["*"]])
          ->sign(new Sha256(), $this->secret)
          ->getToken()
         ;
         return "mercureAuthorization={$token}; Path=/.well-known/mercure; HttpOnly";
	}
}
```

Let symfony know about the two services : 

```yaml
#config/services.yaml
services:

   #...

   App\Mercure\MercureCookieGenerator:
        arguments:
            $secret: '%env(MERCURE_JWT_KEY)%'
    App\Mercure\JWTProvider:
        arguments:
            $secret: '%env(MERCURE_JWT_KEY)%'

```
And here is the controller:

```php
<?php

#src/Controller/HomeController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Mercure\MercureCookieGenerator;

class HomeController extends AbstractController
{
    /**
    * @Route("/", name="home")
   */
    public function index(MercureCookieGenerator $cookieGenerator) :Response
    {
         $response =  $this->render("home/index.html.twig");
         $response->headers->set('set-cookie', $cookieGenerator->generate());
         return $response;
    }
}
```
## run the Hub 

```bash
 ./mercure --jwt-key='!ChangeMe!' --addr='localhost:3000' --allow-anonymous --cors-allowed-origins='http://localhost:8000'
```


## Api Platform and Mercure : AsyncAPI



## [Api Platform](https://api-platform.com/docs/core/) 
API Platform Core is an easy-to-use and powerful library to create hypermedia-driven REST APIs. It is a component of the API Platform framework. It can be used as a standalone or with the Symfony framework (recommended).


API Platform can automatically push the modified version of the resources exposed by the API to the currently connected clients (webapps, mobile apps...) using the Mercure protocol.

Use the mercure attribute to hint API Platform that it must dispatch the updates regarding the given resources to the Mercure hub

You can see more information [here](https://api-platform.com/docs/core/mercure/#creating-async-apis-using-the-mercure-protocol)

```php
<?php

#src/Entity/Product.php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProductRepository")
 * @ApiResource(mercure=true)
 */
class Product
{
  //...
}
```



## Author : Imad NAJMI
## Github  : [complete code is here](https://github.com/najmi9/mercure_symfony_blog)