import '../styles/components/Projects.css'

export default function Projects() {

    return (
        <div className='projects' id='projects'>
            <h1>My Projects</h1>
            <div className='projectContainer'>
                <div className='project'>
                    <div className='projectMedia'>
                        a
                    </div>
                    <h2>Project 1</h2>
                    <p>Description of project 1</p>
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