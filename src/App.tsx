import { Element } from 'react-scroll'
import NavBar from './components/nav_bar'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Message from './components/message'
import Footer from './components/footer'
import './App.css'
import Projects from './components/projects'


function App() {

  return (
    <div className='appContainer'>
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
      <Element name="message">
        <section>
          <Message />
        </section>
      </Element>
      <Footer />
    </div>
  )
}

export default App
