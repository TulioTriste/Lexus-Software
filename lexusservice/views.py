from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'pages/index.html')

def solicitud(request):
    return render(request, 'pages/solicitud.html')

def registro(request):
    return render(request, 'pages/registro.html')

def password_recovery(request):
    return render(request, 'pages/password-recovery.html')

def terms(request):
    return render(request, 'pages/terms.html')

def politics(request):
    return render(request, 'pages/politics.html')

def user(request):
    return render(request, 'profile/user.html')

def solicitudes(request):
    return render(request, 'profile/solicitudes.html')

def causas(request):
    return render(request, 'profile/causas.html')

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

def view_causas(request):
    return render(request, 'profile/view-causas.html')

def view_solicitud(request):
    return render(request, 'profile/view-solicitud.html')

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