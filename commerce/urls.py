from django.urls import path, include
from .views import ChapterViewSet, CourseViewSet, CategoryViewSet, CommentViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('chapters', ChapterViewSet, 'chapters')
router.register('courses', CourseViewSet, 'courses')
router.register('categories', CategoryViewSet, 'categories')
router.register('comments', CommentViewSet, 'comments')

urlpatterns = [
	path('', include(router.urls)),
]


