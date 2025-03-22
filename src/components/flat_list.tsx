import { Link } from 'react-router-dom'; // Importando Link
import { FaCode, FaMobileAlt, FaBrain, FaCloud } from 'react-icons/fa';
import '../styles/components/flat_list.css';

export default function FlatList() {
    return (
            <div id='flatList'>
                <div className='element'>
                    <FaCode size={50} />
                    <div className='elementContent'>
                        <h2>Web Development</h2>
                        <p>
                            I design and build dynamic, user-friendly web applications that not only look great but also deliver robust performance.
                            From front-end interfaces using modern frameworks like React or Angular to back-end systems powered by Node.js, Python,
                            or PHP, my work spans the full web development lifecycle. I focus on responsive design, accessibility, and optimizing user
                            experiences across all devices.
                        </p>
                        <Link to="/" className='link'>Visite outra página</Link> {/* Link para uma página interna */}
                    </div>
                </div>

                <div className='element'>
                    <FaMobileAlt size={50} />
                    <div className='elementContent'>
                        <h2>Mobile Development</h2>
                        <p>
                            I create innovative mobile applications tailored for both iOS and Android platforms. Whether using native development tools or
                            cross-platform frameworks like Flutter or React Native, my goal is to deliver intuitive apps that offer seamless user experiences.
                            My process involves rigorous UX/UI design, performance optimization, and thorough testing to ensure that every app meets the highest
                            standards of functionality and aesthetics.
                        </p>
                        <Link to="/teste" className='link'>Visite outra página</Link> {/* Link para uma página interna */}
                    </div>
                </div>

                <div className='element'>
                    <FaBrain size={50} />
                    <div className='elementContent'>
                        <h2>Data Science & AI:</h2>
                        <p>
                            I harness the power of data to uncover insights and drive intelligent decision-making. By leveraging advanced data analysis, statistical modeling,
                            and machine learning algorithms, I turn raw data into actionable strategies. From building predictive models to developing AI-driven solutions,
                            my work helps transform complex datasets into clear, impactful results that can optimize business processes and fuel innovation.
                        </p>
                        <Link to="/teste" className='link'>Visite outra página</Link> {/* Link para uma página interna */}
                    </div>
                </div>

                <div className='element'>
                    <FaCloud size={50} />
                    <div className='elementContent'>
                        <h2>Cloud & DevOps</h2>
                        <p>
                            I streamline the deployment and management of applications by integrating cloud computing and DevOps practices. With expertise in cloud platforms such as AWS,
                            Azure, or Google Cloud, I architect scalable, secure infrastructures that support continuous integration and continuous deployment (CI/CD).
                            My approach emphasizes automation, containerization (with tools like Docker and Kubernetes), and monitoring, ensuring that systems are both resilient and
                            agile in today’s fast-paced digital environment.
                        </p>
                        <Link to="/teste" className='link'>Visite outra página</Link> {/* Link para uma página interna */}
                    </div>
                </div>

            </div>

    )
}
