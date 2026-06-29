from fastapi import HTTPException
from src.modules.auth.application.dtos import RegisterRequestDTO, TokenResponseDTO
from src.modules.auth.domain.usuario import Usuario
from src.modules.auth.domain.rol import Rol
from src.modules.auth.domain.usuario_repository import UsuarioRepository
from src.core.config.jwt import create_access_token

class RegisterUseCase:
    def __init__(self, repository: UsuarioRepository):
        self.repository = repository

    def execute(self, request: RegisterRequestDTO) -> TokenResponseDTO:
        if self.repository.obtener_por_email(request.email):
            raise HTTPException(status_code=400, detail="Este correo ya está registrado")

        # MAGIA ARQUITECTÓNICA: Forzamos el rol ESTUDIANTE sin importar lo que envíe el cliente
        nuevo_usuario = Usuario(
            nombre=request.nombre,
            email=request.email,
            password_hash=request.password, 
            rol=Rol.ESTUDIANTE 
        )

        self.repository.guardar(nuevo_usuario)

        token_data = {"sub": str(nuevo_usuario.id), "rol": nuevo_usuario.rol.value}
        token = create_access_token(token_data)

        return TokenResponseDTO(access_token=token, token_type="bearer", rol=nuevo_usuario.rol.value)