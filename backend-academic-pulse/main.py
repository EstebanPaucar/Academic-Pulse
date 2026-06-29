from fastapi import FastAPI
from src.core.shared.infrastructure.sqlalchemy_base import Base
from src.core.config.database import engine
from src.modules.auth.api.auth_router import auth_router

# 🚨 EL FIX: Importamos el modelo explícitamente para que SQLAlchemy lo detecte
from src.modules.auth.infra.usuario_model import UsuarioModel

# Ahora SQLAlchemy sí sabe que 'UsuarioModel' existe y creará la tabla
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Academic Pulse API",
    description="Sistema de gestión de espacios e incidencias",
    version="1.0.0"
)

app.include_router(auth_router)

@app.get("/")
def root():
    return {"message": "API Operativa 🚀 conectada a PostgreSQL"}