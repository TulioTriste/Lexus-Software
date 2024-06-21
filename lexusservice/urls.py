from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('pages/solicitud.html', views.solicitud, name='solicitud'),
    path('pages/registro.html', views.registro, name='registro'),
    path('pages/password-recovery.html', views.password_recovery, name='password-recovery'),
    path('pages/info.html', views.info, name='info'),
    path('pages/terms.html', views.terms, name='terms'),
    path('pages/politics.html', views.politics, name='politics'),
]