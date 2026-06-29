from pydantic import BaseModel, EmailStr, field_validator

class LoginRequestDTO(BaseModel):
    email: EmailStr
    password: str

class RegisterRequestDTO(BaseModel):
    nombre: str
    email: EmailStr
    password: str

    @field_validator('email')
    @classmethod
    def validar_dominio_uce(cls, v: str) -> str:
        if not v.endswith('@uce.edu.ec'):
            raise ValueError('Acceso denegado: El correo debe ser institucional (@uce.edu.ec)')
        return v

class TokenResponseDTO(BaseModel):
    access_token: str
    token_type: str
    rol: str