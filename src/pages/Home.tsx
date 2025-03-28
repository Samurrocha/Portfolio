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
              My name is Samuel and this is my personal site. I am a FullStack software developer, nowadays I have been working and learning technologies in the area of softaware 
              development, artificial intelligence, data science and clound. Here you will find some projects made by me and ongoing projects. On this page, you wil be able to get 
              know me better, my skills and my motivations.
            </p>
          </div>
          <img src={personalPhoto} id='personalPhoto' />
        </div>
      </div>

      <div id='body'>

        <h2>WHAT I AM WORKING WITH</h2>
        <FlatList />

        <h2>most relevant projects</h2>
        <CarrouselList />
      </div>


      <section className='skillSection'>
        <h2>My Skills</h2>
        <div className='skillContainer'>
          <div className="skillCategory">
            <h3>FrontEnd</h3>
            <ul>
              <li>
                JavaScript / TypeScript
                <ul className='subSkill'>
                  <li>React</li>
                  <li>React Native</li>
                  <li>NextJs</li>
                  <li>Angular</li>
                </ul>
              </li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          <div className='skillCategory'>
            <h3>BackEnd</h3>
            <ul>
              <li>
                Java
                <ul className='subSkill'>
                  <li>SpringBoot</li>
                </ul>
              </li>
              <li>
                Python
                <ul className='subSkill'>
                  <li>Django</li>
                  <li>FastAPI</li>
                </ul>
              </li>
              <li>
                Node
                <ul className='subSkill'>
                  <li>Express.js</li>
                </ul>
              </li>
              <li>
                DataBase SQL
                <ul className='subSkill'>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>Oracle</li>
                  <li>SQLServer</li>
                </ul>
              </li>

              <li>
                DataBase NoSQL
                <ul className='subSkill'>
                  <li>MongoDb</li>
                </ul>
              </li>

              <li>
                RestFull API
              </li>
            </ul>
          </div>
          <div className='skillCategory'>
            <h3>Mobile</h3>
            <ul>
              <li>oracle</li>
              <li>oracle</li>
              <li>oracle</li>
              <li>oracle</li>
            </ul>
          </div>
          <div className='skillCategory'>
            <h3>Data & Cloud</h3>
            <ul>
              <li>mircorsoft</li>
              <li>mircorsoft</li>
              <li>mircorsoft</li>
              <li>mircorsoft</li>
              <li>mircorsoft</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />

    </>
  )
}