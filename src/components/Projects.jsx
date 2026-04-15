import ProjectCard from "./ProjectCard"

export default function Projects() {
  const projects = [
    {
      title: "Smart Medication Tracker",
      desc: "Production-ready medication tracking system with reporting and scheduling.",
      points: [
        "React + TypeScript full-stack application",
        "REST API integration",
        "PDF report generation",
        "Deployed with Dockerized services"
      ],
      stack: "React · TypeScript · Next.js · APIs"
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
      stack: "Electron · React · TypeScript"
    },
    {
      title: "Stealth Startup Internship Work",
      desc: "Full-stack AI features and LLM pipeline optimization.",
      points: [
        "React + TypeScript frontend features",
        "Python API integration",
        "LLM performance optimization (LangSmith)",
        "Debugged production AI issues"
      ],
      stack: "React · Python · LLM APIs"
    },
    {
      title: "UC Irvine NLP Research System",
      desc: "Text mining + sentiment analysis pipelines for large datasets.",
      points: [
        "Python NLP pipelines",
        "SQL database design",
        "NASA ADS API integration",
        "Automated research workflows"
      ],
      stack: "Python · NLP · SQL"
    },
    {
      title: "ML Recommender System (STEM-Away)",
      desc: "Collaborative ML system with global team.",
      points: [
        "Led Agile ML team",
        "Built PyTorch recommender model",
        "Data pipeline automation",
        "Technical documentation"
      ],
      stack: "PyTorch · Python · ML"
    },
    {
      title: "Meadow Minds (UX Design)",
      desc: "Mental health app concept focused on accessibility.",
      points: [
        "Designed in Figma",
        "UX research for rural accessibility",
        "Full user journey mapping",
        "Low-connectivity design considerations"
      ],
      stack: "Figma · UX Research"
    }
  ]

  return (
    <section>
      <h2 style={{ fontSize: 24, marginBottom: 20 }}>Projects</h2>

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