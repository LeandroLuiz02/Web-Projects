from django.contrib import admin
from HelloWorld.models import Robot

class Robots(admin.ModelAdmin): # classe na qual é feita a configuração
    list_display = ('RobotId', 'nome')
    list_display_links = ('RobotId', 'nome')
    search_fields = ('nome',)

admin.site.register(Robot, Robots)