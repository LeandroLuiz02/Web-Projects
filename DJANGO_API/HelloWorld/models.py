from django.db import models

class Robot(models.Model):
    nome = models.CharField(max_length=30)
    RobotId = models.CharField(max_length=9)

    def __str__(self): # "manipular os objetos dessa classe"
        return self.nome