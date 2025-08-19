import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa6"
import '../styles/components/contacts.css'


export default function Contacts() {



    return (
        <>
            <div className="contact-container">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=samuel.rrocha12@gmail.com"><FaEnvelope size={20} color="white"/></a>
                <a href="https://www.linkedin.com/in/samuel-rodrigues-lima/" target="_blank" rel="Linkedin"><FaLinkedin size={20} color="white"/></a>
                <a href="http://github.com/samurrocha" target="_blank" rel="GitHub"> <FaGithub size={20} color="white"/> </a>
                <a href="https://wa.me/5561994567819" target="_blank" rel="Phone"> <FaPhone size={20} color="white"/> </a>
            </div>
            
        </>
    )
}