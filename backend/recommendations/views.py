# recommendations/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .algorithms import get_recommendations_for_user
from courses.serializers import CourseSerializer

from rest_framework import generics
from .models import OpenAIPrompt
from .serializers import OpenAIPromptSerializer

import logging

logger = logging.getLogger(__name__)

class RecommendationView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        recommendations = get_recommendations_for_user(user)
        return Response(recommendations)

class OpenAIPromptListCreateView(generics.ListCreateAPIView):
    queryset = OpenAIPrompt.objects.all()
    serializer_class = OpenAIPromptSerializer

class OpenAIPromptDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = OpenAIPrompt.objects.all()
    serializer_class = OpenAIPromptSerializer
