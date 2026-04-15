import Header from "./components/Header"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export default function App() {
  return (
    <div style={{
      maxWidth: 1000,
      margin: "0 auto",
      padding: "60px 24px"
    }}>
      <Header />
      <Projects />
      <Footer />
    </div>
  )
}