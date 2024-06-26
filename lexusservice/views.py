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

def info(request):
    return render(request, 'pages/info.html')

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