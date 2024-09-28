# recommendations/urls.py

from django.urls import path
from .views import OpenAIPromptListCreateView, OpenAIPromptDetailView, RecommendationView, RecommendationUpdate

urlpatterns = [
    path('prompts/', OpenAIPromptListCreateView.as_view(), name='prompt-list-create'),
    path('prompts/<int:pk>/', OpenAIPromptDetailView.as_view(), name='prompt-detail'),
    path('', RecommendationView.as_view(), name='recommendations'),
    path('new', RecommendationUpdate.as_view(), name="new_recommendations"),
]
