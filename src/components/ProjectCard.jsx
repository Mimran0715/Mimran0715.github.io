export default function ProjectCard({ title, desc, points, stack }) {
  return (
    <div style={{
      border: "1px solid #e5e5e5",
      borderRadius: 16,
      padding: 18
    }}>
      <h3 style={{ marginBottom: 6 }}>{title}</h3>

      <p style={{ color: "#444", fontSize: 14 }}>
        {desc}
      </p>

      <ul style={{ fontSize: 13, paddingLeft: 18 }}>
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <p style={{ fontSize: 12, color: "#666", marginTop: 10 }}>
        {stack}
      </p>
    </div>
  )
}