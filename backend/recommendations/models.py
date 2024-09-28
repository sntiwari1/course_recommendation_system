# recommendations/models.py

from django.db import models
from django.conf import settings
from courses.models import Course
from users.models import CustomUser

class UserCourseInteraction(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    interaction_type = models.CharField(max_length=50)  # e.g., 'viewed', 'liked', 'enrolled'
    timestamp = models.DateTimeField(auto_now_add=True)

class OpenAIPrompt(models.Model):
    prompt = models.TextField()
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.prompt[:50]

class UserRecommendation(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='recommendations')
    recommendation = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.user.email}: {self.recommendation[:50]}"