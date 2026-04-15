export default function ProjectCard({ title, desc, points = [], stack, image, link }) {
  return (
    <div style={styles.card}>

      {image && (
        <img
          src={image}
          alt={title}
          style={styles.image}
        />
      )}

      <h4 style={styles.title}>{title}</h4>
      <p style={styles.desc}>{desc}</p>

      <ul style={styles.list}>
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <p style={styles.stack}>{stack}</p>
      <a style={styles.link} href={link} target="_blank">Github</a>
    </div>
  )
}

const styles = {
  card: {
    border: "1px solid #e5e5e5",
    borderRadius: 16,
    padding: 12,
    background: "#fff"
  },
  image: {
    width: "100%",
    height: 250,
    objectFit: "cover",
    borderRadius: 12,
    marginBottom: 12
  },
  title: {
    fontSize: 28,
    fontWeight: 600,
    margin: "0 0 6px 0"
  },
  desc: {
    fontSize: 20,
    color: "#555",
    margin: "0 0 8px 0"
  },
  list: {
    fontSize: 20,
    color: "#666",
    paddingLeft: 16,
    margin: "0 0 8px 0"
  },
  stack: {
    fontSize: 20,
    color: "#999",
    margin: 0
  }, 
  link: {
    fontSize: 20,
    margin: 0
  }
}