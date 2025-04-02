import { Element } from 'react-scroll'
import NavBar from './components/nav_bar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Message from './components/Message'
import Footer from './components/footer'
import './App.css'
import Projects from './components/Projects'


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
