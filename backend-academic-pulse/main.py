from fastapi import FastAPI
from src.modules.auth.api.auth_router import auth_router

app = FastAPI(
    title="Academic Pulse API",
    description="Sistema de gestión de espacios e incidencias",
    version="1.0.0"
)

app.include_router(auth_router)

@app.get("/")
def root():
    return {"message": "API Operativa 🚀"}