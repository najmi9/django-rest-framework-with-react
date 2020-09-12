```PHP
<!DOCTYPE html>
<html>

<head>
    <title>Symfony Api Platform and react !</title>
</head>

<style type="text/css">
    .code{
        color: gray; 
        padding: 2px;
        font-family: cursive;
        font-weight: bold;
        font-style: italic;
    }
</style>
<body>
    <h1> Prerequisites : </h1>
   <div>
    Basic knowledge of building applications with React, Symfony and a reasonable knowledge of objected-oriented programming with PHP is advised to follow along properly and get the best results from this tutorial.

Also, you need to ensure that you have Node.js and Yarn package manager installed on your development machine. Lastly, you need to install Composer to manage dependencies.
   </div>

    <div>
        <h4>1-Create a new Symfony project with composer or you can use symfony CLI : </h4>
        <div
            style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
            <pre style="margin: 0; line-height: 125%">composer create-project symfony/website-skeleton my-app
       </pre>
        </div>
        <h4>2-Install the bundler WebPack encore via composer :</h4>
        <div style="margin-bottom: 10px">
            Webpack Encore is a simpler way to integrate Webpack into your application. It wraps Webpack, giving you a
            clean &
            powerful API for bundling JavaScript modules, pre-processing CSS & JS and compiling and minifying assets.
            Encore gives
            you professional asset system that’s a delight to use.
        </div>
        <div
            style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
            <pre style="margin: 0; line-height: 125%">composer require encore
        </pre>
        </div>
        <h4>3-Install javascript dependencies : </h4>

        <div
            style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
            <pre style="margin: 0; line-height: 125%">yarn install</pre>
        </div>
        <h4>4-Install Api Platform Bundle :</h4>
        <div style="margin-bottom: 10px">
            API Platform is an easy-to-use library to create hypermedia-driven REST APIs. It is a component of the
            API Platform framework. It built-in on top of Symfony.
        </div>
        <div
            style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
            <pre style="margin: 0; line-height: 125%">composer require api
    </pre>
        </div>
        <h4>5-Configure database in your <span class="code"> .env  </span> file </h4>
        <div style="margin-bottom: 10px; ">
            You can also use a sqlite database for developpment, but we will use phpMyAdmin to manage database.
        </div>
        <div
            style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
            <pre style="margin: 0; line-height: 125%"><span style="color: #336699">DATABASE_URL</span>=mysql://user:password@127.0.0.1:3306/database_name?serverVersion=5.7
    </pre>
        </div>
        <h4>6-Create our first entity called Product for example : </h4>
        <div
            style="
            max-height:300px; overflow:auto;
            background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
            <pre style="margin: 0; line-height: 125%"><span style="color: #cc0000; font-weight: bold">&lt;?php</span>
<span style="color: #888888">#src/Entity/Product.php</span>
<span style="color: #008800; font-weight: bold">namespace</span> App\Entity;

<span style="color: #008800; font-weight: bold">use</span> Doctrine\ORM\Mapping <span style="color: #008800; font-weight: bold">as</span> ORM;
<span style="color: #008800; font-weight: bold">use</span> ApiPlatform\Core\Annotation\ApiResource;

<span style="color: #dd2200; background-color: #fff0f0">/**</span>
<span style="color: #dd2200; background-color: #fff0f0"> * @ORM\Entity(repositoryClass=&quot;App\Repository\ProductRepository&quot;)</span>
<span style="color: #dd2200; background-color: #fff0f0"> * @ApiResource</span>
<span style="color: #dd2200; background-color: #fff0f0"> */</span>
<span style="color: #008800; font-weight: bold">class</span> <span style="color: #bb0066; font-weight: bold">Product</span>
{
    <span style="color: #dd2200; background-color: #fff0f0">/**</span>
<span style="color: #dd2200; background-color: #fff0f0">     * @ORM\Id()</span>
<span style="color: #dd2200; background-color: #fff0f0">     * @ORM\GeneratedValue()</span>
<span style="color: #dd2200; background-color: #fff0f0">     * @ORM\Column(type=&quot;integer&quot;)</span>
<span style="color: #dd2200; background-color: #fff0f0">     */</span>
    <span style="color: #008800; font-weight: bold">private</span> <span style="color: #336699">$id</span>;

    <span style="color: #dd2200; background-color: #fff0f0">/**</span>
<span style="color: #dd2200; background-color: #fff0f0">     * @ORM\Column(type=&quot;string&quot;, length=255)</span>
<span style="color: #dd2200; background-color: #fff0f0">     */</span>
    <span style="color: #008800; font-weight: bold">private</span> <span style="color: #336699">$title</span>;

    <span style="color: #dd2200; background-color: #fff0f0">/**</span>
<span style="color: #dd2200; background-color: #fff0f0">     * @ORM\Column(type=&quot;string&quot;, length=255)</span>
<span style="color: #dd2200; background-color: #fff0f0">     */</span>
    <span style="color: #008800; font-weight: bold">private</span> <span style="color: #336699">$image</span>;

    <span style="color: #dd2200; background-color: #fff0f0">/**</span>
<span style="color: #dd2200; background-color: #fff0f0">     * @ORM\Column(type=&quot;integer&quot;)</span>
<span style="color: #dd2200; background-color: #fff0f0">     */</span>
    <span style="color: #008800; font-weight: bold">private</span> <span style="color: #336699">$price</span>;

    <span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">function</span> <span style="color: #0066bb; font-weight: bold">getId</span>(): ?int
    {
        <span style="color: #008800; font-weight: bold">return</span> <span style="color: #336699">$this</span>-&gt;<span style="color: #336699">id</span>;
    }

    <span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">function</span> <span style="color: #0066bb; font-weight: bold">getTitle</span>(): ?string
    {
        <span style="color: #008800; font-weight: bold">return</span> <span style="color: #336699">$this</span>-&gt;<span style="color: #336699">title</span>;
    }

    <span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">function</span> <span style="color: #0066bb; font-weight: bold">setTitle</span>(string <span style="color: #336699">$title</span>): self
    {
        <span style="color: #336699">$this</span>-&gt;<span style="color: #336699">title</span> = <span style="color: #336699">$title</span>;

        <span style="color: #008800; font-weight: bold">return</span> <span style="color: #336699">$this</span>;
    }

    <span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">function</span> <span style="color: #0066bb; font-weight: bold">getImage</span>(): ?string
    {
        <span style="color: #008800; font-weight: bold">return</span> <span style="color: #336699">$this</span>-&gt;<span style="color: #336699">image</span>;
    }

    <span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">function</span> <span style="color: #0066bb; font-weight: bold">setImage</span>(string <span style="color: #336699">$image</span>): self
    {
        <span style="color: #336699">$this</span>-&gt;<span style="color: #336699">image</span> = <span style="color: #336699">$image</span>;

        <span style="color: #008800; font-weight: bold">return</span> <span style="color: #336699">$this</span>;
    }

    <span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">function</span> <span style="color: #0066bb; font-weight: bold">getPrice</span>(): ?int
    {
        <span style="color: #008800; font-weight: bold">return</span> <span style="color: #336699">$this</span>-&gt;<span style="color: #336699">price</span>;
    }

    <span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">function</span> <span style="color: #0066bb; font-weight: bold">setPrice</span>(int <span style="color: #336699">$price</span>): self
    {
        <span style="color: #336699">$this</span>-&gt;<span style="color: #336699">price</span> = <span style="color: #336699">$price</span>;

        <span style="color: #008800; font-weight: bold">return</span> <span style="color: #336699">$this</span>;
    }

}
</pre>
</div>
        <div style="margin-top: 10px;" >

        we add <span class="code">@ApiResource  </span>  annotation to tell Api Platform bundle that we want to add a new resource to our api that we
        will use in our react frontend, after creating the database and run the server, we will check the route 
        <span class="code">http://localhost:8000/api</span> which has a basic swagger documentation through it we 
        will
        make two post requests to create two product through in order to have some data to manipulate with.
      </div>
        <h4> 7- Create our table in database </h4>
        <div
            style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
            <pre style="margin: 0; line-height: 125%"><span style="color: #888888">#create database </span>
php bin/console doctrine:database:create
<span style="color: #888888">#make migration to generate SQl code</span>
php bin/console  make:migration 
<span style="color: #888888">#create our table in database</span>
php bin/console doctrine:migrations:migrate
<span style="color: #888888">#or run this command to create our make migration and create the table both.</span>
php bin/console doctrine:schema:update 
</pre>
        </div>

        <h4>8-Configure webpack encore </h4>
        <div style="margin-bottom: 10px">first let us add some dependencies with yarn, you can use npm too. </div>
        <div
            style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
            <pre style="margin: 0; line-height: 125%">yarn add @babel/preset-react --dev
yarn add react react-dom 
   </pre>
        </div>
        <div style="margin-bottom: 10px; margin-top: 10px;">
            <span class="code">webpack.config.js </span> already holds the basic config you need, thanks to recieps, so
            to enable react we should uncomment .enableReactPreset() in webpack.config.js file
        </div>
        <div
            style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
            <pre style="margin: 0; line-height: 125%">Encore
     ...
+     .<span style="color: #336699">enableReactPreset</span>()
     ...
;
</pre>
        </div>
        <h4>

            9-add Two Twig helpers from WebpackEncoreBundle to base.html.twig file to load javascript and css compiled
            to
            your app :
        </h4>
        <div
            style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
            <pre style="margin: 0; line-height: 125%">{# templates/base.html.twig #}
<span style="color: #cc0000; font-weight: bold">&lt;!DOCTYPE html&gt;</span>
<span style="color: #bb0066; font-weight: bold">&lt;html&gt;</span>
    <span style="color: #bb0066; font-weight: bold">&lt;head&gt;</span>
        

        {% block stylesheets %}
            {{ encore_entry_link_tags(&#39;app&#39;) }}

            <span style="color: #888888">&lt;!-- Renders a link tag (if your module requires any CSS)</span>
<span style="color: #888888">                 &lt;link rel=&quot;stylesheet&quot; href=&quot;/build/app.css&quot;&gt; --&gt;</span>
        {% endblock %}
    <span style="color: #bb0066; font-weight: bold">&lt;/head&gt;</span>
    <span style="color: #bb0066; font-weight: bold">&lt;body&gt;</span>
       

        {% block javascripts %}
            {{ encore_entry_script_tags(&#39;app&#39;) }}

            <span style="color: #888888">&lt;!-- Renders app.js &amp; a webpack runtime.js file</span>
<span style="color: #888888">                &lt;script src=&quot;/build/runtime.js&quot;&gt;&lt;/script&gt;</span>
<span style="color: #888888">                &lt;script src=&quot;/build/app.js&quot;&gt;&lt;/script&gt; --&gt;</span>
        {% endblock %}
    <span style="color: #bb0066; font-weight: bold">&lt;/body&gt;</span>
<span style="color: #bb0066; font-weight: bold">&lt;/html&gt;</span>
</pre>
        </div>

        <h4>10-run this command to compile javascript and css code on each change in your scripts :</h4>
        <div
            style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
            <pre style="margin: 0; line-height: 125%">yarn encore dev --watch
</pre>
        </div>
        <div style="margin-bottom: 10px; margin-top: 10px;">
        now let us enjoy with writing some JSX code in app.js file to fetch somme Product:
            
        </div>
        <div
            style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
            <pre style="margin: 0; line-height: 125%"><span style="color: #008800; font-weight: bold">import</span> React, {useState, useEffect} from <span style="color: #dd2200; background-color: #fff0f0">&#39;react&#39;</span>;
<span style="color: #008800; font-weight: bold">import</span> ReactDOM from <span style="color: #dd2200; background-color: #fff0f0">&#39;react-dom&#39;</span>;

<span style="color: #008800; font-weight: bold">const</span> App = () =&gt;{
   <span style="color: #008800; font-weight: bold">const</span> [products, setProducts] = useState([]);

   useEffect(()=&gt;{
      fetch(<span style="color: #dd2200; background-color: #fff0f0">&#39;http://localhost:8000/api/products&#39;</span>)
      .then(response=&gt;setProducts(response.data))
      .<span style="color: #008800; font-weight: bold">catch</span>(e=&gt;console.log(e));
   },[]);

   <span style="color: #008800; font-weight: bold">return</span>(
       &lt;div&gt;
          &lt;ul&gt;
             { products.map(p=&gt;(
                 &lt;li key={product.id}&gt;
                    &lt;img src={product.image} alt={product.title} /&gt;
                    {product.title} cost {product.price}
                 &lt;<span style="color: #a61717; background-color: #e3d2d2">/li&gt;</span>
             )) }
          &lt;<span style="color: #a61717; background-color: #e3d2d2">/ul&gt;</span>
      &lt;<span style="color: #a61717; background-color: #e3d2d2">/div&gt;</span>
   );
}
ReactDOM.render(&lt;App /&gt;, <span style="color: #003388">document</span>.getElementById(<span style="color: #dd2200; background-color: #fff0f0">&#39;root&#39;</span>));
</pre>
        </div>
        <h4>11-create a new controller in your app by running the command</h4>
        <div
            style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
            <pre style="margin: 0; line-height: 125%"><span style="color: #888888">#create new controller called DefaultController</span>
php bin/console make:controller DefaultController
</pre>
        </div>


        <h4>12- edit your controller to be smillar to this : </h4>
        <!-- HTML generated using hilite.me -->
        <div
            style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
            <pre style="margin: 0; line-height: 125%"><span style="color: #cc0000; font-weight: bold">&lt;?php</span>
<span style="color: #888888">#src/Controller/DefaultController.php</span>
<span style="color: #008800; font-weight: bold">namespace</span> App\Controller;

<span style="color: #008800; font-weight: bold">use</span> Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
<span style="color: #008800; font-weight: bold">use</span> Symfony\Component\Routing\Annotation\Route;

<span style="color: #008800; font-weight: bold">class</span> <span style="color: #bb0066; font-weight: bold">DefaultController</span> <span style="color: #008800; font-weight: bold">extends</span> AbstractController
{
     <span style="color: #dd2200; background-color: #fff0f0">/**</span>
<span style="color: #dd2200; background-color: #fff0f0">     *  @Route(&quot;/{reactRouting}&quot;, name=&quot;home&quot;, defaults={&quot;reactRouting&quot;: null})</span>
<span style="color: #dd2200; background-color: #fff0f0">     */</span>
    <span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">function</span> <span style="color: #0066bb; font-weight: bold">index</span>()
    {
        <span style="color: #008800; font-weight: bold">return</span> <span style="color: #336699">$this</span>-&gt;<span style="color: #336699">render</span>(<span style="color: #dd2200; background-color: #fff0f0">&#39;default/index.html.twig&#39;</span>);
    }
}
</pre>
        </div>

        <h4>12- the last thong is to create a div#root in your index.html.twig file and you're done. </h4>
        <div
            style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
            <pre style="margin: 0; line-height: 125%"><span style="color: #888888">&lt;!--templates/default/index.html.twig!--&gt;</span>
{% extends &#39;base.html.twig&#39; %}

{% block title %}Hello To My App!{% endblock %}

{% block body %}
  <span style="color: #bb0066; font-weight: bold">&lt;div</span> <span style="color: #336699">id=</span><span style="color: #dd2200; background-color: #fff0f0">&quot;root&quot;</span><span style="color: #bb0066; font-weight: bold">&gt;&lt;/div&gt;</span>
{% endblock %}
</pre>
        </div>
    </div>
</body>

</html>

```