from rest_framework import viewsets
from HelloWorld.models import Robot
from HelloWorld.serializer import RobotSerializer

class RobotsViewSet(viewsets.ModelViewSet): #does all the CRUD methods
    queryset = Robot.objects.all()
    serializer_class = RobotSerializer