import { Element } from 'react-scroll'
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/nav_bar'
import './App.css'


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
      <Element name="projects">
        <section>
    <h1>aaa</h1>
        </section>
      </Element>

      <Element name="experiences">
        <section>

          <h1>Experiences</h1>
        </section>
      </Element>

    </div>
  )
}

export default App
