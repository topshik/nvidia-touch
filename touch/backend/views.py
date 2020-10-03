from rest_framework import viewsets
from rest_framework import permissions

from django.http import HttpResponse
from .models import Employee, Project
from .serializers import EmployeeSerializer, ProjectSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = []

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = []

def index(request):
    return HttpResponse("Hello, world!")