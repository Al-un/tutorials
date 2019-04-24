from django.urls import path, re_path
from django.views.generic.base import RedirectView

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    re_path(r'^(\.+)$', RedirectView.as_view(url='', permanent=False))
]
