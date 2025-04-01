import { Link } from "react-scroll"
import '../styles/components/nav_bar.css'
import { useEffect, useState } from "react"

export default function NavBar() {

    const [visible, setVisible] = useState(false)
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = () => {
        setVisible(true)
        clearTimeout(timeoutId)

        timeoutId = setTimeout(() => {
            setVisible(false)
        }, 2000) // 2 seconds delay
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            clearTimeout(timeoutId)
        }
    }, [])



    return (
        <>
            {visible && (
                <nav className={`nav-bar ${visible ? 'visible' : ''}`}> {/* Aplica a classe visible */}
                    <button className="option">
                        <Link to="home" className="link" smooth={true} duration={500}>HOME</Link>
                    </button>
                    <button className="option">
                        <Link to="about" className="link" smooth={true} duration={500}>ABOUT</Link>
                    </button>
                    <button className="option">
                        <Link to="skills" className="link" smooth={true} duration={500}>SKILLS</Link>
                    </button>
                    <button className="option">
                        <Link to="projects" className="link" smooth={true} duration={500}>PROJECTS</Link>
                    </button>
                </nav>
            )}
        </>
    )
}