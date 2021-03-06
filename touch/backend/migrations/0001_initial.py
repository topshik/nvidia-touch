# Generated by Django 3.1.2 on 2020-10-03 12:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(max_length=200)),
                ('link', models.URLField()),
                ('open_positions', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('email', models.CharField(max_length=200)),
                ('skills', models.CharField(max_length=1000)),
                ('photo', models.ImageField(upload_to='photos')),
                ('projects', models.ManyToManyField(to='backend.Project')),
            ],
        ),
    ]
