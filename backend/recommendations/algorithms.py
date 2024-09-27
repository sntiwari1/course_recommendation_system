# recommendations/algorithms.py

from courses.models import Course
from .models import UserCourseInteraction
from django.db.models import Count

def get_recommendations_for_user(user):
    # Get courses the user has interacted with
    user_interactions = UserCourseInteraction.objects.filter(user=user)
    interacted_courses = [interaction.course for interaction in user_interactions]

    # Get similar courses (simplified)
    similar_courses = Course.objects.exclude(id__in=[course.id for course in interacted_courses])[:10]

    return similar_courses
