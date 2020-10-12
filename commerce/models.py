from django.db import models
from accounts.models import User

class TimeStamp(models.Model):
	createdAt = models.DateTimeField(auto_now_add=True)
	updtedAt = models.DateTimeField(auto_now=True)
	class Meta:
		abstract = True

class Course(TimeStamp):
	slug = models.CharField(unique=True, max_length=255, blank=False, null=False)
	title = models.CharField(max_length=255, blank=False, null=False)
	description = models.TextField()
	media = models.FileField(upload_to='courses/cover', max_length=255, null=False, blank=False)
	author=models.ForeignKey(User, on_delete=models.CASCADE)
	objectifs = models.TextField()
	is_video = models.BooleanField(default=False)
	def __str__(self):
		return self.title

class Chapter(TimeStamp):
	is_video = models.BooleanField(default=False)
	title = models.CharField(max_length=255, blank=False, null=False)
	media = models.FileField(upload_to='courses/chapters', max_length=255, null=False, blank=False)
	introduction = models.TextField()
	author=models.ForeignKey(User, on_delete=models.CASCADE)
	body = models.TextField(blank=False, null=False)
	course = models.ForeignKey(Course, on_delete=models.CASCADE)
	def __str__(self):
		return self.title

class Media(TimeStamp):
	video = models.FileField(upload_to="courses/videos")
	image = models.ImageField(upload_to="courses/courses")


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


		
	
	
			
