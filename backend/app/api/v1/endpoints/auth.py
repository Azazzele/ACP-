from fastapi import APIRouter

router = APIRouter()

#& В data нужно положить Username + Password + Email 
#! id Юзера берется с автопрефикса БД он не нужен

@router.post("/register") 
async def register_user():
    return {"status": "User created"}

@router.post("/login") 
async def register_user():   
    return {"status": "User created"}

@router.post("/logout") 
async def logout_user():   
    return {"status": "User created"}

@router.get("/{user_id}") 
async def get_user_by_id(user_id: int, user_name:str, user_email:str):
    return {
        "user_id": user_id,
        "user_name":user_name,
        "user_email":user_email
    }

@router.delete('/{user_id}')
async def deleate_user(user_id: int):
    # 1. Найти пользователя в БД
    # 2. Удалить или деактивировать его
    return {"message": f"User {user_id} deleted"}

