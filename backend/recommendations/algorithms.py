# recommendations/algorithms.py

from django.db.models import Q
from .models import OpenAIPrompt, Course, UserRecommendation
from django.conf import settings
import openai

def get_custom_prompt_for_recommendation(user):
    # Retrieve the first prompt for simplicity; adjust logic as needed for selecting prompts
    prompt_instance = OpenAIPrompt.objects.first()
    if not prompt_instance:
        return "No prompt available"

    # Fetch all courses
    courses = Course.objects.filter(user=user)
    if not courses.exists():
        return "No courses available for this user."

    course_titles = ', '.join(course.title for course in courses)

    # Create full prompt by appending course titles to the prompt content
    full_prompt = f"{prompt_instance.prompt}. Courses: {course_titles}"

    return full_prompt

def ask_chatgpt(full_prompt):
    openai.api_key = settings.OPENAI_API_KEY
    # Call the OpenAI API with the combined prompt
    response = openai.ChatCompletion.create(
        model='gpt-3.5-turbo',  # Ensure this matches the model you have access to
        n=1,
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": full_prompt}
        ]
    )

    # Extract the content from the response
    message = response.choices[0]['message']
    return message['content']

def update_user_recommendations(user, new_recommendation):
    # Check existing count of recommendations
    existing_recommendations = UserRecommendation.objects.filter(user=user)
    if existing_recommendations.count() >= 2:
        # Delete the oldest recommendation
        oldest_recommendation = existing_recommendations.last()
        oldest_recommendation.delete()

    # Add the new recommendation
    UserRecommendation.objects.create(user=user, recommendation=new_recommendation)

# Example usage within your Django application or script
def get_recommendations_for_user(user):
    full_prompt = get_custom_prompt_for_recommendation(user)
    recommendation_response = ask_chatgpt(full_prompt)
    try:
        update_user_recommendations(user, recommendation_response)
    except:
        return "Please try again later!"
    return recommendation_response
