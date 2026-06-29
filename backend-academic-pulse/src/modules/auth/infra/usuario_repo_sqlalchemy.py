from typing import Optional
from sqlalchemy.orm import Session
from src.modules.auth.domain.usuario_repository import UsuarioRepository
from src.modules.auth.domain.usuario import Usuario
from src.modules.auth.domain.rol import Rol
from src.modules.auth.infra.usuario_model import UsuarioModel

class UsuarioRepoSQLAlchemy(UsuarioRepository):
    def __init__(self, db: Session):
        self.db = db

    def obtener_por_email(self, email: str) -> Optional[Usuario]:
        # 1. Buscar en PostgreSQL
        usuario_db = self.db.query(UsuarioModel).filter(UsuarioModel.email == email).first()
        
        if not usuario_db:
            return None
            
        # 2. Convertir el dato de SQL a una Entidad Pydantic para proteger el Dominio
        return Usuario(
            id=usuario_db.id,
            nombre=usuario_db.nombre,
            email=usuario_db.email,
            password_hash=usuario_db.password_hash,
            rol=Rol(usuario_db.rol)
        )

    def guardar(self, usuario: Usuario) -> None:
        # Convertir Entidad Pydantic a Modelo SQL
        nuevo_usuario_db = UsuarioModel(
            id=usuario.id,
            nombre=usuario.nombre,
            email=usuario.email,
            password_hash=usuario.password_hash,
            rol=usuario.rol.value
        )
        self.db.add(nuevo_usuario_db)
        self.db.commit()
        self.db.refresh(nuevo_usuario_db)