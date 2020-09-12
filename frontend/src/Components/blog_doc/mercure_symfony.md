# Mercure Protocol With Symfony and Api Platform
## Mercure Protocol
protocol built-in top of [server-sent-event](http://google.com)
## Symfony
Php Framework 
## Api Platform 
Api-Platform is a poxerful and easy-to-use library to built REST and GRAPHQL APIs.
___
## How SEE works
the intersting point here is that the server keep push notifications to all listening divices. if we fire it with one update with POST request.
  **example :**
  When an user send a notification by POST request to all currently connected users on our website that is saved in database, we want to notify all users by this notifications. So when the notification is saved in db we make an update to our server, and then the server push to all connected users a notification.

```php
  $update = new Update(['http://website.com']);
  $sender->send($update);
```
We listen to that in javascripy by a classic listener:

```javascript
$url = new URL('http://localhost:3000/hub');
$url.append('http://website.com');
$eventSource = new EventSource($url);
$eventSource.onmessage(e=>{
    console.log(e);
});
```
## Authentication With Topics
there here some text...
$$ f(x) = x² + 5x + 1 $$
1. calculate :  $ lim_{x->\infty}\int_{-\infty}^\infty 
\sqrt{|f(x)|} e^{-x²} \sin(\omega x) dx $
2. what you think ?
3. > Where are living the future, so the past is our present.
4. ```<div>```
5. <del> coco les amis </del>
6. [x] 
7. @mentions 
8. #refs

| name              | language        |
| ----------------- | --------------- |
| Imad Najmi        | PHP, JAVASCRIPT |
| Lior Chamla       | Symfony         |
| Zakaria Ettaoussi | Physics         |

___
```bash
php bin/console make:migrations
```