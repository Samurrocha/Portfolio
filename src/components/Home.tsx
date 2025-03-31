import MenuButton from './menu_button'
import personalPhoto from '../assets/terno(1).png';
import logo from '../assets/logo.png'
import CarrouselList from './carrousel_list'
import FlatList from './flat_list';
import Footer from './footer';
import '../styles/components/home.css'
import Contacts from './contacts';

export default function Home() {

  return (
      <div className='home' id='home'>


        <div className='header'>
          <img src={logo} id='logo' />


          <Contacts />
        </div>

        <div className='presentationContainer'>
          <div className='presentation'>
            <h1>Hello, I am Samuel Rodrigues</h1>

            <p id='presentationText'>
              I am Samuel, a developer specialized in frontend, backend, mobile, data science, AI, and cloud technologies. I transform challenges into robust solutions.          </p>
          </div>
          <img src={personalPhoto} id='personalPhoto' />
        </div>
      </div >

  )
}