from rest_framework import serializers

from . import models


class TodoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Todo
        fields = ('id', 'text', 'done')
