from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
from abc import ABC


"""
import numpy as np
import pandas as pd 
import faiss

from sentence_transformers import SentenceTransformer
from sentence_transformers import CrossEncoder

import os 
import re

# Пример SentenceTransformer виды Алгоритмов 

model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")
sentences = [
    "The weather is lovely today.",
    "It's so sunny outside!",
    "He drove to the stadium.",
]

embeddings = model.encode(sentences)
print(embeddings.shape)


similarities = model.similarity(embeddings, embeddings)
print(similarities)

query = "How many people live in Berlin?"
passages = [
    "Berlin had a population of 3,520,031 registered inhabitants in an area of 891.82 square kilometers.",
    "Berlin has a yearly total of about 135 million day visitors, making it one of the most-visited cities in the European Union.",
    "In 2013 around 600,000 Berliners were registered in one of the more than 2,300 sport and fitness clubs.",
]

# 2a. predict scores for pairs of texts
scores = model.predict([(query, passage) for passage in passages])
print(scores)

# 2b. Rank a list of passages for a query
ranks = model.rank(query, passages, return_documents=True)

print("Query:", query)
for rank in ranks:
    print(f"- #{rank['corpus_id']} ({rank['score']:.2f}): {rank['text']}")

Query: How many people live in Berlin?
- #0 (8.61): Berlin had a population of 3,520,031 registered inhabitants in an area of 891.82 square kilometers.
- #2 (6.35): In 2013 around 600,000 Berliners were registered in one of the more than 2,300 sport and fitness clubs.
- #1 (5.51): Berlin has a yearly total of about 135 million day visitors, making it one of the most-visited cities in the European Union.

class Touch():
	...
	


Класс Core реализует ядро обработки алгоритма поиска совпадение в тексте
и постороении оценки на основе имеющихся данных

Разбить по классам каждый метод 
"""

class Core(ABC):
    def __init__(self):
        model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")
    
    def function(self):
        pass

	
	
	
