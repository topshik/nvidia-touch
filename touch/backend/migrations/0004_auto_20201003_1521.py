# Generated by Django 3.1.2 on 2020-10-03 12:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_project_members'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='refers_to',
            field=models.ManyToManyField(related_name='_employee_refers_to_+', to='backend.Employee'),
        ),
        migrations.AlterField(
            model_name='project',
            name='members',
            field=models.ManyToManyField(blank=True, to='backend.Employee'),
        ),
    ]
