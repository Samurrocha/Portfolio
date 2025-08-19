import Conversor from '../assets/go-planeje-photos/Conversor.png';
import Home from '../assets/go-planeje-photos/Home.png';
import Login from '../assets/go-planeje-photos/Login.png';
import MyTravels from '../assets/go-planeje-photos/MyTravels.png';
import Register from '../assets/go-planeje-photos/Register.png';
import '../styles/components/projects.css';
import CarrouselList from './carrousel_list';

export default function Projects() {

    const projectImages = [Conversor, Home, Login, MyTravels, Register];

    return (

        <div className='projects' id='projects'>
            <h1>My Projects</h1>
            <div className='projectContainer'>
                <div className='project'>
                    <div className='projectMedia'>
                        <CarrouselList projectsImages={projectImages} />
                    </div>
                    <h2>Go-Planeje</h2>
                    <p>
                        O projeto é um sistema de gerenciamento de viagens que une uma interface simples e intuitiva a uma arquitetura robusta e escalável.
                        Além de priorizar a experiência do usuário, foi desenvolvido com foco em boas práticas de engenharia de software, garantindo organização, manutenibilidade e flexibilidade para evoluções futuras.
                    </p>
                    <a href="https://go-planeje-frontend.vercel.app/" target="_blank">
                        Link do projeto
                    </a>
                    <a href="https://github.com/Samurrocha/GO-PLANEJE-FRONTEND" target="_blank">
                        Repositorio do Projeto
                    </a>
                </div>
                <div className='project'>
                    <div className='projectMedia'>
                    </div>
                    <h2>Project 2</h2>
                    <p>Description of project 2</p>
                </div>
                <div className='project'>
                    <div className='projectMedia'>
                    </div>
                    <h2>Project 3</h2>
                    <p>Description of project 3</p>
                </div>
            </div>
        </div>
    )
}