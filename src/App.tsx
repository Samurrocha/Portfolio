import { Element, Link } from 'react-scroll'
import Home from './components/Home'
import Teste from './components/Teste'
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

      <Element name="projects">
        <section>
          <Teste />
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
