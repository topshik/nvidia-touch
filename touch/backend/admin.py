from django.contrib import admin

# Register your models here.
from .models import Employee, Project

admin.site.register(Employee)
admin.site.register(Project)