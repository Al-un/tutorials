from django.shortcuts import render

# from rest_framework import generics
from rest_framework import viewsets

from todos.models import Todo
from . import serializers

# class ListTodo(generics.ListCreateAPIView):
#     queryset = models.Todo.objects.all()
#     serializer_class = serializers.TodoSerializer

# class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
#     queryset = models.Todo.objects.all()
#     serializer_class = serializer_class.TodoSerializer

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = serializers.TodoSerializer