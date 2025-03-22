import MenuButton from '../components/menu_button'
import personalPhoto from '../assets/terno.jpg';
import CarrouselList from '../components/carrousel_list'
import FlatList from '../components/flat_list';
import Footer from '../components/footer';
import '../styles/pages/home.css'

export default function Home() {

  return (
    <>

      <div>
        <MenuButton />
      </div>

      <div className='header'>
        <h1 style={{ textAlign: 'start' }}>WELCOME</h1>

        <p id='presentationText'>My name is Samuel and this is my personal site. I am a FullStack software developer, nowadays I have been working and learning technologies
          in the area of softaware development, artificial intelligence, data science and clound<br />
          Here you will find some projects made by me and ongoing projects.<br />
          On this page, you wil be able to get know me better, my skills and my motivations
        </p>
      </div>

      <div id='body'>
        <img src={personalPhoto} id='personalPhoto' />

      <h2>WHAT I AM WORKING WITH</h2>
        <FlatList/>

        <h2 id='projectsDivision'>most relevant projects</h2>
        <CarrouselList />
      </div>


      <Footer />

    </>
  )
}