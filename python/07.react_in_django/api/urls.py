from django.urls import include, path
from rest_framework import routers

from todos import views as todos_views

router = routers.DefaultRouter()
router.register(r'todos', todos_views.TodoViewSet)

urlpatterns = router.urls
