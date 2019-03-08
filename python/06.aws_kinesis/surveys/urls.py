from django.urls import path

from . import views

app_name = 'surveys'
urlpatterns = [
    path('', views.SurveyView.as_view(), name='index'),
    path('choices/<int:choice_id>/vote/', views.vote, name='vote'),
]
