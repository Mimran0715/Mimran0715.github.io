export default function ProjectCard({ title, desc, points, stack, image }) {
  return (
    <div style={styles.card}>

      {image && (
        <img
          src={image}
          alt={title}
          style={styles.image}
          className="project-image"
        />
      )}

      <h3>{title}</h3>
      <p>{desc}</p>

      <ul>
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <p>{stack}</p>
    </div>
  )
}