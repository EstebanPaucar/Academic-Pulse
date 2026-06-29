from pydantic import BaseModel, EmailStr, field_validator, Field
from uuid import UUID, uuid4
from src.modules.auth.domain.rol import Rol

class Usuario(BaseModel):
    # Field(default_factory=uuid4) genera el ID automáticamente si no se envía
    id: UUID = Field(default_factory=uuid4)
    nombre: str
    email: EmailStr
    password_hash: str
    rol: Rol
    
    # Regla de negocio core: Blindaje institucional
    @field_validator('email')
    @classmethod
    def validar_dominio_uce(cls, v: str) -> str:
        if not v.endswith('@uce.edu.ec'):
            raise ValueError('Dominio inválido. Solo se admiten correos @uce.edu.ec')
        return v