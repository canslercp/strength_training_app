from django.contrib import admin

# Register your models here.
from .models import User, SurveyResponse, Competition

admin.site.register(User)
admin.site.register(SurveyResponse)
admin.site.register(Competition)