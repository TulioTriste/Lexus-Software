# Generated by Django 5.0.6 on 2024-06-27 23:24

import django.db.models.manager
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('lexusservice', '0005_usuario_is_staff'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='rol',
            managers=[
                ('manager', django.db.models.manager.Manager()),
            ],
        ),
        migrations.AlterModelManagers(
            name='usuario',
            managers=[
                ('manager', django.db.models.manager.Manager()),
            ],
        ),
    ]
