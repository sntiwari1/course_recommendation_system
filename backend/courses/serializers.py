from rest_framework import serializers
from .models import Course

class CourseSerializer(serializers.ModelSerializer):
    title = serializers.CharField(source='title_display')

    class Meta:
        model = Course
        fields = ['id', 'title', 'description']

    def create(self, validated_data):
        validated_data["title"] = validated_data["title_display"]
        validated_data["user"] = self.context['request'].user
        del validated_data["title_display"]
        return super().create(validated_data)

