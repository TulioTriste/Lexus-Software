from .models import Usuario, Rol
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
import json

def iniciar_sesion(request):
    if request.method == "POST":
        json_data = json.loads(request.body)
        
        email = json_data["email"].strip()
        password = json_data["password"].strip()
        
        user = authenticate(email=email, password=password)
        userExists = user is not None
        
        if userExists:
            login(request, user)
            
        return HttpResponse(json.dumps({"success": userExists}), content_type="application/json")
        
def registrarse(request):
    if request.method == "POST":
        json_data = json.loads(request.body)
        
        rut = json_data["rut"].strip()
        userExists = Usuario.manager.filter(rut=rut).exists()
        
        if userExists:
            return HttpResponse(json.dumps({"userExist": userExists}), content_type="application/json")
        
        email = json_data["email"].strip()
        emailExists = Usuario.manager.filter(email=email).exists()
        
        if emailExists:
            return HttpResponse(json.dumps({"emailExist": emailExists}), content_type="application/json")
        
        Usuario.manager.create_user(
            rut=rut,
            nombre=json_data["nombre"],
            apellido=json_data["apellido"],
            telefono=json_data["telefono"].strip(),
            email=email,
            password=json_data["password"].strip(),
            direccion=json_data["direccion"],
            rol=Rol.manager.get_rol(json_data["rol"])
        )

        return HttpResponse(json.dumps({"success": True}), content_type="application/json")
    
def cerrar_sesion(request):
    logout(request)
    return redirect("index")

def is_aunthenticated(request):
    return HttpResponse(json.dumps({"authenticated": request.user.is_authenticated}), content_type="application/json")

def guardar_mis_datos(request):
    if request.method == "POST":
        json_data = json.loads(request.body)
        
        email = json_data["email"].strip()
        emailExists = email != request.user.email and Usuario.manager.filter(email=email).exists()
        
        if emailExists:
            return HttpResponse(json.dumps({"emailExist": emailExists}), content_type="application/json")
        
        Usuario.manager.update_user(
            request.user.rut,
            json_data["nombre"],
            json_data["apellido"],
            json_data["telefono"].strip(),
            email,
            json_data["direccion"]
        )
        
        return HttpResponse(json.dumps({"success": True}), content_type="application/json")