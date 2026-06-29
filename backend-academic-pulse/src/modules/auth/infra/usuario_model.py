from sqlalchemy import Column, String
from sqlalchemy.dialects.postgresql import UUID
from src.core.shared.infrastructure.sqlalchemy_base import Base
import uuid

class UsuarioModel(Base):
    __tablename__ = "usuarios"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    nombre = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    rol = Column(String, nullable=False)