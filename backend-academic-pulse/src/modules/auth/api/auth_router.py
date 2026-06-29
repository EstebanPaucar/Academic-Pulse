from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from src.core.config.database import get_db
from src.modules.auth.application.dtos import LoginRequestDTO, RegisterRequestDTO, TokenResponseDTO
from src.modules.auth.application.use_cases.login_use_case import LoginUseCase
from src.modules.auth.application.use_cases.register_use_case import RegisterUseCase
from src.modules.auth.infra.usuario_repo_sqlalchemy import UsuarioRepoSQLAlchemy

auth_router = APIRouter(prefix="/auth", tags=["Autenticación"])

# Inyectamos la conexión a la base de datos en los Casos de Uso
def get_login_use_case(db: Session = Depends(get_db)) -> LoginUseCase:
    repo = UsuarioRepoSQLAlchemy(db)
    return LoginUseCase(repository=repo)

def get_register_use_case(db: Session = Depends(get_db)) -> RegisterUseCase:
    repo = UsuarioRepoSQLAlchemy(db)
    return RegisterUseCase(repository=repo)

@auth_router.post("/register", response_model=TokenResponseDTO)
def register(request: RegisterRequestDTO, use_case: RegisterUseCase = Depends(get_register_use_case)):
    return use_case.execute(request)

@auth_router.post("/login", response_model=TokenResponseDTO)
def login(request: LoginRequestDTO, use_case: LoginUseCase = Depends(get_login_use_case)):
    return use_case.execute(request)