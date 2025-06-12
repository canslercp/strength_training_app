from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Program, Competition
from .serializers import ProgramSerializer

# Create your views here.

@api_view(['GET']) # could add POST, PUT, DELETE here as well
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

@api_view(['GET'])
def getPrograms(request):
    programs = Program.objects.all()
    serializer = ProgramSerializer(programs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProgram(request, pk):
    program = Program.objects.get(id=pk)
    serializer = ProgramSerializer(program, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createProgram(request):
    data = request.data
    competition = None

    if data['competition']:  # If competition is true, create a Competition instance
        competition = Competition.objects.create(
            compName=data['compName'],
            compDate=data['compDate'],
            priority=data['priority']
        )

    program = Program.objects.create(
        focus=data['focus'],
        competition=data['competition'],  # Boolean field
        startDate=data['startDate'],
        duration=data['duration'],
        emphasis=data['emphasis']
    )

    if competition:
        program.competition = competition
        program.save()

    serializer = ProgramSerializer(program, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateProgram(request, pk):
    data = request.data
    program = Program.objects.get(id=pk)
    serializer = ProgramSerializer(instance=program, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deleteProgram(request, pk):
    program = Program.objects.get(id=pk)
    program.delete()

    return Response('Program was deleted!')