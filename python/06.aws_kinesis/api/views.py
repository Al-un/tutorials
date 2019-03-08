from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from surveys.models import Survey, Choice
from . import serializers

class SurveyViewSet(viewsets.ModelViewSet):
    queryset = Survey.objects.all()
    serializer_class = serializers.SurveySerializer

class ChoiceViewSet(viewsets.ModelViewSet):
    queryset = Choice.objects.all()
    serializer_class = serializers.ChoiceSerializer

    @action(detail=True, methods=['post'])
    def vote(self, request, pk=None):
        choice = self.get_object()
        choice.count += 1
        choice.save()

        serializer = self.get_serializer(choice)
        return Response(serializer.data)
