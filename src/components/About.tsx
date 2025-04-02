import { FileText } from "lucide-react";
import pdfFile from '../assets/curriculo.pdf'
import '../styles/components/About.css'
export default function About() {
    return (
        <div className='about' id='about'>
            <h1>About me</h1>

            <div className='resume animate-floating'>
                <h1>CV</h1>
                <button>
                    <a href={pdfFile} target="_blank" rel="resume">
                        <FileText size={50} color="white" />
                    </a>
                </button>
            </div>
            <p>
                I am Samuel, a versatile developer passionate about solving complex challenges with innovative solutions.
                My journey in tech started early, and since 2022, I have been fully immersed in exploring new technologies and expanding my expertise.
                I specialize in a full spectrum of technologies, from frontend development that captivates users to robust backend systems that power seamless experiences.
                I also build mobile applications that bring functionality to life and leverage artificial intelligence to drive smart solutions.
                Additionally, I harness cloud infrastructures for scalable, secure deployments and apply data science to extract meaningful insights.
                The thrill of learning and growing in this ever-evolving field drives me, and I am always seeking new challenges to push the boundaries of what’s possible. 
            </p>


        </div>
    )
}