from fastapi import APIRouter, UploadFile, File

router = APIRouter()

@router.get("/me")
async def get_current_user():
    """Данные текущего юзера"""
    return {"id": 1, "username": "ivan_dev"}

@router.post("/me/resumes")
async def upload_resume(file: UploadFile = File(...)):
    """Загрузка файла резюме (PDF/DOCX)"""
    return {"filename": file.filename, "status": "uploaded"}

@router.get("/me/resumes")
async def list_my_resumes():
    """Список всех резюме юзера"""
    return [{"id": 101, "name": "Python Developer Resume"}]

@router.get("/me/resumes/{resume_id}/analysis")
async def get_resume_analysis(resume_id: int):
    """Получить готовый анализ (навыки, категории), который сделал микросервис"""
    return {"resume_id": resume_id, "skills": ["Python", "FastAPI"], "score": 85}