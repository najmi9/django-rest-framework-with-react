from .models import Course, Chapter, Category, Comment
from .serializers import CourseSerializer, ChapterSerializer, CommentSerializer ,CategorySerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .voters.is_owner_or_read_only import IsOwnerOrReadOnly
from .voters.is_admin_user_or_read_only import isAdminUserOrReacOnly
from rest_framework.decorators import action
from rest_framework.response import Response


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    lookup_url_kwarg = 'slug'
    permission_classes = [IsOwnerOrReadOnly|isAdminUserOrReacOnly, IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    @action(detail=True, methods=['get'])
    def chapters(self, request, slug=None):
        chapters = Course.objects.get(slug=slug).chapter_set.all()
        serializer = ChapterSerializer(chapters, many=True)
        return Response(serializer.data)
    @action(detail=True, methods=['get'])
    def data(self, request, slug=None):
        chapters = Course.objects.get(slug=slug)
        serializer = CourseSerializer(chapters)
        return Response(serializer.data)



class ChapterViewSet(viewsets.ModelViewSet):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer
    permission_classes = [IsOwnerOrReadOnly|isAdminUserOrReacOnly, IsAuthenticatedOrReadOnly]
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [isAdminUserOrReacOnly , IsAuthenticatedOrReadOnly]
      

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsOwnerOrReadOnly , IsAuthenticatedOrReadOnly]
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)