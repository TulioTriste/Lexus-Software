# Generated by Django 5.0.6 on 2024-06-28 00:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('lexusservice', '0006_alter_rol_managers_alter_usuario_managers'),
    ]

    operations = [
        migrations.RenameField(
            model_name='usuario',
            old_name='id_rol',
            new_name='rol',
        ),
    ]
