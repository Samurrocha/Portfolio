import Conversor from '../assets/go-planeje-photos/Conversor.png';
import Home from '../assets/go-planeje-photos/Home.png';
import Login from '../assets/go-planeje-photos/Login.png';
import MyTravels from '../assets/go-planeje-photos/MyTravels.png';
import Register from '../assets/go-planeje-photos/Register.png';
import '../styles/components/projects.css';
import CarrouselList from './carrousel_list';
import { useState } from 'react';

export default function Projects() {
    const [projecStyle, setProjectStyle] = useState('project');


    const handleClick = (id: string) => {
        projecStyle == 'project' ? setProjectStyle(`${id}Expanded`) : setProjectStyle('project');
    }

    const projectImages = [Conversor, Home, Login, MyTravels, Register];

    return (

        <div className='projects' id='projects'>
            <h1>My Projects</h1>
            <div className='projectContainer'>
                <div className='project' id='project1' style={projecStyle == `project1Expanded` ? { position: 'absolute', justifySelf: 'center', width: '200%', transform: 'scale(1.5)' } : {}} onClick={(e) => handleClick(e.currentTarget.id)}>
                    <div className='projectMedia' id='project1' style={projecStyle == 'project1Expanded' ? { transform: 'scale(1.1)', overflow: 'hidden' } : {}} >
                        <CarrouselList projectImages={projectImages} />
                    </div>
                    <h2>Go-Planeje</h2>
                    <p>
                        O projeto é um sistema de gerenciamento de viagens que une uma interface simples e intuitiva a uma arquitetura robusta e escalável.
                        Além de priorizar a experiência do usuário, foi desenvolvido com foco em boas práticas de engenharia de software, garantindo organização, manutenibilidade e flexibilidade para evoluções futuras.
                    </p>
                    <div className='projectLinks'>
                        <a href="https://go-planeje-frontend.vercel.app/" target="_blank">
                            Link do projeto
                        </a>
                        <a href="https://github.com/Samurrocha/GO-PLANEJE-FRONTEND" target="_blank">
                            Repositorio do Projeto
                        </a>
                    </div>
                </div>
                <div className='project' id='project2' style={projecStyle == 'project2Expanded' ? { position: 'absolute', justifySelf: 'center', width: '50%', transform: 'scale(1.1)' } : {}} onClick={(e) => handleClick(e.currentTarget.id)}>
                    <div className='projectMedia' id='project2' style={projecStyle == 'project2Expanded' ? { transform: 'scale(1.1)' } : {}}>
                    </div>
                    <h2>Project 2</h2>
                    <p>Description of project 2</p>
                </div>
                <div className='project' id='project3' style={projecStyle == 'project3Expanded' ? { position: 'absolute', justifySelf: 'center', width: '50%', transform: 'scale(1.1)' } : {}} onClick={(e) => handleClick(e.currentTarget.id)}>
                    <div className='projectMedia' id='project3' style={projecStyle == 'project3Expanded' ? { transform: 'scale(1.1)' } : {}}>
                    </div>
                    <h2>Project 3</h2>
                    <p>Description of project 3</p>
                </div>
            </div>
        </div>
    )
}