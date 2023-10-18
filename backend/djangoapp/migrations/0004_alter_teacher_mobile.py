# Generated by Django 4.2.6 on 2023-10-17 11:01

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djangoapp', '0003_alter_teacher_mobile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teacher',
            name='Mobile',
            field=models.CharField(blank=True, max_length=17, validators=[django.core.validators.RegexValidator(message="format: '+923033333333' ", regex='^\\+?1?\\d{9,15}$')]),
        ),
    ]
