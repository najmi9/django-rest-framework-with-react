# Django Rest Framework ApiView and React JS

# reference [https://www.django-rest-framework.org/]()

Django is a web developpment python framework, framwork is 

create virtual enviroment called venv, you can named what you want.
```bash
python3 -m venv venv
# activate our virtual enviroment 
# on Linux or Max
source bin/venv/activate
# on windows
venv\Scripts\activate.bat

# when you want to deactivate venv
deactivate
```
Install django framework in your virtual enviroment
```bash
pip install django
```
Create our project with the name `api_django`
```bash
django-admin startproject api_django
```
Change dirctory to our project
```bash
cd api_django
```
Create an new application called api for example, and install RestFramework
```bash
python manage.py startapp api
pip install djangorestframework
```
Add the two appalications to `INSTALLED_APPS` variable in `setting.py` file.

```python
#api_django.settings.py-------------------------
INSTALLED_APPS = [
	#....
	'rest_framework',
	'api',  # activate the new app
]
```
In this project we will use a simple SQLITE database, that come by default in D

```python
#api_django.settings.py-------------------------
DATABASES = {
    'default': {jango
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
]
```
Now we will create a model for application.

```python
class Product(models.Model):
	title = models.CharField(max_length=255, blank=False, null=False)
	price = models.FloatField()
	image = models.URLField()
	createdAt = models.DateTimeField(auto_now_add=True)
	updtedAt = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.title

```
we are going now to create the database and the table Product :


```bash
python manage.py makemigrations
python manage.py migrate
```

Let us create a serializer to this model :

```python
#api.serializers.py
from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):

	class Meta:
		model = Product
		fields = ['id', 'title', 'price', 'image']

```
After we will create an ApiView for our resource product.
```python
#api.view.py
from .models import Product
from .serializers import ProductSerializer
from rest_framework import viewsets

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

```
Finaly we configure our url to intercat with APIs, first we will inclure the urls from `api` app with prefix `api/`.

```python
# api_django.urls.py
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [

    path('api/', include('api.urls')),
]
```
Second we add the route :
```python
#api.urls.py
from django.urls import path, include
from .views import ProductViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('products', ProductViewSet, 'products')

urlpatterns = [
	path('', include(router.urls)),
]

```
We can also manage this model product in administration by register it in `admin.py` file
```python
#api.admin.py
from django.contrib import admin
from .models import Product
# Register your models here.
admin.site.register(Product)
```

Now we can run the server, and interact with our API on port 80.
```bash
python manage.py runserver
```

Let us create some random product to manipulate with.
![create product with api](/media/imgs/django1.png)


## Front end with React

First of all, create a new react app called frontend :


```bash
npx create-react-app frontend

```

Now edit your `app.js` file to be simllar to that :



```jsx
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(false)

   useEffect(()=>{
      fetch('/api/products')
      .then(response=>response.json())
      .then(response=>{
        setProducts(response)
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
export default App;
```

Two important things to do in `settings.py` file  are : 

```python
##--------fix the template to be your react app--
import os

TEMPLATES = [
	{
		#.....
		'DIRS': [os.path.join(BASE_DIR, 'frontend/build')],
		#.....
	}
]

# add static files

STATICFILES_DIRS=[os.path.join(BASE_DIR, 'frontend/build/static')]

```

After add in `api_django.urls.py` file the home page url that point to main react file `index.html`

```python
#api_django.urls.py

from django.views.generic import TemplateView

urlpatterns = [
   #...
    path('', TemplateView.as_view(template_name='index.html')),
]

```
Finaly run this command to compile your files in `build` dirctory after you change the current dirctory to `frontend` folder :
```bash
yarn build
```

Go to Home page and enjoy with your new app.


___
Author  : Najmi Imad
Github : [Github Repo](http://github.com/najmi9/api_django_blog) 

