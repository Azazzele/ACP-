from fastapi import APIRouter
from app.api.v1.endpoints import auth, user, embeddings


api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["Auth"])
api_router.include_router(user.router, prefix="/user", tags=["User"])
api_router.include_router(embeddings.router, prefix="/embeddings", tags=["Embeddings"])
