<h2 class="article-title"> Create New Symfony Bundle </h2>


```bash
composer require sensio/generator-bundle
```

# Folder structure:

- libs
    - RecaptchaBundle
        - RecaptchaBundle.php
        - RecaptchaCompilerPass.php
        - Constraints
            - Recaptcha.php
            - RecaptchaValidator
        - DependencyInjection
            - RecaptchaExtension.php
            - Configuration.php
        - Resources
            - config
                - services.yaml
            - views
                - fields.html.twig
        - Type
            - RecaptchaSubmitType.php


add the following line to your composer.json file within the psr-4 section
```json
// composer.json

"autoload": {
    "psr-4": {
        "Najmi\\Recaptcha\\": "libs/RecaptchaBundle"
    },
}
```
The regenrate the autoload files:

```bash
 composer dump-autoload
 ```

And don't hesitate to enable the bundle in `config/bundles.php` file:

```php
    return [

        # ...

        // this bundle is enabled only in 'dev' and 'test', so you can't use it in 'prod'
        Najmi\Recaptcha\RecaptchaBundle::class => ['dev' => true, 'test' => true],
    ];
```

# Creating The Bundle

```php
namespace Najmi\Recaptcha\TestBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class AcmeTestBundle extends Bundle
{
}
```




# Debug twig

```bash
php bin/console debug:twig
```

We have a namespace point drectly to the folder *Resources/views*, So if you want to use a view from the bundle you prefix the patch by @BundleName.

```bash
php bin/console debug:container --parameters=twig.form | grep twig.form.resources
```
Shows all the resources and path in which the form system will be able to search for templates,
 so we need to the table of resources our path, to do this we need to modify the container and will be done by the file `RecaptchaBundle.php file`
