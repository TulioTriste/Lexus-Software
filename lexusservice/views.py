from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Servicio, Solicitud

# Create your views here.

def index(request):
    return render(request, 'pages/index.html')

@login_required
def solicitud(request):
    context = {
        'servicios': Servicio.objects.all()
    }
    return render(request, 'pages/solicitud.html', context)

def registro(request):
    return render(request, 'pages/registro.html')

def password_recovery(request):
    return render(request, 'pages/password-recovery.html')

def terms(request):
    return render(request, 'pages/terms.html')

def politics(request):
    return render(request, 'pages/politics.html')

@login_required
def mis_datos(request):
    context = {
        'rut': request.user.rut,
        'nombre': request.user.nombre,
        'apellido': request.user.apellido,
        'telefono': request.user.telefono,
        'email': request.user.email,
        'direccion': request.user.direccion,
    }
    return render(request, 'profile/mis-datos.html', context)

@login_required
def mis_solicitudes(request):
    context = {
        'solicitudes': Solicitud.objects.get_solicitudes(request.user).all()
    }
    return render(request, 'profile/mis-solicitudes.html', context)

@login_required
def causas(request):
    return render(request, 'profile/causas.html')

@login_required
def finanzas(request):
    return render(request, 'profile/finanzas.html')

def jt_solicitud(request):
    return render(request, 'juridic-tecnic/jt-solicitud.html')

def jt_info(request):
    return render(request, 'juridic-tecnic/jt-info.html')

def jt_view_solicitud(request):
    return render(request, 'juridic-tecnic/jt-view-solicitud.html')

def budget(request):
    return render(request, 'juridic-tecnic/budget.html')

def jt_pays(request):
    return render(request, 'juridic-tecnic/jt-pays.html')

@login_required
def view_causas(request):
    return render(request, 'profile/view-causas.html')

@login_required
def ver_solicitud(request, id_solicitud):
    context = {
        'solicitud': Solicitud.objects.get_solicitud(id_solicitud)
    }
    return render(request, 'profile/ver-solicitud.html', context)

def layer_view(request):
    return render(request, 'layers/layer-view.html')

def layer_causas(request):
    return render(request, 'layers/layer-causas.html')

def layer_view_diligencias(request):
    return render(request, 'layers/layer-view-diligencias.html')

def layer_view_causas(request):
    return render(request, 'layers/layer-view-causas.html')

def layer_diligencias(request):
    return render(request, 'layers/layer-diligencias.html')

def admin_view(request):
    return render(request, 'administrator/admin-view.html')

def admin_report_mensual(request):
    return render(request, 'administrator/admin-report-mensual.html')

def admin_report_anual(request):
    return render(request, 'administrator/admin-report-anual.html')