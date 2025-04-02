import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa6"
import '../styles/components/contacts.css'


export default function Contacts() {



    return (
        <>
            <div className="contact-container">
                <a href="mailto:seuemail@example.com" target="_blank" rel="Email"><FaEnvelope size={20} color="white"/></a>
                <a href="https://www.linkedin.com/in/samuel-rodrigues-lima/" target="_blank" rel="Linkedin"><FaLinkedin size={20} color="white"/></a>
                <a href="http://github.com/samurrocha" target="_blank" rel="GitHub"> <FaGithub size={20} color="white"/> </a>
                <a href="https://wa.me/5511999999999" target="_blank" rel="Phone"> <FaPhone size={20} color="white"/> </a>
            </div>

        </>
    )
}