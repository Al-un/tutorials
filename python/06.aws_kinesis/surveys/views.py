from django.shortcuts import render, get_object_or_404
from django.views import generic
from django.http import HttpResponseRedirect
from django.urls import reverse
from datetime import datetime

from .models import Survey, Choice
from .kinesis import put_vote_to_stream

class SurveyView(generic.ListView):
    template_name = 'surveys/index.html'
    model = Survey


def vote(request, choice_id):
    print("%s Voting for %s" % (datetime.now, choice_id))
    choice = get_object_or_404(Choice, pk=choice_id)
    choice.count += 1
    choice.save()

    print("%s Prepare for sending to Kinesis from view" % datetime.now)
    put_vote_to_stream(request, choice)
    print("%s Kinesis finished from view" % datetime.now)

    return HttpResponseRedirect(reverse('surveys:index'))