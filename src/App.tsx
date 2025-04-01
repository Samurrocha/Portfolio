import { Element } from 'react-scroll'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import NavBar from './components/nav_bar'
import './App.css'
import Projects from './components/Projects'


function App() {

  return (
    <div className='container'>
      <NavBar />

      <Element name="home">
        <section>
          <Home />
        </section>
      </Element>
      <Element name="about">
        <section>
          <About />
        </section>
      </Element>
      <Element name="skills">
        <section>
          <Skills />
        </section>
      </Element>
      <Element name="projects">
        <section>
          <Projects />
        </section>
      </Element>
    </div>
  )
}

export default App
