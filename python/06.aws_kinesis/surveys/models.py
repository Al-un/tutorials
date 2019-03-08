from django.db import models

class Survey(models.Model):
    topic = models.CharField(max_length=150)
    active = models.BooleanField(default=True)

    class Meta:
        db_table = 'surveys_surveys_survey'

    def __str__(self):
        return self.topic

class Choice(models.Model):
    survey = models.ForeignKey(Survey, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    count = models.IntegerField(default=0)

    class Meta:
        db_table = 'surveys_surveys_choice'

    def __str__(self):
        return self.name