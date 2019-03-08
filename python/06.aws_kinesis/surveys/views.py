from django.shortcuts import render, get_object_or_404
from django.views import generic
from django.http import HttpResponseRedirect
from django.urls import reverse

from .models import Survey, Choice
from .kinesis import put_vote_to_stream

class SurveyView(generic.ListView):
    template_name = 'surveys/index.html'
    model = Survey


def vote(request, choice_id):
    choice = get_object_or_404(Choice, pk=choice_id)
    choice.count += 1
    choice.save()

    put_vote_to_stream(request, choice)

    return HttpResponseRedirect(reverse('surveys:index'))