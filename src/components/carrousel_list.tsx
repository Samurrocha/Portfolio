import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/components/carrousel_list.css';

type CarrouselListProps = {
    projectImages: string[]; // recebe um array de imagens
};

export default function CarrouselList({ projectImages }: CarrouselListProps) {
    const [currentIndex, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % projectImages.length);


        }, 5000)

        return () => clearInterval(interval);

    }, [])

    return (
        <div id="presentationContainer" onClick={() => setCurrentImage((currentIndex) => (currentIndex + 1) % projectImages.length)}>

            {/* <div key={currentIndex}>
                <img src={projectsImages[currentIndex]} alt='image' className='projectImage' />
            </div> */}

            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={projectImages[currentIndex]} className='projectImage' />
                </motion.div>
            </AnimatePresence>
        </div >
    );
}
