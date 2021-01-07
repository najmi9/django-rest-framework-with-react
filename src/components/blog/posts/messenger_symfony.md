<h2 class="article-title">
Messenger: Sync & Queued Message Handling
</h2>

# Table of Content:
1. [Introduction](#introduction)
2. [Development](#development)
    1. [Installation](#installation)
    2. [Creating a Message & Handler](#creating-a-message-and-handler)
    3. [Dispatching the Message](#dispatching-the-message)
    4. [Transports Async Queued Messages](#transports-async-queued-messages)
    5. [Consuming Messages Running the Worker](#consuming-messages-running-the-worker)
3. [Production](#production)
    1. [Introduction](#introduction)
    2. [Installation Of The Supervisor](#installation-of-the-supervisor)
    3. [Configuration](#configuration)
    4. [Running The Supervisor](#running-the-supervisor)
    5. [Usefull Links](#usefull-links)


### Inroduction

Messenger provides a message bus with the ability to send messages through transports (e.g. queues) to be handled later, and by using a **worker** that looking for new messages on your transport and handling them. so we need some util that are always running and handling the messages and If it quits for some reason, start a new one, and this util called `Supervisor`.

[Supervisor](http://supervisord.org/): A Process Control System is a client/server system that allows its users to monitor and control a number of processes on UNIX-like operating systems.

In this article we will going to show you how to create and handle some logic asychronounsly and handle the configuration of the supervisor in the production mode, because you don't need a supervisor in development, you can run the worker (`php bin/console messenger:consume`) manually. 

### Development

#### Installation

```bash
composer require symfony/messenger
```

#### Creating a Message and Handler
Messenger centers around two different classes that you’ll create: (1) a message class that holds data and (2) a handler(s) class that will be called when that message is dispatched. The handler class will read the message class and perform some task.

There are no specific requirements for a message class, except that it can be serialized:

```php
// src/Message/SmsNotification.php
namespace App\Message;

class SmsNotification
{
    private $content;

    public function __construct(string $content)
    {
        $this->content = $content;
    }

    public function getContent(): string
    {
        return $this->content;
    }
}
```

```php
// src/MessageHandler/SmsNotificationHandler.php
namespace App\MessageHandler;

use App\Message\SmsNotification;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

class SmsNotificationHandler implements MessageHandlerInterface
{
    public function __invoke(SmsNotification $message)
    {
        // ... do some work - like sending an SMS message!
    }
}
```

#### Dispatching the Message

You’re ready! To dispatch the message (and call the handler), inject the messenger.default_bus service (via the MessageBusInterface), like in a controller:

```php
// src/Controller/DefaultController.php
namespace App\Controller;

use App\Message\SmsNotification;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Messenger\MessageBusInterface;

class DefaultController extends AbstractController
{
    public function index(MessageBusInterface $bus)
    {
        // will cause the SmsNotificationHandler to be called
        $bus->dispatch(new SmsNotification('Look! I created a message!'));

        // or use the shortcut
        $this->dispatchMessage(new SmsNotification('Look! I created a message!'));

        // ...
    }
}

```

#### Transports Async Queued Messages
By default, messages are handled as soon as they are dispatched. If you want to handle a message asynchronously, you can configure a transport. A transport is capable of sending messages (e.g. to a queueing system) and then receiving them via a worker. Messenger supports multiple transports.

```yaml
#config/messenger.yaml

framework:
    messenger:
        transports:
             async: '%env(MESSENGER_TRANSPORT_DSN)%'
             failed: 'doctrine://default?queue_name=failed'

        routing:
            'App\Message\SmsNotification': async
```
In this article we will use Redis as a transport, The Redis transport uses streams to queue messages. This transport requires the Redis PHP extension (>=4.3) and a running Redis server (^5.0).

```bash
composer require symfony/redis-messenger

#.env
MESSENGER_TRANSPORT_DSN=redis://localhost:6379/messages
# Full DSN Example
MESSENGER_TRANSPORT_DSN=redis://password@localhost:6379/messages/symfony/consumer?auto_setup=true&serializer=1&stream_max_entries=0&dbindex=0
# Unix Socket Example
MESSENGER_TRANSPORT_DSN=redis:///var/run/redis.sock
``` 
Set delete_after_ack to true (if you use a single group) or define stream_max_entries (if you can estimate how many max entries is acceptable in your case) to avoid memory leaks. Otherwise, all messages will remain forever in Redis.

#### Consuming Messages Running the Worker
```bash
php bin/console messenger:consume async
```
The first argument is the receiver’s name (or service id if you routed to a custom service). By default, the command will run forever: looking for new messages on your transport and handling them. This command is called your ***worker***.

### Production
#### Introduction
On production, there are a few important things to think about:

* Use Supervisor to keep your worker(s) running

* Don’t Let Workers Run Forever:  use a flag like `messenger:consume --limit=10` to tell your worker to only handle 10 messages before exiting (then Supervisor will create a new process). There are also other options like `--memory-limit=128M` and `--time-limit=3600`.

* Restart Workers on Deploy: To do this, run `messenger:stop-workers` on deploy. This will signal to each worker that it should finish the message it’s currently handling and shut down gracefully.

On production, we somehow need to make sure that this command is always running and  If it quits for some reason, start a new one. And actually, it's not just that we need a way to make sure that someone starts this command and then it runs forever. We actually don't want the command to run forever. No matter how well you write your PHP code, PHP just isn't meant to be ran forever - eventually your memory footprint will increase too much and the process will die. We don't want our process to run forever.  what we really want is for `messenger:consume` to run, handle... a few messages... then close itself. Then, we'll use a different tool to make sure that each time the process disappears.


#### Installation Of The Supervisor

```bash
sudo apt-get install supervisor
```
#### Configuration

The Supervisor configuration files typically live in a `/etc/supervisor/conf.d` directory and the configuration file is conventionally named `supervisord.conf`.
Thsi file should contains the following code, and keep it in your project under `config/messenger-worker.conf` file.

```bash
#/etc/supervisor/conf.d/supervisord.conf

[program:messenger-consume] # the name of the program
command=php /path/to/your/app/bin/console messenger:consume async --time-limit=3600 # command to execute when the supervisor running
user=ubuntu # change it by the user on your server
numprocs=2 # create two worker processes.
autostart=true #his program will start automatically when supervisord is started.
autorestart=true #automatically restart a process if it exits when it's running
process_name=%(program_name)s_%(process_num)02d # name the processes
startsecs=0 #The total number of seconds which the program needs to stay running after a startup to consider the start successful. 
```

Don't forget to change the user to the Unix user on your server.
Environment variables that are present in the environment at the time that supervisord is started can be used in the configuration file using the Python string expression syntax `%(ENV_X)s`

The configuration file must contain one or more program sections in order for supervisord to know which programs it should start and control. The header value is composite value. It is the word *program*, followed directly by a colon, then the program name. A header value of [program:foo] describes a program with the name of *foo*. The name is used within client applications that control the processes that are created as a result of this configuration.

This will create two worker processes. The more workers you run, the more messages can be handled at once. But also, the more memory & CPU you'll need.

Next, tell Supervisor to read your config and start your workers.

#### Running The Supervisor
To get our configuration file into config directory, we can create a symlink to it.

```bash
#copy the configuration file that exist in your project to the configuration folder of the sepervisor
sudo ln -s path/to/project/config/messenger-worker.conf /etc/supervisor/conf.d

sudo supervisorctl reread

sudo supervisorctl update

# When you create a "program" called messenger-consume, this creates what's called a "homogeneous process group". Because we have processes=2, this group will run two processes. By saying messenger-consume:* it tells Supervisor to start all processes inside that group.
sudo supervisorctl start messenger-consume:*
```

# Usefull Links:

1- [Symfonycasts](https://symfonycasts.com/screencast/messenger/deploy)
2- [Symfony Docs](https://symfony.com/doc/current/messenger.html#consuming-messages-running-the-worker)
3- [Supervisor Configuration](https://symfony.com/doc/current/messenger.html#messenger-supervisor)