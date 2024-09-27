# recommendations/models.py

from django.db import models
from django.conf import settings
from courses.models import Course

class UserCourseInteraction(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    interaction_type = models.CharField(max_length=50)  # e.g., 'viewed', 'liked', 'enrolled'
    timestamp = models.DateTimeField(auto_now_add=True)
