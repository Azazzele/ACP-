
class Scoring():
	def __init__(self):
		pass

	def score_candidate(resume_text: str, job_text: str):
			emb1 = get_embedding(resume_text)
			emb2 = get_embedding(job_text)

			similarity = calculate_similarity(emb1, emb2)

			return similarity