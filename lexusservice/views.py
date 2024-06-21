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