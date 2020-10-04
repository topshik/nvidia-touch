from django.db import models


class Project(models.Model):
	name = models.CharField(max_length=200)
	description = models.TextField(max_length=1000)
	link = models.URLField(max_length=200)
	members = models.ManyToManyField('employee', blank=True)
	open_positions = models.CharField(max_length=1000)


class Employee(models.Model):
	name = models.CharField(max_length=200)
	refers_to = models.ManyToManyField('self', related_name='employee', blank=True)
	email = models.CharField(max_length=200)
	projects = models.ManyToManyField(Project, blank=True)
	skills = models.CharField(max_length=1000)
	photo = models.ImageField(upload_to='photos')
	coffee_match = models.ForeignKey('self', related_name='employee', blank=True, null=True, on_delete=models.CASCADE)

