from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('pages/solicitud.html', views.solicitud, name='solicitud'),
    path('pages/registro.html', views.registro, name='registro'),
    path('pages/password-recovery.html', views.password_recovery, name='password-recovery'),
]