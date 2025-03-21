import '../styles/components/menu_button.css'
import { FaBars } from 'react-icons/fa'
import { GrClose } from "react-icons/gr";
import { useState } from "react"

export default function MenuButton() {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        menu ? setMenu(false) : setMenu(true)
    }

    return (
        <>
            <div>

                {!menu ? (

                    <div id="menuButton">
                        <button onClick={toggleMenu}>
                            <FaBars size={20} />
                        </button >
                    </div>


                ) : (

                    <div className="menu">

                        <button id="closeMenuButton" onClick={toggleMenu}>
                            <GrClose size={20} />
                        </button>
                        <ul id='list'>
                            <li className='listElement'>
                                Home
                            </li>

                            <li className='listElement'>
                                KNOWLEDGES
                            </li>

                            <li className='listElement'>
                                PROJECTS
                            </li>
                            
                            <li className='listElement'>
                                CONTACTS
                            </li>

                            <li className='listElement'>
                                PROJECTS
                            </li>

                            <li className='listElement'>
                                PROFESSIONAL EXPERIENCES
                            </li>
                        </ul>

                    </div>
                )}

            </div>



        </>

    )

}