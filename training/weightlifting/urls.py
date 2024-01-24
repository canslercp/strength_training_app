from django.contrib import admin
from django.urls import include, path

from . import views

urlpatterns = [
    path("weightlifting/", include("weightlifting.urls")),
    path("admin/", admin.site.urls),
]