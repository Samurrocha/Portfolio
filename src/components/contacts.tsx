import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa6"
import '../styles/components/contacts.css'


export default function Contacts() {



    return (
        <>
            <div className="contact-container">
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaEnvelope size={20} color="white"/></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} color="white"/></a>
                <a href="http://github.com/samurrocha" target="_blank" rel="noopener noreferrer"> <FaGithub size={20} color="white"/> </a>
                <a href="http://" target="_blank" rel="noopener noreferrer"> <FaPhone size={20} color="white"/> </a>
            </div>

        </>
    )
}