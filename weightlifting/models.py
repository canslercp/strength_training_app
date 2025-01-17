from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=40)
    password = models.CharField(max_length=40)
    email = models.EmailField(max_length=200)
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)

class Competition(models.Model):
    compName = models.CharField(max_length=40)
    compDate = models.DateField()
    priority = models.IntegerField(max_length=10)

class Program(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    focus = models.CharField(max_length=40)
    competition = models.ForeignKey(Competition, on_delete=models.CASCADE, null=True)
    startDate = models.DateField()
    duration = models.IntegerField()
    emphasis = models.CharField(max_length=100)

    def calculate_duration_in_weeks(self):
        if self.competition and self.startDate:
            delta = self.competition.compDate - self.startDate
            return delta.days // 7
        return None

from django.db import models, connection

# # Your models here...

# def check_table_exists(weightlifting_program):
#     with connection.cursor() as cursor:
#         cursor.execute("""
#             SELECT name FROM sqlite_master WHERE type='table' AND name=%s
#         """, [weightlifting_program])
#         return cursor.fetchone() is not None

# # Usage
# print(check_table_exists('weightlifting_program'))