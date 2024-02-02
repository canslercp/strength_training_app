from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=40)
    password = models.CharField(max_length=40)
    email = models.EmailField(max_length=200)
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)

class SurveyResponse(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    focus = models.CharField(max_length=40)
    competition = models.BooleanField()
    startDate = models.DateField()
    duration = models.IntegerField()
    emphasis = models.CharField(max_length=100)

class Competition(models.Model):
    startDate = models.DateField()
    priority = models.IntegerField()
    name = models.CharField(max_length=40)