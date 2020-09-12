from rest_framework import serializers
from .models import Course, Chapter, Category, Comment


class CourseSerializer(serializers.ModelSerializer):
	#chapters = serializers.HyperlinkedRelatedField(many=True, view_name='chapters', read_only=True)

	class Meta:
		model = Course
		fields = ['id', 'title', 'description', 'image', 'user']



class ChapterSerializer(serializers.ModelSerializer):
	#course = CourseSerializer()
	class Meta:
		model = Chapter
		fields = ['id', 'title', 'introduction', 'author', 'body', 'course']


class CategorySerializer(serializers.ModelSerializer):
	
	class Meta:
		model = Category
		fields = ['id', 'name', 'courses']


class CommentSerializer(serializers.ModelSerializer):
	class Meta:
		model = Comment
		fields = '__all__'
