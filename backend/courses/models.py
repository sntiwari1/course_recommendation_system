# courses/models.py

from django.db import models

class Course(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    # Add more fields as necessary

    def __str__(self):
        return self.title
