from django.db import models

class Course(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    @property
    def title_display(self):
        return self.title.upper()
