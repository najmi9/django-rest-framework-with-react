<h2 class="article-title"> Implementation Of Algolia Engine With Symfony 5. </h2>

## Introduction

[Algolia](https://www.algolia.com) is a hosted search engine, offering full-text, numerical, and faceted search, capable of delivering real-time results from the first keystroke. Algolia’s powerful API lets you quickly and seamlessly implement search within your websites and mobile applications. 

The simplest way to integrate Algolia search is using the bundle **Algolia SearchBundle**. This bundle provides an easy way to integrate Algolia Search into your Symfony application (using Doctrine). It allows you to index your data, keep it in sync, and search through it.

The final result of this article is smillar to this image. 

<div class="article-image-wrapper">
<img class="article-image" src="/imgs/blog/algolia/algolia.png" alt="Algolia With Symfony">
</div>

You can see the source code in the [repository](https://github.com/najmi9/symfony-algolia), also in the repository I implemented the client side search with Javascript using Webpack Encore and algoliasearch package.

## Installation

```bash
symfony new algolia-demo --full
cd algolia-demo
composer require algolia/search-bundle
```

When I want to install the algolia search bundle I got an error of type your requirements could not be resolved, and the problem was the compatibility with the doctrine orm bundle `v2.7`, so I edited this version to `v2.5` and it works!!


After the istallation symfony flex will create a configuration file for algolia called `algolia_search.yaml` and edit the `.env` file to set your keys, to get this keys  create an account on www.algolia.com and get your credentials from the API Keys tab.

```yaml
#.env
ALGOLIA_APP_ID=...
ALGOLIA_API_KEY=...
```

### Configuration
Configuration typically lives in the `config/packages/algolia_search.yaml` file for a Symfony 4+ application.

This is how you define what entity you want to index and some other technical details like a prefix or the number of results and serialization groups.
Each entry under the indices key must contain the following attributes:
- name: is the canonical name of the index in Algolia
- class: is the full class reference of the entity to index

The option *enable_serializer_groups* is very important because solve the famous problem of **Circular Refrence**, so it let's you to define what attribute you want to index using the annotation `@Groups({"searchable"})` , because before sending your data to Algolia, each entity is converted to an array using the Symfony built-in serializer.

You can see more about the configuration in the [official docs](https://www.algolia.com/doc/api-client/symfony/configuration).

```yaml
algolia_search:
    prefix: '%env(APP_ENV)%_'
    nbResults: 8
    doctrineSubscribedEvents: [] #Avoid Indexing automatically via Doctrine Events in dev.
    indices:
        - name: products
          class: App\Entity\Product
          enable_serializer_groups: true
        - name: comments
          class: App\Entity\Comment
          enable_serializer_groups: true
```

I created 2 entities product and comment, with association manyToOne, so in this case if you don't use the annotation groups you will get an error of circular refrence.
```php
namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ProductRepository::class)
 */
class Product
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"searchable"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     *  @Groups({"searchable"})
     */
    private $name;

    /**
     * @ORM\Column(type="text")
     * @Groups({"searchable"})
     */
    private $description;

    /**
     * @ORM\Column(type="float")
     * @Groups({"searchable"})
     */
    private $price;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"searchable"})
     */
    private $isEnabled;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\OneToMany(targetEntity=Comment::class, mappedBy="product")
     */
    private $comments;
}
```

```php
namespace App\Entity;

use App\Repository\CommentRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=CommentRepository::class)
 */
class Comment
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"searchable"})
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     * @Groups({"searchable"})
     */
    private $content;

    /**
     * @ORM\Column(type="datetime")
     */
    private $cretaedAt;

    /**
     * @ORM\Column(type="datetime")
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=Product::class, inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     */
    private $product;
}
```

Once your indices config is ready, you can use the built-in console command to batch import all existing data.
```bash
# Import all indices
symfony console search:import
```
## Server Side Search

```php
    /**
     * @Route("/server/search", name="server_search", methods={"GET"})
     */
    public function search(Request $request, SearchService $searchService): Response
    {
        $q = $request->query->get('q');
        $page = $request->query->get('page', 0);
        $min = $request->query->get('min', 0);
        $max = $request->query->get('max', 0);
        $isEnabled=  $request->query->getInt('isEnabled', 0);

        $filters = "isEnabled = {$isEnabled}";
       
        ($min > 0 && $max > $min) ? $filters .= " AND (price > {$min})": null;
        ($max > 0 && $min < $max) ? $filters .= " AND (price < {$max})" : null;

        $results = $searchService->rawSearch(Product::class, $q, [
            'query' => $q,
            'page' => $page,
            'hitsPerPage' => 10,
            'attributesToRetrieve' => ['name', 'description', 'price', 'isEnabled'],
            'filters' => $filters, 
        ]);

        return $this->render('home/search.html.twig', [
            'results' => $results,
        ]);
    }
```
the searchRow method of injected SearchService you'll need to use if you want to retrieve the highlighted snippets or ranking information for instance, it takes the entity you want to search, the query and  optionally a $requestOptions array as the last parameter.

```js
<div class="search-form mb-3">
    <form class="row gx-3 gy-2 align-items-center">
        <div class="col-sm-3">
            <label class="visually-hidden" for="specificSizeInputGroupUsername">Search</label>
            <div class="input-group">
                <input type="text" class="form-control" value="{{ app.request.query.get('q', '') }}"
                    id="specificSizeInputGroupUsername" placeholder="Search ..." name="q" required>
            </div>
        </div>

        <div class="col-2">
            <div class="input-group">
                <input type="number" class="form-control" value="{{ app.request.query.get('min', '') }}" placeholder="Min" name="min">
            </div>
        </div>

        <div class="col-2">
            <div class="input-group">
                <input type="number" class="form-control" value="{{ app.request.query.get('max', '') }}" placeholder="Max" name="max">
            </div>
        </div>

        <div class="col-2">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" value="1" value="{{ app.request.query.get('isEnabled', 1) }}"
                    id="exampleCheck1" name="isEnabled" checked>
                <label class="form-check-label" for="exampleCheck1">Is Enabled</label>
            </div>
        </div>

        <div class="col-auto">
            <button type="submit" class="btn btn-primary">Search</button>
        </div>
    </form>
</div>
<div class="card">
    <div class="card-header">
        <h3 class="card-title">
            {{ results.nbHits }}
            Results for "{{ results.query }}"
        </h3>
    </div>

    <div class="card-body">
        {% for hit in results.hits %}
            <div class="border-bottom">
                <strong>
                    {{ hit._highlightResult.name.value|raw }}
                    --
                    <b>
                        {{ hit.price }}
                        $</b>
                </strong>
                <p>
                    {{ hit._highlightResult.description.value|raw }}
                </p>
            </div>
        {% else %}
            <h1> No records found! </h1>
        {% endfor %}
    </div>
</div>
```

## Client Side Search
Regarding client side implementations, if there is one thing to remember is to use a Search-Only API key. Your Admin API key is very sensitive: you should never share it with anyone and it must remain confidential.

To generate a search key for a given index, use the SearchClient’s generateSecuredApiKey method.


```php
 /**
     * @Route("/generate-search-only-key", name="key", methods={"GET"})
     */
    public function key(): JsonResponse
    {
        $searchOnlyAPIKey = $this->getParameter('search_only_key');
        $id = $this->getParameter('algolia_id');

        $validUntil = time() + 3600;

        $searchKey = SearchClient::generateSecuredApiKey(
            $searchOnlyAPIKey,
            [
                'validUntil' => $validUntil
            ]
        );

        return $this->json([
            'key' => $searchKey,
            'id' => $id
        ]);
    }
```
Start by installing the algoliasearch package to interact with Algolia's API.
```bash
yarn add algoliasearch # npm install -S algoliasearch
```

Create an input of type text to type the search keywords and create a new js file with this code.
```js
import algoliasearch from 'algoliasearch/lite';

(function () {
    document.querySelector('input#inputId').onkeyup = async e => {
        // You should use throttle function to avoid many calls at one time.
        // See the source code 
        const q = e.target.value
        const res = await search(q);

        showResults(res);
    }

    async function search(query) {
        // You should cash the keys to avoid multiple calls see the repository
        const res = await fetch('/key');
        const r = await res.json();
        const key = r.key;
        const id = r.id;

        const requestOptions = {}
        const client = algoliasearch(id, key);
        const index = client.initIndex('dev_products');
        const results = await index.search(query, requestOptions);
        return results;
    }

    const showResults = results => {
        let search = '';
        results.hits.forEach(hit => {
            search = search + hit(hit);
        });
        document.querySelector('h3#count').innerHTML = `${ results.nbHits } Results for "${ results.query }"`;
        document.querySelector('div#results').innerHTML = search;
    }

    const hit = hit => (`
        <div class="border-bottom">
            <strong>
                ${ hit._highlightResult.name.value }
                --
                <b>
                    ${ hit.price } $
                </b>
            </strong>
            <p>
                ${ hit._highlightResult.description.value }
            </p>
        </div>
    `);

})()
```

You can use a throttle function with a delay to handle the input change so you avoid calling Alogolia API every time the user type a letter.

```js
// The function is from this link : https://gist.github.com/beaucharman/e46b8e4d03ef30480d7f4db5a78498ca
function throttle(callback, wait, immediate = false) {
    let timeout = null 
    let initialCall = true
    
    return function() {
      const callNow = immediate && initialCall
      const next = () => {
        callback.apply(this, arguments)
        timeout = null
      }
      
      if (callNow) { 
        initialCall = false
        next()
      }
  
      if (!timeout) {
        timeout = setTimeout(next, wait)
      }
    }
  }

document.querySelector('input#inputId').onkeyup = throttle(async function(e) {
    const q = e.target.value
    const res = await search(q);
    showResults(res);
  });
```

To avoid call the server each time for the search only key, you can use a simple cache like this: 

```js
/// To cache the keys  
// import Cache from './cache'
// Cache.set('key', value)
// const value = await Cache.get('key')

const cache = {};

function set(key, data) {
  cache[key] = {
    data,
    cachedAt: new Date().getTime()
  };
}

function get(key) {
  return new Promise(resolve => {
    resolve(
      cache[key] && cache[key].cachedAt + 15 * 60 * 1000 > new Date().getTime()
        ? cache[key].data
        : null
    );
  });
}

function invalidate(key) {
  delete cache[key];
}

export default {
  set,
  get,
  invalidate
};
```

I added the two functions for more performance in my git repository [Here !](https://github.com/najmi9/symfony-algolia)
