import resume from "../assets/resume.pdf"

export default function Header() {
  return (
    <header style={{ marginBottom: 40 }}>
      <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 8 }}>Maleeha Imran</h1>

      <p style={{ fontSize: 18, color: "#666" }}>M.S Computer Science · Georgia Tech | B.S Computer Science · UC Irvine</p>
      {/* <p style={{ fontSize: 14, color: "#666" }}>B.S Computer Science · UC Irvine</p> */}

      {/* <p style={{ fontSize: 18, color: "#333", maxWidth: 700 }}>
        Full-stack developer specializing in production systems, AI, and scalable tools.
      </p> */}

      {/* <div style={{ display: "flex", gap: 16, marginTop: 12, fontSize: 24 }}>
        <p>M.S Computer Science — Georgia Tech (2026)</p>
        <p>B.S Computer Science — UC Irvine (2020)</p>
      </div> */}

      <div style={{ display: "flex", gap: 16, marginTop: 12, fontSize: 24 }}>
        <a href="mailto:maleeha.imranm@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/maleeha-imran/" target="_blank">LinkedIn</a>
        <a href="https://github.com/Mimran0715" target="_blank">GitHub</a>
        <a href={resume} target="_blank">Resume</a>
      </div>
      
    </header>
  )
}