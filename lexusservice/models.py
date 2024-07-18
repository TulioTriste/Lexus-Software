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
    
    objects = UsuarioManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['rut', 'nombre', 'apellido', 'telefono', 'direccion']

    def __str__(self):
        return (f'Usuario: {self.rut} - {self.nombre} {self.apellido}')
    
class ServicioManager(models.Manager):
    def create_servicio(self, nombre):
        servicio = self.model(nombre=nombre)
        servicio.save()
        return servicio
    
    def delete_servicio(self, id):
        servicio = self.get(id=id)
        servicio.delete()
        
    def update_servicio(self, id, new_nombre):
        servicio = self.get(id=id)
        servicio.nombre = new_nombre
        servicio.save()
        return servicio
    
    def get_servicio(self, id):
        return self.get(id=id)
    
class Servicio(models.Model):
    id = models.AutoField(primary_key=True, unique=True, db_column='id_servicio')
    nombre = models.CharField(max_length=50, unique=True)
    
    objects = ServicioManager()
    
    def __str__(self):
        return (f'Servicio: {self.nombre}')
    
class SolicitudEstadoManager(models.Manager):
    def create_solicitud_estado(self, nombre):
        estado = self.model(nombre=nombre)
        estado.save()
        return estado
    
    def delete_solicitud_estado(self, id):
        estado = self.get(id=id)
        estado.delete()
        
    def update_solicitud_estado(self, id, new_nombre):
        estado = self.get(id=id)
        estado.nombre = new_nombre
        estado.save()
        return estado
    
    def get_solicitud_estado(self, id):
        return self.get(id=id)
    
class SolicitudEstado(models.Model):
    id = models.AutoField(primary_key=True, unique=True, db_column='id_estado')
    nombre = models.CharField(max_length=20, unique=True)
    
    objects = SolicitudEstadoManager()
    
    def __str__(self):
        return (f'Estado: {self.id} - {self.nombre}')
    
class SolicitudManager(models.Manager):
    def create_solicitud(self, usuario, servicio, asunto, mensaje, estado):
        solicitud = self.model(usuario=usuario, servicio=servicio, asunto=asunto, mensaje=mensaje, estado=estado)
        solicitud.save()
        return solicitud
    
    def delete_solicitud(self, id):
        solicitud = self.get(id=id)
        solicitud.delete()
        
    def update_solicitud(self, id, new_estado):
        solicitud = self.get(id=id)
        solicitud.estado = new_estado
        solicitud.save()
        return solicitud
    
    def get_solicitud(self, id):
        return self.get(id=id)
    
    def get_solicitudes(self, usuario):
        return self.filter(usuario=usuario)
    
class Solicitud(models.Model):
    id = models.AutoField(primary_key=True, unique=True, db_column='id_solicitud')
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, db_column='rut')
    servicio = models.ForeignKey(Servicio, on_delete=models.CASCADE, db_column='id_servicio')
    fecha = models.DateField(auto_now=True)
    asunto = models.CharField(max_length=50)
    mensaje = models.TextField()
    estado = models.ForeignKey(SolicitudEstado, on_delete=models.CASCADE, db_column='id_estado')
    
    objects = SolicitudManager()
    
    def __str__(self):
        return (f'Solicitud: {self.id} - {self.usuario.rut} - {self.asunto}')
