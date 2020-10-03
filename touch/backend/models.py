from django.db import models

class Employee(models.Model):
	name = models.CharField(max_length=200)
	refers_to = models.ManyToManyField(Employee, on_delete=models.CASCADE)
	email = models.CharField(max_length=200)
	projects = models.ManyToManyField(Employee, on_delete=models.CASCADE)
	skills = models.CharField(max_length=1000)
	photo = models.ImageField(upload_to='photos')

class Project(models.Model):
	name = models.CharField(max_length=200)
	description = models.TextField(max_length=200)
	link = models.URLField(max_length=200)

