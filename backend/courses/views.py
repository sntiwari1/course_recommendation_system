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

    def get_queryset(self):
        """
        This method overrides the default queryset to return courses that are related to the current user.
        Assuming 'user' is a direct foreign key in the Course model pointing to the user who owns the course.
        If 'user' is not a direct relationship, you will need to adjust the filter to match your data model.
        """
        user = self.request.user
        return Course.objects.filter(user=user)


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
