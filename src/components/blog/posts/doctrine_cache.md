<h2 class="article-title">
Doctrine ORM: Integration Of Second Level Cache With Symfony.
</h2>

### Introduction
This article describes how to improve your Symfony 5 app’s performance by introducing Doctrine’s second level cache. The Second Level Cache is designed to reduce the amount of necessary database access. It sits between your application and the database to avoid the number of database hits as much as possible. 

### What we can cache with doctrine?

***Query Cache*** : This cache saves the transformation of a DQL query to its SQL counterpart, it doesn't make sense  to do this parsing multiple times.

***Result Cache*** : Cache the result of the queries so we don't query the database or hydrate the data again after the first time.

***Metadata Cache*** : Instead of parsing the class metadata (YAML, XML, Annotations, ...) on each request , we should cache.

### Caching Regions

Second level cache does not store instances of an entity, instead it caches only entity identifier and values. Each entity class, collection association and query has its region, where values of each instance are stored.

Caching Regions are specific region into the cache provider that might store entities, collection or queries. Each cache region resides in a specific cache namespace and has its own lifetime configuration.

Notice that when caching collection and queries only identifiers are stored. The entity values will be stored in its own region.

### Caching Mode

- **READ_ONLY (DEFAULT)** :  the fastest and simple but also unable to perform updates and locks 
- **NONSTRICT_READ_WRITE** : able to perform updates but not locks

- **READ_WRITE** :  the slowest one, able to perform updates and locks and the only we can use when implementing a custom region

In this article we will use just the first caching mode.

### Integraction with Symfony

#### Configuration
You can use a Symfony Cache pool by using the pool type and creating a cache
pool through the FrameworkBundle configuration. The service type lets you
define the ID of your own caching service.

So make sure that you are installing Doctrine and Cache bundles:

```bash
 composer require symfony/cache doctrine/doctrine-bundle doctrine/orm
```
In your `doctrine.yaml` file add this code to enable the second level cache and 

```bash
#config/packages/doctrine.yaml

doctrine:
	orm:
		second_level_cache:
            enabled: true
            region_cache_driver:
                type: pool
                pool: doctrine.second_level_cache_pool
```

In the `cache.yaml` file add tis code, we use Redis as adapter and you can use what you want :

```bash
#config/packages/cache.yaml

framework:
    cache:
        app: cache.adapter.redis
        default_redis_provider: redis://localhost # is recommended to use .env file
        pools:
            doctrine.second_level_cache_pool:
                adapter: cache.app
```
#### Basic Usage
Entity cache configuration allows you to define the caching strategy and region for an entity.
* usage specifies the caching strategy: READ_ONLY, NONSTRICT_READ_WRITE, READ_WRITE. See The Second Level Cache.
* region is an optional value that specifies the name of the second level cache region.

```php
#src/Entity/Like.php

namespace App\Entity;

use App\Repository\LikeRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Cache;

/**
 * @ORM\Entity(repositoryClass=LikeRepository::class)
 * @ORM\Table(name="`like`")
 * @Cache('READ_ONLY', region='my_entity_region')
 */
class Like
{
	# ...

	 /**
     * @Cache
     * @ManyToOne(targetEntity="User")
     * @JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user;


```

Now in you repository you can enable the query cache for your own methods, and keep in mind that the query cache stores the results of the query but as identifiers.

```php
#src/Repository/LikeRepository.php

public function findByExampleField($value)
    {
        return $this->createQueryBuilder('l')
            ->getQuery()
            ->setCacheable(true)
            ->getResult()
        ;
    }
```

So Now if you call any method from the `LikeRepository` the doctrine hit database to insert the row and put into cache.

```php
#src/Controller/HomeController.php

  /**
     * @Route("/", name="home")
     */
    public function index(EntityManagerInterface $em, LikeRepository $likeRepo): Response
    {
        $user = $this->getUser(); //retrieve item from cache for the second call

        $likes = $likeRepo->findByExampleField($user); //retrieve item from cache for the second call
        
        return $this->render('home/index.html.twig', [
            'user' => $user,
            'likes' => $likes,
        ]);
    }
```

<div class="text-center">
	<img src="static/imgs/blog/doctrine-cache/no-query.png" style="max-height: 500px; max-width: 600px;" alt="doctrine second level cache in symfony">
</div>

####  How to clear and invalidate the cache?

```php
#src/Controller/HomeController.php

# ...

use Doctrine\ORM\EntityManegerInterface;

# ...

class HomeController 
{
	# ...
	/**
	 * @Route('/')
	 */
	public function index(EntityManegerInterface $em)
	{
		# ....

 		$cache = $em->getCache();
    	$cache->containsEntity(Like::class, 1)  // Check if the cache exists
    	$cache->evictEntity(Like::class, 1);  // Remove an entity from cache
    	$cache->evictEntityRegion(Like::class); // Remove all entities from cache
    	$cache->containsCollection(Like::class, 'likes', 1); // Check if the cache exists
    	$cache->evictCollection(Like::class, 'likes', 1);// Remove an entity collection from cache
    	$cache->evictCollectionRegion(Like::class, 'likes');// Remove all collections from cache

    # ...
	}
}
```