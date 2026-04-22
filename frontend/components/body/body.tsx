import './body.scss';


export default function Body(){

	const skills = [
		"Python",
		"React",
		"Docker",
		"FastAPI",
		"AWS",
		"JavaScript",
		"ML",
		"Elixir",
		"C++",
		"Kubernetes",
	  ];

	return(
		<div className="conteiner">

			<div className="auth-banner">
				<span>Вы ещё не зарегистрированы?</span>
				<button className="login-btn">Войти</button>
			</div>

			<main className="main">
			<section className="skills">
				<h2>Популярные навыки ~</h2>
				<div className="tags">
					{skills.map((skill, index) => {
					const isUp = index % 2 === 0;
					return (
						<span key={skill} className={`tag ${isUp ? 'up' : 'down'}`}>
						{skill}
						<i className="material-icons icon">
							{isUp ? 'arrow_upward' : 'arrow_downward'}
						</i>
						</span>
					);
					})}
				</div>
			</section>
				<section className="hero">
					<h1>Система оценки кандидатов</h1>
					<p>Анализируй резюме и находи лучших кандидатов быстрее</p>

					<div className="actions">
						<button className="primary">Загрузить резюме</button>
						<button className="secondary">Создать вакансию</button>
					</div>
				</section>

				<section className="stats">
					<div className="card">
						<h3></h3>
						<p>Кандидатов</p>
					</div>

					<div className="card">
						<h3></h3>
						<p>Вакансий</p>
					</div>	

					<div className="card">
						<h3></h3>
						<p>Средний матч</p>
					</div>
				</section>

			</main>
		</div>
	)
}

