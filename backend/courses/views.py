# courses/views.py

from rest_framework import viewsets, filters
from rest_framework.permissions import IsAuthenticated
from .models import Course
from .serializers import CourseSerializer
from recommendations.models import UserCourseInteraction

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'description']


#class CourseViewSet(viewsets.ModelViewSet):
#    # Existing code...
#
#    def retrieve(self, request, *args, **kwargs):
#        instance = self.get_object()
#        # Record the interaction
#        UserCourseInteraction.objects.create(
#            user=request.user,
#            course=instance,
#            interaction_type='viewed'
#        )
#        serializer = self.get_serializer(instance)
#        return Response(serializer.data)
