<h2 class="mt-2 rounded shadow-lg p-3 text-primary text-center">
Web Scraping With Python: Partcical examples
</h2>

### Introduction 

[Web scraping](https://en.wikipedia.org/wiki/Web_scraping) or web data extraction is a technique which computer program extraxts data from human-readable output coming from another program.
Basically we use a script to automatically extract data from websites and store it in a database or a file.
t’s possible to do web scraping with many other programming languages like java or even javascript... but Python is recommended because of his simplicity and the powerfull libraries the he have like [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) and Requests, notice that before use any website  you should look for a **terms and conditions page** to see if there are explicit rules about scraping. If there are, we should follow them. If there are not, then it becomes more of a judgement call.
### How it's work ?

As you know web page is a HTML, CSS, javascript files and some data like text and images, it seems something like that :

```html
<html>
<head>
    <title> Title Page </title>
    <link href="style.css" type="text/css" />
</head>
<body>
    <header> the head of the website like navbar or the logo </header>
    <main> 
          <h1 class="title"> The title of the web page </h1>
          <img src="path/to/image"  id="image" />
          <div class="content">
              <p class="p1"> some text here </p>
              <p class="p2">  the other paragraph here </p>
          </div>
    </main>
    <footer id="footer"> 
       The footer of the page with copy rights
    </footer>
    <script src="app.js"></script>
</body>
</html>
```
In this file, we have CSS selectors like `class` and `id` and we will use them to select a specific data.

So basically the main goal is to extract this data from this web page using python.

Some cases we have already data stored in `csv` file and  need to fill forms  and submit this data  to a web server automatically, in this case we will use a web driver to do that by usinig `Selenium` library in python.

Some cases  we will need just to get the response from the server to extract data from, in this case we use the `request` package to download this page, also we will use the `BeautifulSoup` library to select a specific data from the web page.

To submit a form you can use `Selenium` libarary with a web driver like `chrome` or `firefox`. we will give an example in the last part of this article
.
### Practical example 1 : extract profile information from Instagram for a given username.


```python
# used to download the page from istagram by get request
import requests
# used to parse the server response to html to select specific atteributes and tages
from bs4 import BeautifulSoup
# used to deal with json in python and convert a json (string) to a dictionnary
import json
# used to deal with scv files easelly
import csv

username = input('Enter the username : \n')

while username == '':
	print('Enter the username please !')
	username = input('Enter your username')

# web page url
url = "https://www.instagram.com/{}/".format(username)
#make e GET request to download the page
try:
	response = requests.get(url)
except Exception as e:
	raise e

# Ensure that the username exists and the response is OK
if not response.ok:
	print('response not found, the username is correct ?')
	raise requests.exceptions.RequestException

# parse the text response to html
soup = BeautifulSoup(response.text, features='html.parser')

# select the content of 4 fourthy script that contain data
string = soup.find_all('script')[4].string

# remove useless data
string = string.replace(';', '').replace('window._sharedData = ', '')

#convert the string to a dictionnary
data = json.loads(string)

#select the user info
user = data['entry_data']['ProfilePage'][0]['graphql']['user']

# extract the nombre of fllowers
fllowers = user['edge_followed_by']['count']

# extract the nombre of fllowing
fllowing = user['edge_follow']['count']

name = user['full_name']

username = user['username']

image = user['profile_pic_url']

posts = user['edge_owner_to_timeline_media']['edges']

# open a csv file in append mode to add user data.
with open('data.csv', 'a', newline='\n') as csvfile : 
	csv_file = csv.writer(csvfile)
	csv_file.writerow(['username', 'name','image', 'fllowers', 'fllowing', 'posts'])
	csv_file.writerow([username, name,image, fllowers, fllowing, len(posts)])
	print('the process successed !')

```

### Practical example 2 : Submit a login form automatically with given username and password.

Selenium Python bindings provide a convenient API to access Selenium WebDrivers like Firefox, Ie, Chrome, Remote etc. The current supported Python versions are 3.5 and above. Selenium is mostly used for writing test cases.

For more informationn you can check this amazing [documentation](https://selenium-python.readthedocs.io)

To install Selenium you can run this command : 
```bash
pip install selenium
```

Selenium requires a driver to interface with the chosen browser. Firefox, for example, requires geckodriver, which needs to be installed before the below examples can be run. Make sure it’s in your PATH, e. g., place it in `/usr/bin` or 
`/usr/local/bin`.


You can install firefox driver from [here](https://github.com/mozilla/geckodriver/releases)

The selenium.webdriver module provides all the WebDriver implementations. Currently supported WebDriver implementations are Firefox, Chrome, IE and Remote.

The fllowing example show how to submit a login form automatically.

```python
from selenium import webdriver

driver = webdriver.Firefox()

url = 'https://shopping-najmi.herokuapp.com/login/'

#The driver.get method will navigate to a page given by the URL
driver.get(url)
#WebDriver offers a number of ways to find elements using one of the find_element_by_* methods
username = driver.find_element_by_name('email')
password = driver.find_element_by_name('password')
btn = driver.find_element_by_css_selector('button[type="submit"]')

# to clean inputs from default values
username.clear()
password.clear()

# fill inputs by given data
username.send_keys("****@gmail.com")
password.send_keys("*******")
# click to subbmit the form
btn.click()
  
#close the driver
driver.close()
```
## Author : IMAD Najmi 
##[Github](https://github.com/najmi9/web_scraping_blog)