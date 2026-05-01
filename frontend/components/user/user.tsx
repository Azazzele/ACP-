import React from 'react';
import './user.scss';

export default function User() {
  // Реальный массив данных для вакансий
  const jobs = [
    { id: 1, title: 'Senior React Engineer', company: 'FinTech Corp', salary: '200k+ ₽' },
    { id: 2, title: 'Frontend Developer', company: 'Global IT', salary: '180k+ ₽' },
    { id: 3, title: 'Middle React Dev', company: 'Startup Team', salary: '150k+ ₽' },
  ];

  const details = [
    { label: 'Возраст', value: '24 года', icon: 'cake' },
    { label: 'Город', value: 'Москва', icon: 'location_on' },
    { label: 'TG', value: '@alex_dev', icon: 'chat' },
    { label: 'Опыт', value: '3.5 года', icon: 'work' },
  ];

  return (
    <div className="user-dashboard">
      <header className="minimal-header">
        <div className="user-info">
          <div className="avatar-circle">
            <span className="online-indicator"></span>
          </div>
          <div className="name-box">
            <h1>Александр Иванов</h1>
            <p>Frontend Developer</p>
          </div>
        </div>
        
        <div className="header-right">
          <button className="btn-ghost-action">
            <span className="material-symbols-outlined">north</span> Поднять в поиске
          </button>
          <div className="status-chip">
            <span className="pulse"></span>
            Активный поиск
          </div>
        </div>
      </header>

      <div className="minimal-grid">
        <main className="content-main">
          
          <section className="market-pulse">
            <div className="pulse-item">
              <span className="p-label">Спрос на стек</span>
              <div className="p-bar"><div className="fill" style={{width: '85%'}}></div></div>
              <span className="p-value">Высокий</span>
            </div>
          </section>

          <section className="analytics-minimal">
            <div className="analytics-item main-score">
              <span className="tiny-label">Ваш рейтинг</span>
              <div className="score-value">
                8.8<span className="max-score">/10</span>
              </div>
            </div>

            <div className="analytics-item ats-check">
              <div className="ats-header">
                <span className="tiny-label">ATS Friendly</span>
                <span className="ats-percentage">92%</span>
              </div>
              <div className="minimal-progress-bar">
                <div className="progress-fill" style={{ width: '92%' }}></div>
              </div>
            </div>
          </section>

          <div className="recommendations-section">
            <div className="section-header">
              <h3 className="section-title">Вакансии для вас</h3>
              <div className="mini-filters">
                <button className="filter-btn active">Все</button>
                <button className="filter-btn">Удаленно</button>
              </div>
            </div>

            {jobs.map((job) => (
              <div key={job.id} className="job-row">
                <div className="job-meta">
                  <h4>{job.title}</h4>
                  <p>{job.company} • {job.salary}</p>
                </div>
                <button className="btn-link">Откликнуться</button>
              </div>
            ))}
          </div>
        </main>

        <aside className="content-side">
          <div className="upcoming-event-card">
            <span className="event-label">Завтра, 14:00</span>
            <p className="event-title">Интервью с Avito</p>
          </div>

          <div className="details-block">
            {details.map((d, i) => (
              <div key={i} className="detail-row">
                <div className="icon-side">
                  <span className="material-symbols-outlined">{d.icon}</span>
                </div>
                <div className="text-side">
                  <span className="label">{d.label}</span>
                  <span className="value">{d.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="activity-block">
            <div className="act-row">
              <span>Просмотры</span>
              <div className="trend-up">▲ 12%</div>
              <span className="num">142</span>
            </div>
            <div className="act-row accent">
              <span>Приглашения</span>
              <span className="num">4</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}