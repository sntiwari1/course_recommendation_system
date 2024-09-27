# recommendations/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .algorithms import get_recommendations_for_user
from courses.serializers import CourseSerializer

class RecommendationView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        recommendations = get_recommendations_for_user(user)
        serializer = CourseSerializer(recommendations, many=True)
        return Response(serializer.data)
