# Generated by Django 3.1.2 on 2020-10-04 00:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0007_employee_coffee_math'),
    ]

    operations = [
        migrations.RenameField(
            model_name='employee',
            old_name='coffee_math',
            new_name='coffee_match',
        ),
    ]
