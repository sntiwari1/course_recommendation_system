# recommendations/views.py

from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework.permissions import IsAuthenticated
from .algorithms import get_recommendations_for_user
from .models import UserRecommendation

from rest_framework import generics
from .models import OpenAIPrompt
from .serializers import OpenAIPromptSerializer

import logging

logger = logging.getLogger(__name__)

class RecommendationView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        # Fetch the latest recommendations
        latest_recommendations = UserRecommendation.objects.filter(user=user)[:2]
        recommendations_data = [rec.recommendation for rec in latest_recommendations]
        return JsonResponse({'recommendations': recommendations_data}, safe=False)

class RecommendationUpdate(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        # Fetch the latest recommendations
        try:
            get_recommendations_for_user(user)
            return JsonResponse({'status': 'success'}, safe=False)
        except:
            return JsonResponse({'status': 'error'}, safe=False)

class OpenAIPromptListCreateView(generics.ListCreateAPIView):
    queryset = OpenAIPrompt.objects.all()
    serializer_class = OpenAIPromptSerializer

class OpenAIPromptDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = OpenAIPrompt.objects.all()
    serializer_class = OpenAIPromptSerializer
