from django.contrib import admin

# Register your models here.
from .models import User, Program, Competition

admin.site.register(User)
admin.site.register(Program)
admin.site.register(Competition)