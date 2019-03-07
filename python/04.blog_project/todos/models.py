from django.db import models

# Create your models here.


class Todo(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    class Meta:
        db_table = "blog_todos_todo"

    def __str__(self):
        """A string representation of the model."""
        return self.title
