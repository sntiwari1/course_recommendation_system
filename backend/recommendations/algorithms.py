# recommendations/algorithms.py

from django.db.models import Q
from .models import OpenAIPrompt, Course
import openai

def get_custom_prompt_for_recommendation(user):
    # Retrieve the first prompt for simplicity; adjust logic as needed for selecting prompts
    prompt_instance = OpenAIPrompt.objects.first()
    if not prompt_instance:
        return "No prompt available"

    # Fetch all courses
    courses = Course.objects.all()
    course_titles = ', '.join(course.title for course in courses)

    # Create full prompt by appending course titles to the prompt content
    full_prompt = f"{prompt_instance.prompt}. Courses: {course_titles}"

    return full_prompt

def ask_chatgpt(full_prompt):
    openai.api_key = ""
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

# Example usage within your Django application or script
def get_recommendations_for_user(user):
    full_prompt = get_custom_prompt_for_recommendation(user)
    recommendation_response = ask_chatgpt(full_prompt)
    return recommendation_response
