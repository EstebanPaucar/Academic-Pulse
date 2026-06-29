from enum import Enum

class Rol(str, Enum):
    ESTUDIANTE = "ESTUDIANTE"
    PROFESOR = "PROFESOR"
    GESTOR = "GESTOR"
    ADMIN = "ADMIN"