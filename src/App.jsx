import Header from "./components/Header"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Projects />
        <Footer />
      </main>
    </div>
  )
}
