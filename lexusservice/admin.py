from django.contrib import admin
from .models import Usuario, Rol, Servicio, SolicitudEstado, Solicitud

admin.site.register(Usuario)
admin.site.register(Rol)
admin.site.register(Servicio)
admin.site.register(SolicitudEstado)
admin.site.register(Solicitud)
