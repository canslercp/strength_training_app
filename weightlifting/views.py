from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
# from .models import program
# from .serializers import ProgramSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/programs/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of programs'
        },
        {
            'Endpoint': '/programs/id/',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single program object'
        },
        {
            'Endpoint': '/programs/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Cretes new program with data sent in post request'
        },
        {
            'Endpoint': '/programs/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing program with data sent in post'
        },
        {
            'Endpoint': '/programs/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes an existing program'
        }
    ]
    return Response(routes)