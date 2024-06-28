from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class RolManager(models.Manager):
    def create_rol(self, nombre):
        rol = self.model(nombre=nombre)
        rol.save()
        return rol
    
    def delete_rol(self, nombre):
        rol = self.get(nombre=nombre)
        rol.delete()
        
    def update_rol(self, nombre, new_nombre):
        rol = self.get(nombre=nombre)
        rol.nombre = new_nombre
        rol.save()
        return rol
    
    def get_rol(self, nombre):
        return self.get(nombre=nombre)
    
class Rol(models.Model):
    id = models.AutoField(primary_key=True, unique=True, db_column='id_rol')
    nombre = models.CharField(max_length=20, unique=True)
    
    manager = RolManager()
    
    def __str__(self):
        return (f'Rol: {self.nombre}')

class UsuarioManager(BaseUserManager):
    def create_user(self, rut, nombre, apellido, telefono, email, password, direccion, rol=None):
        if not rut:
            raise ValueError("El usuario debe tener un RUT.")
        usuario = self.model(rut=rut, nombre=nombre, apellido=apellido, telefono=telefono, email=email, direccion=direccion, rol=rol)
        usuario.set_password(password)
        usuario.save(using=self._db)
        return usuario
    
    def create_superuser(self, rut, nombre, apellido, telefono, email, password, direccion):
        usuario = self.create_user(rut, nombre, apellido, telefono, email, password, direccion)
        usuario.is_staff = True
        usuario.is_superuser = True
        usuario.save(using=self._db)
        return usuario
    
    def delete_user(self, rut):
        usuario = self.get(rut=rut)
        usuario.delete()
        
    def update_user(self, rut, new_nombre, new_apellido, new_telefono, new_email, new_direccion):
        usuario = self.get(rut=rut)
        usuario.nombre = new_nombre
        usuario.apellido = new_apellido
        usuario.telefono = new_telefono
        usuario.email = new_email
        usuario.direccion = new_direccion
        usuario.save()
        return usuario

class Usuario(AbstractBaseUser, PermissionsMixin):
    rut = models.CharField(primary_key=True, max_length=10, unique=True)
    nombre = models.CharField(max_length=20)
    apellido = models.CharField(max_length=20)
    telefono = models.IntegerField()
    email = models.EmailField(max_length=100, unique=True, null=True, blank=True)
    direccion = models.CharField(max_length=100, null=True, blank=True)
    rol = models.ForeignKey(Rol, on_delete=models.CASCADE, db_column='id_rol', null=True, blank=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    
    manager = UsuarioManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['rut', 'nombre', 'apellido', 'telefono', 'direccion']

    def __str__(self):
        return (f'Usuario: {self.rut} - {self.nombre} {self.apellido}')
    
