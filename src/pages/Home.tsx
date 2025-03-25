import MenuButton from '../components/menu_button'
import personalPhoto from '../assets/terno(1).png';
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
      <div className='flatMenu'>

        <button className='optionMenu'>Who am I</button>
        <button className='optionMenu'>Projects</button>
        <button className='optionMenu'>Skills</button>
        <button className='optionMenu'>Contact</button>


      </div>

      <div className='presentationHeader'>
        <div className='presentation'>
          <h3>Software developer</h3>
          <h1>Hello, I am Samuel</h1>

          <p id='presentationText'>
            My name is Samuel and this is my personal site. I am a FullStack software developer, nowadays I have been working and learning technologies
            in the area of softaware development, artificial intelligence, data science and clound<br />
            Here you will find some projects made by me and ongoing projects.<br />
            On this page, you wil be able to get know me better, my skills and my motivations
          </p>
        </div>
        <img src={personalPhoto} id='personalPhoto' />
      </div>
      </div>

      <div id='body'>

        <h2>WHAT I AM WORKING WITH</h2>
        <FlatList />

        <h2 id='projectsDivision'>most relevant projects</h2>
        <CarrouselList />
      </div>


      <Footer />

    </>
  )
}