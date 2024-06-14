from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('pages/solicitud.html', views.solicitud, name='solicitud'),
]