import { SiJavascript, SiTypescript, SiCss3, SiHtml5, SiReact, SiNextdotjs, SiAngular, SiTailwindcss, SiPython, SiNodedotjs, SiSpring, SiDjango, SiFastapi, SiExpress, SiMysql, SiPostgresql, SiMongodb, SiGit, SiGithub, SiKubernetes, SiDocker, SiAmazonwebservices, SiGooglecloud, SiExpo, SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiPandas, SiNumpy, SiScipy } from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { VscAzure } from 'react-icons/vsc';
import '../styles/components/skills.css'


export default function SkillsSection() {

    type Skill = {
        name: string;
        description: string;
        icon: React.ReactNode;
        highlight?: boolean; // A propriedade highlight é opcional
    };

    const skills: { [category: string]: { [subcategory: string]: Skill[] } } = {
        "Frontend": {
            " .": [
                { name: "HTML", description: "Markup language for web pages", icon: <SiHtml5 color='#E34F26' /> },
                { name: "CSS", description: "Style and layout of web pages", icon: <SiCss3 color='#1572B6' /> },
                { name: "JavaScript", description: "Programming language for the Web", icon: <SiJavascript color='#F7DF1E' /> },
                { name: "TypeScript", description: "Type safety of JavaScript", icon: <SiTypescript color='#3178C6' /> },
            ],
            "Frameworks": [
                { name: "React.js", description: "Library for building web interfaces", icon: <SiReact color='#61DAFB' />, highlight: true },
                { name: "Next.js", description: "Framework for server-rendered React apps", icon: <SiNextdotjs color='#000000' style={{backgroundColor:"white", borderRadius:"10em"}}/> },
                { name: "Angular", description: "Framework for server-rendered Angular apps", icon: <SiAngular color='#DD0031' /> },
                { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: <SiTailwindcss color='#06B6D4' /> },
            ]
        },
        "Backend": {
            "Linguagens": [
                { name: "Node.js", description: "JavaScript runtime for server-side", icon: <SiNodedotjs color='#339933' />, highlight: true },
                { name: "Java", description: "General-purpose, object-oriented programming language", icon: <FaJava color='#f8981d' />, highlight: true },
                { name: "Python", description: "High-level programming language for multiple domains", icon: <SiPython color='#3776AB' />, highlight: true }
            ],
            "Frameworks": [
                { name: "Express.js", description: "Minimal Node.js web framework", icon: <SiExpress color='#000000' style={{ background: "white", borderRadius: "10px", padding: "0.1em" }} /> },
                { name: "Spring", description: "Powerful framework for Java applications", icon: <SiSpring color='#6DB33F' /> },
                { name: "Django", description: "High-level Python web framework", icon: <SiDjango color='#092E20' /> },
                { name: "FastAPI", description: "Modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.", icon: <SiFastapi color='#009688' /> }
            ]
        },

        "Mobile": {
            "Frameworks": [
                { name: "React Native", description: "Framework for building native apps using React", icon: <SiReact color='#61DAFB' /> },
            ],

            "Technologies":[
                {name: "expo", description: "Framework for building React Native apps", icon: <SiExpo color='white' />},
            ]
        },
        "DataBase": {
            "SQL": [
                { name: "MySQL", description: "Relational database management system", icon: <SiMysql color='#4479A1' /> },
                { name: "PostgreSQL", description: "Advanced relational database", icon: <SiPostgresql color='#336791' /> }
            ],
            "NoSQL": [
                { name: "MongoDB", description: "NoSQL database for modern apps", icon: <SiMongodb color='#47A248' /> }
            ]
        },
        "Cloud & DevOps": {
            "DevOps": [
                { name: "Git", description: "Distributed version control system", icon: <SiGit color='#F05032' /> },
                { name: "GitHub", description: "Platform for hosting and managing Git repos", icon: <SiGithub color='black' style={{background:"white", borderRadius:"10em"}}/> },
                { name: "Docker", description: "Containerization platform", icon: <SiDocker color='#2496ED' /> },
                { name: "Kubernetes", description: "Container orchestration platform", icon: <SiKubernetes color='#326CE5' /> }
            ],
            "Cloud": [
                { name: "AWS", description: "Amazon Web Services cloud platform", icon: <SiAmazonwebservices color='#FF9900'/> },
                { name: "Google Cloud", description: "Google's cloud computing services", icon: <SiGooglecloud color='#4285F4'/> },
                { name: "Azure", description: "Microsoft cloud platform", icon: <VscAzure color='#0078D4'/>},
            ]
        },
        "AI & Data Science": {
            "AI": [
                { name: "TensorFlow", description: "Open-source library for machine learning", icon: <SiTensorflow color="#FF6F00" /> },
                { name: "PyTorch", description: "Open-source machine learning library", icon: <SiPytorch color="#EE4C2C" /> },
                { name: "Keras", description: "High-level neural networks API", icon: <SiKeras color="#D00000" /> },
                { name: "Scikit-learn", description: "Machine learning library for Python", icon: <SiScikitlearn color="#F7931E" /> },
            ],
            "Data Science": [
                { name: "Pandas", description: "Data manipulation and analysis library for Python", icon: <SiPandas color='#150458' style={{backgroundColor:"white", padding:"0.1em", borderRadius:"10em"}}/> },
                { name: "NumPy", description: "Library for numerical computations in Python", icon: <SiNumpy color='#013243' /> },
                { name: "SciPy", description: "Library for scientific and technical computing in Python", icon: <SiScipy color='#8CAAE6' /> }
            ]
        }
    };

    return (
        <div className="skills">
            <h2 className="skills-title">MY SKILLS</h2>
            <div className="skills-grid">
                {Object.entries(skills).map(([category, subcategories]) => (
                    <div key={category}>
                        <h3 className="skills-category">{category}</h3>
                        {Object.entries(subcategories).map(([subcategory, skillsList]) => (
                            <div key={subcategory} className="subcategory-container">
                                <h4 className="skills-subcategory">{subcategory}</h4>
                                <div className="skills-list">
                                    {skillsList.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className={`skill-card ${skill.highlight ? 'highlight' : ''}`}
                                        >
                                            <span className="skill-icon">{skill.icon}</span>
                                            <div>
                                                <h4 className="skill-name">{skill.name}</h4>
                                                <p className="skill-description">{skill.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </div>

    )
    
}
