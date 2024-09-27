from rest_framework import serializers
from .models import Course

class CourseSerializer(serializers.ModelSerializer):
    title = serializers.CharField(source='title_display')

    class Meta:
        model = Course
        fields = ['id', 'title', 'description']

