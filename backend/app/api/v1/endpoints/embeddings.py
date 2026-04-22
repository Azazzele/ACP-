from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

#& Времнные Pandamic модели


#* Что ждать от фронтенда/бэкенда
class TextRequest(BaseModel):
    text: str

class MatchRequest(BaseModel):
    resume_text: str
    vacancy_text: str

@router.post("/create") 	
async def create_single_embedding(data: TextRequest):
    #^ Здесь будет вызов твоего Core
    return {"vector": []}

@router.post("/similarity") 	
async def compare_texts(data: MatchRequest):
    #^ Сравнение двух текстов
    return {"score": 0.0}

@router.post('/extract-skills')
async def extract_skills_resume(data: TextRequest):
    #^ Поиск навыков в тексте
    return {"skills": []}

@router.post('/match-vacancy')
async def match_resume_to_vacancy(data: MatchRequest):
    #^ Сопоставление резюме и вакансии
    return {"match_percentage": 0}

@router.post('/summary')
async def summary_for_resume(data: TextRequest):
    #^ Краткая выжимка
    return {"summary": "Тут будет текст"}