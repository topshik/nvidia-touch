from rest_framework import viewsets, generics, permissions, mixins
from rest_framework.response import Response

from django.http import HttpResponse, JsonResponse
from .models import Employee, Project
from .serializers import EmployeeSerializer, ProjectSerializer

from django.core.serializers import serialize

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = []

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = []

def CreateRandomCoffee(request, pk):
    rand_employee = Employee.objects.filter(coffee_match=None).exclude(pk=pk).order_by('?').first()
    myself = Employee.objects.get(pk=pk)

    if myself.coffee_match != None:
    	return HttpResponse("{'status' : 400}")

    rand_employee.coffee_match = myself
    rand_employee.save()

    myself.coffee_match = rand_employee
    myself.save()

    serializer = EmployeeSerializer(rand_employee, context={'request': request})
    
    # request["Content-Type"] = "application/json"

    # request.headers["Content-Type"] = "application/json"

    # return JsonResponse(myself.__dict__)
    return HttpResponse(str(serializer.data["url"]))

def DeleteRandomCoffee(request, pk):
    myself = Employee.objects.get(pk=pk)
    other = myself.coffee_match

    if myself.coffee_match == None:
    	return HttpResponse("{'status' : 400}")

    other.coffee_match = None
    other.save()

    myself.coffee_match = None
    myself.save()

    return HttpResponse("{'status' : 200}")

