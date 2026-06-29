from abc import ABC, abstractmethod
from typing import Optional
from src.modules.auth.domain.usuario import Usuario

class UsuarioRepository(ABC):
    
    @abstractmethod
    def obtener_por_email(self, email: str) -> Optional[Usuario]:
        pass

    @abstractmethod
    def guardar(self, usuario: Usuario) -> None:
        pass