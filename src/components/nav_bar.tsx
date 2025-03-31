import { Link } from "react-scroll" 
import '../styles/components/nav_bar.css'

export default function NavBar() {
    return (
        <>
            <nav className='nav-bar'>
                <button className="option">
                    <Link to="home" className="link" smooth={true} duration={500}>HOME</Link>
                </button>
                <button className="option">
                    <Link to="projects" className="link" smooth={true} duration={500}>ABOUT</Link>
                </button>
                <button className="option">
                    <Link to="experiences" className="link" smooth={true} duration={500}>SKILLS</Link>
                </button>
            </nav>
        </>
    )
}