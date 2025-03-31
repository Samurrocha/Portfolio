import '../styles/components/about.css'
import { FileText } from "lucide-react";
import pdfFile from '../assets/curriculo.pdf'

export default function About() {

    return (
        <div className='about' id='about'>
            <h1>About me</h1>

            <div className='resume animate-floating'>
                <h1>Resume</h1>
                <button>
                    <a href={pdfFile} target="_blank" rel="resume">
                        <FileText size={50} color="white" />
                    </a>
                </button>
            </div>
            <p>My journey in tech started early, and the thrill of solving problems with innovative solutions has always driven me.
                The more I explore new technologies, the more my passion for learning and growing in this field intensifies.
                Since 2022, I’ve been fully immersed in this work, constantly seeking new challenges and opportunities to expand my expertise.
                Currently, I focus on a few key technology stacks, with a primary focus on backend and frontend development, mobile development, AI and machine learning, cloud computing, and data science
            </p>


        </div>
    )
}