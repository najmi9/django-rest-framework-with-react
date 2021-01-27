<h2 class="article-title">
Create posts automatically on Facebook with Selenium and Python
</h2>

## What's we going to do ?
After we enter the username and password of our Facebook account, the srcipt will be logged in and save the browser's cookies in a file using **pickle** to use it in the next time to avoid a login again, after authentification, we will get the text and the image from a **csv file** that contains the content and the path to the image of all future publications, to be published  after fill in the publication form.
All this work will be scheduled to be done every day at specific time.

The `csv file` will contains for example 50 lines, each line contains the content and the path to the image of one post that will be published. every day we will take a line from the csv file and publish it, and that will be in 50 days.

## Prerequists
 - Python to be istalled
 - Seleium and Chrome or Firefox webdriver 
 - scv module to deal with csv files
 - schedule to schedule our script to do the job at specific time
 - pickle to dump the cookies in file and load them when we need
## Details

Every time the `job function` called,  it  loads the cookies  from the `cookies.pkl` file using *pickle* module and add them to the driver, after that it requests the home page, and if the page title containg login word that means we need to log in and cookies are no more valid, so we are redirected to login page.

The `data.csv` file contains the text and image to be published in a post, it will be like that : 
```csv
text,image
Hello Wold, path/to/image/post1.png
Hi friends, path/to/image/post1.png
```
Each  line will publish in a day and you can add lines as much as you want.
To obtain a row that corresponds to a day we declare a variabe `i` globally to be accessible in job function and we will increment it each time a post is published, to obtain the next line to publish the next post.


```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import pickle
from time import sleep
from getpass import getpass # hide the password typed in the terminal
import schedule
import csv

username = input('Enter your facebook username \n')
password = getpass()
print('publishing ...')
url = "https://mbasic.facebook.com/"
options = Options()
options.headless = True # set it False to see the process directly in the browser
driver = webdriver.Chrome('../../chromedriver', options = options)

i = 0

def job():	
	global i
	driver.get(url)
	# add cookies to browser if they exists and not expired
	try:
		cookies = pickle.load(open('cookies.pkl', 'rb'))
		for cookie in cookies:
			driver.add_cookie(cookie)
	except Exception as e:
		print("There is no cookies, we will login.")
	driver.get(url)
	sleep(2)
	if driver.title == "Facebook – log in or sign up":
		usernameInput = driver.find_element_by_xpath("//input[@name='email']")
		passwordInput = driver.find_element_by_xpath("//input[@name='pass']")
		usernameInput.send_keys(username)
		passwordInput.send_keys(password)
		passwordInput.submit()
		cookies = driver.get_cookies()
		sleep(2)
		pickle.dump(cookies, open('cookies.pkl', "wb"))
		try:
			driver.find_element_by_xpath("//input[@value='OK']").click()
			sleep(1)
		except Exception as e:
			pass
		i = i + 1

	driver.find_element_by_xpath("//input[@value='Photo']").click()
	with open('data.csv', "r") as csvfile:
		reader = csv.DictReader(csvfile)
		rows = [r for r in reader]
	driver.find_element_by_xpath("//input[@name='file1']").send_keys(rows[i]['image'])
	driver.find_element_by_xpath("//input[@name='add_photo_done']").click()
	sleep(1)
	driver.find_element_by_xpath("//textarea[@name='xc_message']").send_keys(rows[i]['text'])
	driver.find_element_by_xpath("//input[@name='view_post']").click()
	print("Post published !")

# schedule the job to done every day at 10:30
schedule.every().day.at("10:30").do(job)
  
while True:
	schedule.run_pending()
	sleep(1)

```
___
## Author : Imad NAJMI
 ## github : [here](https://github.com/najmi9/automate-publishing-posts-on-facebook)