from fastapi import HTTPException
from src.modules.auth.application.dtos import LoginRequestDTO, TokenResponseDTO
from src.modules.auth.domain.usuario_repository import UsuarioRepository
from src.core.config.jwt import create_access_token

class LoginUseCase:
    def __init__(self, repository: UsuarioRepository):
        self.repository = repository

    def execute(self, request: LoginRequestDTO) -> TokenResponseDTO:
        usuario = self.repository.obtener_por_email(request.email)
        
        if not usuario or request.password != usuario.password_hash:
            raise HTTPException(status_code=401, detail="Credenciales incorrectas")

        token_data = {"sub": str(usuario.id), "rol": usuario.rol.value}
        token = create_access_token(token_data)

        return TokenResponseDTO(access_token=token, token_type="bearer", rol=usuario.rol.value)