<h2 class="article-title">
How to create mrdern website with Symfony Api-Platform and React JS?
</h2>
<div class="text-center">
<img src="static/imgs/symfony-react.png" alt="Symfony React Api Platform">
</div>

### Prerequisites :

Basic knowledge of building applications with [React](https://reactjs.org), [Symfony](https://symfony.com) and a reasonable knowledge of objected-oriented programming with PHP is advised to follow along properly and get the best results from this tutorial. Also, you need to ensure that you have Node.js and Yarn package manager installed on your development machine. Lastly, you need to install [Composer](getcomposer.org) to manage dependencies.
#### 1. Create a new Symfony project with composer or you can use symfony CLI

```bash
composer create-project symfony/website-skeleton my-app
```
#### 2.Install the bundler WebPack encore via composer 
Webpack Encore is a simpler way to integrate Webpack into your application. It wraps Webpack, giving you a clean & powerful API for bundling JavaScript modules, pre-processing CSS & JS and compiling and minifying assets. Encore gives you professional asset system that’s a delight to use.

```bash
cd my-app
composer require encore
```
This command will take care of creating a `webapck.config.js` file, add the `assets` folder and add `node_modules` dirctory to `.gitignore` file.

#### 3.Install javascript dependencies
```bash
yarn install
```
#### 4.Install Api Platform Bundle
[API Platform](https://api-platform.com/docs) is an easy-to-use library to create hypermedia-driven REST APIs. It is a component of the API Platform framework. It built-in on top of Symfony.
```bash
composer require api
```
#### 5.Configure database in your `.env` file
You can also use a sqlite database for developpment, but we will use phpMyAdmin to manage database.
```bash
DATABASE_URL=mysql://user:password@127.0.0.1:3306/database_name?serverVersion=5.7
```
#### 6.Create our first entity called Product for example

To do this copy the paste the fllowing code in your file, or try to create the same thing by CLI if you know what you do.
```bash
php bin/console make:entity Product
```  

```php
<?php
#src/Entity/Product.php
namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProductRepository")
 * @ApiResource
 */
class Product
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $image;

    /**
     * @ORM\Column(type="integer")
     */
    private $price;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): self
    {
        $this->price = $price;

        return $this;
    }

}
```

we add `@ApiResource` annotation to tell Api Platform bundle that we want to add a new resource to our api that we will use in our react frontend.

![Product source](static/imgs/product_api.png)


#### 7. Create our table in database.
Make sure that you're in the working folder `my-app`.
```bash
#create database 
php bin/console doctrine:database:create
#make migration to generate SQl code
php bin/console  make:migration 
#create our table in database
php bin/console doctrine:migrations:migrate
#or run this command to make migration and create the table .
php bin/console --force doctrine:schema:update 
#run the php server on port 80
php -S localhost:8000 -t public
# this command is to generate css and js files to swagger documentation
yarn encore dev
```
After creating the database and run the server, we will check the route http://localhost:8000/api which has a basic swagger documentation through it we will make two POST requests to create two products, in order to have some data to manipulate with.

![Product source](static/imgs/product_post.png)

#### 8.Configure webpack encore
first let us add some dependencies with yarn, you can use npm too and install React and ReactDOM.
```bash
yarn add @babel/preset-react --dev
yarn add react react-dom
```
`webpack.config.js` already holds the basic config you need, thanks to recieps, so to enable react we should uncomment `.enableReactPreset() ` in `webpack.config.js` file.
```php
Encore
     ...
+     .enableReactPreset()
     ...
;
```
#### 9.Add two twig helpers from WebpackEncoreBundle to base.html.twig file to load javascript and css compiled to your app.

```html
{# templates/base.html.twig #}
<!DOCTYPE html>
<html>
    <head>
        

        {% block stylesheets %}
            {{ encore_entry_link_tags('app') }}

            <!-- Renders a link tag (if your module requires any CSS)
                 <link rel="stylesheet" href="/build/app.css"> -->
        {% endblock %}
    </head>
    <body>
        {% block body %} 
        {% endblock %} 
 
        {% block javascripts %}
            {{ encore_entry_script_tags('app') }}

            <!-- Renders app.js & a webpack runtime.js file
                <script src="/build/runtime.js"></script>
                <script src="/build/app.js"></script> -->
        {% endblock %}
    </body>
</html>
```
#### 10.Run this command to compile javascript and css code on each change in your scripts.
```bash
yarn encore dev --watch
```
#### 11. Create frontend part with React

In our root dirctory we have a folder called `assets` that contains all CSS an JS files, those folder are automatically created when we installed the webpack bundle.

```jsx
// assets/js/app.js

import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(false)

   useEffect(()=>{
      fetch('http://localhost:8000/api/products')
      .then(response=>response.json())
      .then(response=>{
        setProducts(response['hydra:member'])
        setLoading(true)
      })
      .catch(e=>console.log(e));
   },[]);

   return(
       <div>
       <h1> Hello World </h1>
       {!loading && (<h1>loading ... </h1>)}
        {loading && (
          <ul>
             {products.map(product=>(
                 <li key={product.id}>
                   <div>
                      <h3> {product.title} with {product.price} $ </h3>
                      <img src={product.image} alt={product.title} />
                   </div>
                 </li>
             )) }
          </ul>
        )}
      </div>
   );
}
ReactDOM.render(<App />, document.getElementById('root'));
```
#### 12.Create a new controller in your app by running the command

```bash
php bin/console make:controller DefaultController
```

#### 13. Edit our controller to add the react routing by default and render our template 

```php
<?php

#src/Controller/DefaultController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
     /**
     *  @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     */
    public function index()
    {
        return $this->render('default/index.html.twig');
    }
}
```
The `reactRouting` parameter is used to allow React Router to control routing with the application and stop Symfony from intercepting the route

#### 14. The last thong is to create a div#root in your index.html.twig file and you're done.

```html
{# templates/default/index.html.twig #}
{% extends 'base.html.twig' %}

{% block title %}Hello To My App!{% endblock %}

{% block body %}
  <div id="root"></div>
{% endblock %}
```
___
### Author Imad Najmi
### Github [github repository](https://github.com/najmi9/blog-recat-symfony)




