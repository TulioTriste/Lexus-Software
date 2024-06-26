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
    path('profile/user.html', views.user, name='user'),
    path('profile/solicitudes.html', views.solicitudes, name='solicitudes'),
    path('profile/causas.html', views.causas, name='causas'),
    path('profile/finanzas.html', views.finanzas, name='finanzas'),
    path('juridic-tecnic/jt-solicitud.html', views.jt_solicitud, name='jt-solicitud'),
    path('juridic-tecnic/jt-info.html', views.jt_info, name='jt-info'),
    path('juridic-tecnic/jt-view-solicitud.html', views.jt_view_solicitud, name='jt-view-solicitud'),
]