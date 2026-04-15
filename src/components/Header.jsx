export default function Header() {
  return (
    <header style={{ marginBottom: 50 }}>
      <h1 style={{ fontSize: 44, margin: 0 }}>Maleeha Imran</h1>

      <p style={{ fontSize: 18, color: "#333", maxWidth: 700 }}>
        Full-stack developer focused on production-ready systems, AI applications, and scalable tools.
      </p>

      <div style={{ display: "flex", gap: 16, marginTop: 12, fontSize: 14 }}>
        <a href="mailto:maleeha.imranm@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/maleeha-imran/" target="_blank">LinkedIn</a>
        <a href="https://github.com/Mimran0715" target="_blank">GitHub</a>
      </div>
    </header>
  )
}