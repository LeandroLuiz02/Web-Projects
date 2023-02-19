#converter file (JSON -> python or python -> JSON)
from rest_framework import serializers
from HelloWorld.models import Robot

class RobotSerializer(serializers.ModelSerializer): #setting JSON output
    class Meta:
        model = Robot
        fields = '__all__'