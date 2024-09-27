# recommendations/serializers.py

from rest_framework import serializers
from .models import OpenAIPrompt

class OpenAIPromptSerializer(serializers.ModelSerializer):
    class Meta:
        model = OpenAIPrompt
        fields = '__all__'
