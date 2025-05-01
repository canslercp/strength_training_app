from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('programs/', views.getPrograms, name="programs"),
    path('programs/<str:pk>/update', views.updateProgram, name="update-program"),
    path('programs/<str:pk>/delete', views.deleteProgram, name="delete-program"),

    path('programs/<str:pk>/', views.getProgram, name="program")
]