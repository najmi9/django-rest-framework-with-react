from django.db import models
from trainingapp.settings import AUTH_USER_MODEL as User

class TimeStamp(models.Model):
	createdAt = models.DateTimeField(auto_now_add=True)
	updtedAt = models.DateTimeField(auto_now=True)
	class Meta:
		abstract = True

class Course(TimeStamp):
	title = models.CharField(max_length=255, blank=False, null=False)
	description = models.TextField()
	image = models.ImageField(upload_to='pictures/%Y/%m/%d/', max_length=255, null=False, blank=False)
	user=models.ForeignKey(User, on_delete=models.CASCADE)

	def __str__(self):
		return self.title

class Chapter(TimeStamp):
	title = models.CharField(max_length=255, blank=False, null=False)
	introduction = models.TextField()
	user=models.ForeignKey(User, on_delete=models.CASCADE)
	body = models.TextField(blank=False, null=False)
	course = models.ForeignKey(Course, on_delete=models.CASCADE)
	def __str__(self):
		return self.title


class Category(TimeStamp):
	name = models.CharField(max_length=255)
	courses = models.ManyToManyField(Course)

	def __str__(self):
		return self.name


class Comment(TimeStamp):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
	content = models.TextField(blank=False, null=False)

	def __str__(cls):
		return cls.content


		
	
	
			
