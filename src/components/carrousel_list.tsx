import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/components/carrousel_list.css';

type CarrouselListProps = {
  projectsImages: string[]; // recebe um array de imagens
};

export default function CarrouselList({ projectsImages }: CarrouselListProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const setNextProject = () => {

    setCurrentIndex((currentIndex + 1) % projectsImages.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsImages.length);
    }, 5000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [projectsImages.length]);

  return (
    <div id="presentationContainer" onClick={setNextProject}>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img src={projectsImages[currentIndex]} className='projectImage' />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
