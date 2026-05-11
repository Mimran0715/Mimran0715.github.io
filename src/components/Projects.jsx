import ProjectCard from "./ProjectCard"

export default function Projects() {
  const projects = [
    {
      title: "Smart Medication Tracker",
      desc: "Production-ready medication tracking system with reporting and scheduling.",
      details: [
        "React + TypeScript full-stack application",
        "REST API integration",
        "Deployed with Dockerized services"
      ],
      stack: "React · TypeScript · Next.js · APIs",
      period: "2025",
      links: []
    },
    {
      title: "Drafts - AI Writing Companion",
      desc: "Desktop AI writing assistant with contextual feedback.",
      details: [
        "Electron + React desktop app",
        "LangChain integration",
        "Real-time writing feedback",
        "TypeScript architecture"
      ],
      stack: "Electron · React · TypeScript",
      period: "2025",
      links: []
    },
  ]

  return (
    <section className="projects-section" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">Selected Work</p>
        <h2 id="projects-title">Projects</h2>
      </div>

      <div className="project-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  )
}
