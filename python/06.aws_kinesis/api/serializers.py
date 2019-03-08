from rest_framework import serializers

from surveys.models import Survey, Choice

class SurveySerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'topic')
        model = Survey

class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'name', 'survey', 'count')
        model = Choice
