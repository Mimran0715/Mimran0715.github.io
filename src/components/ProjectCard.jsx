export default function ProjectCard({ title, desc, details = [], stack, period, links = [] }) {
  return (
    <article className="project-card">
      <div className="project-main">
        <h3>{title}</h3>
        <p className="project-desc">{desc}</p>

        <ul className="project-details">
          {details.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

      <aside className="project-meta" aria-label={`${title} details`}>
        <p>{period}</p>
        <p>{stack}</p>

        <div className="project-links">
          {links.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </aside>
    </article>
  )
}
