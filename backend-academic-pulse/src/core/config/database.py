from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Credenciales basadas en tu docker-compose.dev.yml
SQLALCHEMY_DATABASE_URL = "postgresql://pulse_admin:pulse_password_123@localhost:5432/academic_pulse_db"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Dependencia para inyectar la sesión en cada petición HTTP
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()