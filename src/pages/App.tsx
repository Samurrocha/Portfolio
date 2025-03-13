import '../styles/pages/App.css'
import MenuButton from '../components/menu_button'

function App() {

  return (
    <>

    <div>
      <MenuButton/>
    </div>

      <div className='header'>
        <h1 style={{ textAlign: 'start' }}>WELCOME</h1>

        <p id='presentationText'>My name is Samuel and this is my personal site. I am a FullStack software developer, nowadays I have been working and learning technologies
                                 in the area of softaware development, artificial intelligence, data science and clound<br />
                                 Here you will find some projects made by me and ongoing projects.<br />
                                 On this page, you wil be able to get know me better, my skills and my motivations
        </p>
      </div>
      <div style={{marginTop:"800px"}}><p>saaaaaaaaaa</p></div>
    </>
  )
}

export default App
