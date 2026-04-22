'use client'

import { useState } from 'react'
import './input.scss'

type Props = {
  type: 'login' | 'register'
  onSubmit: (data: {
    fullName?: string
    email: string
    password: string
    role?: 'candidate' | 'recruiter'
  }) => void
}

export default function AuthForm({ type, onSubmit }: Props) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'candidate' | 'recruiter'>('candidate')
  const [isLoading, setIsLoading] = useState(false)


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await onSubmit({
      fullName: type === 'register' ? fullName : undefined,
      email,
      password,
      role: type === 'register' ? role : undefined,
    })
    setIsLoading(false)
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Регистрация</h2>
          <p>Присоединяйся к лучшей платформе для поиска работы и найма</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>ФИО</label>
            <input
              type="text"
              placeholder="Иван Иванов"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Email адрес</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Пароль</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {type === 'register' && (
            <div className="role-section">
              <label>Я являюсь</label>
              <div className="role-options">
                <button
                  type="button"
                  className={`role-card ${role === 'candidate' ? 'active' : ''}`}
                  onClick={() => setRole('candidate')}
                >
                  <span className="material-symbols-rounded role-icon">person</span>
                  <div className="role-info">
                    <strong>Кандидат</strong>
                    <span>Ищу работу</span>
                  </div>
                </button>

                <button
                  type="button"
                  className={`role-card ${role === 'recruiter' ? 'active' : ''}`}
                  onClick={() => setRole('recruiter')}
                >
                  <span className="material-symbols-rounded role-icon">work</span>
                  <div className="role-info">
                    <strong>Рекрутер</strong>
                    <span>Ищу сотрудников</span>
                  </div>
                </button>
              </div>
            </div>
          )}

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? 'Создание аккаунта...' : 'Создать аккаунт'}
          </button>

          {/* Перенеправление на страницу Вход */}
          <button type='button' className="submit-btn" disabled={isLoading}>
            {isLoading ? 'Вход' : 'Войти'}
          </button>
        </form>
      </div>
    </div>
  )
}