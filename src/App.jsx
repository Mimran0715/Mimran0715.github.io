export default function App() {
  return (
    <div style={styles.page}>

      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.name}>Maleeha Imran</h1>

        <p style={styles.subtitle}>
          Full-stack developer focused on building production-ready systems, AI-powered applications, and scalable web tools.
        </p>

        <div style={styles.links}>
          <a href="mailto:maleeha.imranm@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/maleeha-imran/" target="_blank">LinkedIn</a>
          <a href="https://github.com/Mimran0715" target="_blank">GitHub</a>
        </div>
      </header>

      {/* Projects */}
      <section>
        <h2 style={styles.sectionTitle}>Projects</h2>

        <div style={styles.grid}>

          <Card
            title="Smart Medication Tracker"
            desc="Production-ready medication tracking system with reporting and scheduling."
            points={[
              "React + TypeScript full-stack application",
              "REST API integration with backend services",
              "PDF report generation for adherence tracking",
              "Deployed via Vercel + Render with Dockerized services"
            ]}
            stack="React · TypeScript · Next.js · Docker · APIs"
          />

          <Card
            title="Drafts – AI Writing Companion"
            desc="Desktop AI writing assistant with contextual real-time feedback."
            points={[
              "Electron desktop application with React UI",
              "Integrated LangChain for AI-driven suggestions",
              "Real-time contextual writing feedback system",
              "TypeScript-based architecture"
            ]}
            stack="Electron · React · TypeScript · LangChain"
          />

          <Card
            title="Stealth Startup AI Platform (Internship Work)"
            desc="Full-stack AI features and LLM pipeline optimization for production systems."
            points={[
              "Built React + TypeScript frontend features",
              "Integrated Python-based AI APIs",
              "Optimized LLM cost/performance metrics (LangSmith)",
              "Debugged hallucinations and production AI issues"
            ]}
            stack="React · TypeScript · Python · LLM APIs"
          />

          <Card
            title="UC Irvine Text Mining Research System"
            desc="ML-driven text mining pipeline for large-scale scientific datasets."
            points={[
              "Built sentiment analysis pipelines in Python",
              "Designed SQL-based structured/unstructured data systems",
              "Integrated NASA ADS API for research data ingestion",
              "Automated preprocessing and analysis workflows"
            ]}
            stack="Python · SQL · NLP · APIs · ML"
          />

          <Card
            title="STEM-Away ML Recommendation System"
            desc="Collaborative ML project focused on recommender systems and automation."
            points={[
              "Led global team of ML interns using Agile workflows",
              "Built PyTorch-based recommendation model",
              "Designed automated data ingestion pipelines",
              "Created technical documentation for engineering teams"
            ]}
            stack="PyTorch · Python · ML · Data Pipelines"
          />

          <Card
            title="Meadow Minds (UI/UX Concept App)"
            desc="Mental health app designed for accessibility in rural communities."
            points={[
              "Designed full UI/UX flow in Figma",
              "Focused on accessibility-first design principles",
              "Prototyped user journey for low-connectivity environments",
              "Human-centered design research approach"
            ]}
            stack="Figma · UX Research · Prototyping"
          />

        </div>
      </section>

      {/* Education / Footer */}
      <footer style={styles.footer}>
        <p>
          MS Computer Science — Georgia Institute of Technology (2026)
        </p>
        <p>
          BS Computer Science — University of California, Irvine (2020)
        </p>
      </footer>

    </div>
  );
}

/* Reusable Card Component */
function Card({ title, desc, points, stack }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDesc}>{desc}</p>

      <ul style={styles.list}>
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <p style={styles.stack}>{stack}</p>
    </div>
  );
}

/* Styles */
const styles = {
  page: {
    maxWidth: 1000,
    margin: "0 auto",
    padding: "60px 24px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    background: "#fff",
    color: "#000"
  },

  header: {
    marginBottom: 50
  },

  name: {
    fontSize: 44,
    margin: 0,
    letterSpacing: -1
  },

  subtitle: {
    marginTop: 12,
    fontSize: 18,
    color: "#333",
    maxWidth: 700,
    lineHeight: 1.5
  },

  links: {
    marginTop: 16,
    display: "flex",
    gap: 16,
    fontSize: 14
  },

  sectionTitle: {
    fontSize: 24,
    marginBottom: 20
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 20
  },

  card: {
    border: "1px solid #e5e5e5",
    borderRadius: 16,
    padding: 18,
    background: "#fff"
  },

  cardTitle: {
    fontSize: 18,
    marginBottom: 6
  },

  cardDesc: {
    fontSize: 14,
    color: "#444",
    marginBottom: 10
  },

  list: {
    fontSize: 13,
    color: "#222",
    paddingLeft: 18,
    lineHeight: 1.5
  },

  stack: {
    marginTop: 10,
    fontSize: 12,
    color: "#666"
  },

  footer: {
    marginTop: 60,
    fontSize: 13,
    color: "#555",
    borderTop: "1px solid #eee",
    paddingTop: 20
  }
};