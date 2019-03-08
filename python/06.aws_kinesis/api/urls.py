from django.urls import path

from .views import SurveyViewSet, ChoiceViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'surveys', SurveyViewSet)
router.register(r'choices', ChoiceViewSet)
urlpatterns = router.urls