import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Navbar from "./components/Navbar.jsx"
import Features from "./components/Features.jsx"
import Story from "./components/Story.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default App