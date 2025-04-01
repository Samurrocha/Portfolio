import '../styles/components/skills.css'
import { SiJavascript, SiTypescript, SiCss3, SiHtml5, SiReact, SiNextdotjs, SiAngular, SiTailwindcss, SiPython, SiNodedotjs, SiSpring, SiDjango, SiFastapi, SiExpress, SiMysql, SiPostgresql, SiMongodb, SiGit, SiGithub, SiKubernetes, SiDocker, SiAmazonwebservices, SiGooglecloud, SiKotlin, SiAndroid, SiApple, SiIos, SiExpo, SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiPandas, SiNumpy, SiScipy } from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { VscAzure, VscAzureDevops } from 'react-icons/vsc';

type Skill = {
    name: string;
    description: string;
    icon: React.ReactNode;
    highlight?: boolean; // A propriedade highlight é opcional
};

const SkillsSection = () => {
    const skills: { [category: string]: { [subcategory: string]: Skill[] } } = {
        Frontend: {
            " .": [
                { name: "HTML", description: "Markup language for web pages", icon: <SiHtml5 color='#E34F26' /> },
                { name: "CSS", description: "Style and layout of web pages", icon: <SiCss3 color='#1572B6' /> },
                { name: "JavaScript", description: "Programming language for the Web", icon: <SiJavascript color='yellow' /> },
                { name: "TypeScript", description: "Type safety of JavaScript", icon: <SiTypescript color='#3178C6' /> },
            ],
            Frameworks: [
                { name: "React.js", description: "Library for building web interfaces", icon: <SiReact color='#61DAFB' />, highlight: true },
                { name: "Next.js", description: "Framework for server-rendered React apps", icon: <SiNextdotjs color='#000000' /> },
                { name: "Angular", description: "Framework for server-rendered Angular apps", icon: <SiAngular color='#DD0031' /> },
                { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: <SiTailwindcss color='#06B6D4' /> },
            ]
        },
        Backend: {
            Linguagens: [
                { name: "Node.js", description: "JavaScript runtime for server-side", icon: <SiNodedotjs />, highlight: true },
                { name: "Java", description: "General-purpose, object-oriented programming language", icon: <FaJava color='#f8981d' />, highlight: true },
                { name: "Python", description: "High-level programming language for multiple domains", icon: <SiPython color='#3776AB' />, highlight: true }
            ],
            Frameworks: [
                { name: "Express.js", description: "Minimal Node.js web framework", icon: <SiExpress color='#000000' style={{ background: "white", borderRadius: "10px", padding: "0.1em" }} /> },
                { name: "Spring", description: "Powerful framework for Java applications", icon: <SiSpring color='#6DB33F' /> },
                { name: "Django", description: "High-level Python web framework", icon: <SiDjango color='#092E20' /> },
                { name: "FastAPI", description: "Modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.", icon: <SiFastapi color='#009688' /> }
            ]
        },

        "Mobile": {
            Frameworks: [
                {name: "expo", description: "Framework for building React Native apps", icon: <SiExpo color='#61DAFB' />},
                { name: "React Native", description: "Framework for building native apps using React", icon: <SiReact color='#61DAFB' /> },
                { name: "Flutter", description: "UI toolkit for building natively compiled applications", icon: "🦄" },
                { name: "Kotlin", description: "Modern programming language for Android", icon: <SiKotlin/> },
                { name: "Android", description: "Mobile operating system based on Linux", icon: <SiAndroid color='#3DDC84' /> },
                { name: "iOS", description: "Mobile operating system by Apple", icon: <SiIos/> },
                
            ]
        },
        "DataBase": {
            SQL: [
                { name: "MySQL", description: "Relational database management system", icon: <SiMysql color='#4479A1' /> },
                { name: "PostgreSQL", description: "Advanced relational database", icon: <SiPostgresql color='#336791' /> }
            ],
            NoSQL: [
                { name: "MongoDB", description: "NoSQL database for modern apps", icon: <SiMongodb color='#47A248' /> }
            ]
        },
        "Cloud & DevOps": {
            DevOps: [
                { name: "Git", description: "Distributed version control system", icon: <SiGit color='#F05032' /> },
                { name: "GitHub", description: "Platform for hosting and managing Git repos", icon: <SiGithub /> },
                { name: "Docker", description: "Containerization platform", icon: <SiDocker color='#2496ED'/> },
                { name: "Kubernetes", description: "Container orchestration platform", icon: <SiKubernetes color='#326CE5'/> }
            ],
            Cloud: [
                { name: "AWS", description: "Amazon Web Services cloud platform", icon: <SiAmazonwebservices/> },
                { name: "Azure", description: "Microsoft cloud platform", icon: <VscAzure/> },
                { name: "Google Cloud", description: "Google's cloud computing services", icon: <SiGooglecloud/> }
            ]
        },
        "AI & Data Science": {
            "AI": [
                { name: "TensorFlow", description: "Open-source library for machine learning", icon: <SiTensorflow/> },
                { name: "PyTorch", description: "Open-source machine learning library", icon: <SiPytorch/> },
                { name: "Keras", description: "High-level neural networks API", icon: <SiKeras/> },
                { name: "Scikit-learn", description: "Machine learning library for Python", icon: <SiScikitlearn/> },
            ],
            "Data Science":[
                { name: "Pandas", description: "Data manipulation and analysis library for Python", icon: <SiPandas/> },
                { name: "NumPy", description: "Library for numerical computations in Python", icon: <SiNumpy/> },
                {name:"SciPy", description:"Library for scientific and technical computing in Python", icon: <SiScipy/>}
            ]
        }
    };

    return (
        <div className="skills-container">
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

export default SkillsSection;
