import personalPhoto from '../assets/terno(1).png';
import '../styles/components/home.css'
import Contacts from './contacts';

import {
  Code,  // Frontend
  Smartphone,  // Mobile
  Cloud,  // Cloud & DevOps
  BrainCircuit,  // Inteligência Artificial
} from "lucide-react";


export default function Home() {

  return (
    <div className='home' id='home'>
      <div className='header'>
        <Contacts />
      </div>

      <div className='presentationContainer'>
        <div className='presentation'>
          <h1>Hello, I am Samuel Rodrigues</h1>

          <p id='presentationText'>
            I am Samuel, a developer specialized in frontend, backend, mobile, artificial intelligence, and cloud technologies. I transform challenges into robust solutions.          </p>
        </div>
        <img src={personalPhoto} id='personalPhoto' />
      </div>
      <hr className='separator' />
      <div className='stackContainer'>
        <div className='stack'>
          <Code size={50} color="white" />
          <h1>FullStack</h1>
        </div>
        <div className='stack'>
          <Smartphone size={50} color="white" />
          <h1>Mobile</h1>
        </div>
        <div className='stack'>
          <Cloud size={50} color="white" />
          <h1>Cloud & DevOps</h1>
        </div>
        <div className='stack'>
          <BrainCircuit size={50} color="white" />
          <h1>Artificial Intelligence</h1>
        </div>
      </div>

    </div >
  )
}