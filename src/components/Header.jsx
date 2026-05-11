import resume from "../assets/resume.pdf"

export default function Header() {
  return (
    <header className="intro">
      <div>
        <p className="eyebrow">Portfolio</p>
        <h1>Maleeha Imran</h1>
      </div>

      <div className="intro-copy">
        <p>
          Computer science graduate student focused on building practical,
          polished software across full-stack products, AI tools, and
          production-ready systems.
        </p>

        <div className="credential-list" aria-label="Education">
          <span>M.S. Computer Science · Georgia Tech</span>
          <span>B.S. Computer Science · UC Irvine</span>
        </div>

        <nav className="contact-links" aria-label="Contact links">
          <a href="mailto:maleeha.imranm@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/maleeha-imran/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Mimran0715" target="_blank" rel="noreferrer">GitHub</a>
          <a href={resume} target="_blank" rel="noreferrer">Resume</a>
        </nav>
      </div>
    </header>
  )
}
