export default function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1>Your Name</h1>
        <p>Full-stack developer building practical web applications.</p>

        <div style={styles.links}>
          <a href="https://github.com/yourgithub">GitHub</a>
          <a href="https://linkedin.com">LinkedIn</a>
          <a href="mailto:you@email.com">Email</a>
        </div>
      </header>

      <section>
        <h2>Projects</h2>

        <div style={styles.card}>
          <h3>Smart Medication Tracker</h3>
          <p>Track medications, adherence, and generate reports.</p>

          <ul>
            <li>User auth + database</li>
            <li>Medication scheduling</li>
            <li>PDF report generation</li>
            <li>Dashboard UI</li>
          </ul>

          <p style={styles.stack}>React · Node · PostgreSQL</p>

          <div style={styles.links}>
            <a href="#">Live</a>
            <a href="#">Code</a>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    maxWidth: 800,
    margin: "0 auto",
    padding: "48px 24px",
    fontFamily: "system-ui, sans-serif",
    color: "#111"
  },
  header: {
    marginBottom: 40
  },
  links: {
    display: "flex",
    gap: 12,
    marginTop: 10
  },
  card: {
    border: "1px solid #e5e5e5",
    padding: 16,
    borderRadius: 12,
    marginTop: 16
  },
  stack: {
    fontSize: 13,
    color: "#666"
  }
};