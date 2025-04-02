import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"; // Material Design
import '../styles/components/carrousel_list.css';

export default function CarrouselList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    {
      projectName: "SisTarefas",
      projectDescription: "kdmkasdasdasdasdasdsadasdasd"

    },

    {
      projectName: "RanchApp",
      projectDescription: "saaaaaaaaaaaaaaaaaaaaaaaaaa"
    },

    {
      projectName: "TransactonSys",
      projectDescription: "saaaaaaaaaaaaaaaaaaaaaaaaaa"
    }

  ];

  const setNextProject = () => {

    setCurrentIndex((currentIndex + 1) % projects.length)
  }

  const setBeforeProject = () => {

    let beforeProject = (currentIndex - 1)

    if (beforeProject < 0) {
      beforeProject = projects.length - 1
    }

    setCurrentIndex(beforeProject)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 10000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [projects.length]);

  return (
    <div id="presentationContainer">
      <button onClick={setBeforeProject} className='passButton'>
        <MdNavigateBefore size={40}/>
      </button>
      <div id='project'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <h2>
              {projects[currentIndex].projectName}
            </h2>

            <div className='body'>
              {projects[currentIndex].projectDescription}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button onClick={setNextProject} className='passButton'>
        <MdNavigateNext size={35}/>
      </button>

    </div>
  );
}
