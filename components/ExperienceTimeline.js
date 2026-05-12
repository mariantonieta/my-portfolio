export default function ExperienceTimeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article key={`${item.company}-${item.period}`} className="timeline-item">
          <div className="timeline-marker">
            <span className="timeline-dot" />
            <span className="timeline-line" />
          </div>
          <div className="timeline-card">
            <div className="timeline-meta">
              <span>{item.period}</span>
              <span>{item.location}</span>
            </div>
            <h3>
              {item.company} · {item.role}
            </h3>
            <p>{item.summary}</p>
            <ul className="timeline-list">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
