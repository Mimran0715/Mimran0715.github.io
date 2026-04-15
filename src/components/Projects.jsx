import ProjectCard from "./ProjectCard"
import  drafts from "../assets/drafts.png"
import  medtracker from "../assets/medtracker.png"
console.log("image import:", drafts)

export default function Projects() {
  const projects = [
    {
      title: "Smart Medication Tracker",
      desc: "Production-ready medication tracking system with reporting and scheduling.",
      points: [
        "React + TypeScript full-stack application",
        "REST API integration",
        "Deployed with Dockerized services"
      ],
      stack: "React · TypeScript · Next.js · APIs",
      image: medtracker, 
      link: ""
    },
    {
      title: "Drafts – AI Writing Companion",
      desc: "Desktop AI writing assistant with contextual feedback.",
      points: [
        "Electron + React desktop app",
        "LangChain integration",
        "Real-time writing feedback",
        "TypeScript architecture"
      ],
      stack: "Electron · React · TypeScript",
      image: drafts, 
      link: ""
    },
  ]

  return (
    <section>
      <h2 style={{ fontSize: 44, marginBottom: 20 }}>Projects</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 20
      }}>
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  )
}