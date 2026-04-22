'use client'

import { useState } from 'react'
import './header.scss'

type Role = 'guest' | 'candidate' | 'recruiter' | 'admin'

export default function Header() {
	const [isAuth, setIsAuth] = useState<boolean>(false)
	const [role, setRole] = useState<Role>('guest')

	return (
		<header className="header">
			<div className="header_title">
				<h2>ACP</h2>
			</div>

			<div className="conteiner_header">
				
				{/* ЛЕВАЯ ЧАСТЬ */}
				<ul className="nav_left">
					<li>Главная</li>
					<li>О системе</li>

					{isAuth && (
						<>
							<li>Дашборд</li>

							{role === 'recruiter' && (
								<>
									<li>Кандидаты</li>
									<li>Вакансии</li>
									<li>Аналитика</li>
								</>
							)}

							{role === 'candidate' && (
								<>
									<li>Мои отклики</li>
									<li>Вакансии</li>
								</>
							)}

							{role === 'admin' && (
								<>
									<li>Пользователи</li>
									<li>Система</li>
								</>
							)}
						</>
					)}
				</ul>

				{/* ПРАВАЯ ЧАСТЬ */}
				<ul className="nav_right">
					{!isAuth && (
						<>
							<li>Войти</li>
							<li>Регистрация</li>
						</>
					)}

					{isAuth && (
						<>
							<li>Загрузить резюме</li>
							<li>Профиль</li>
						</>
					)}
				</ul>

			</div>
		</header>
	)
}