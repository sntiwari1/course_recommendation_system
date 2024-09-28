from django.db import models
from django.conf import settings

class Course(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()

    @property
    def title_display(self):
        return self.title.upper()
