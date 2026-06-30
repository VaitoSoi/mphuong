import { motion, type Variants } from 'framer-motion';
import React from 'react';

interface PageWrapperProps {
    children: React.ReactNode;
}

// Khai báo rõ kiểu dữ liệu ': Variants'
const PaperVariants: Variants = {
    initial: {
        y: 30,
        opacity: 0,
        scale: 0.97,
        rotateZ: -1.5,
    },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateZ: 0,
        transition: {
            type: 'spring',
            stiffness: 260,
            damping: 25,
            mass: 1,
        }
    },
    exit: {
        y: -30,
        opacity: 0,
        scale: 0.97,
        rotateZ: 1.5,
        transition: {
            duration: 0.3,
            ease: 'easeIn',
        }
    }
};

const PaperWrapper: React.FC<PageWrapperProps> = ({ children }) => {
    return (
        <motion.div
            variants={PaperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ transformOrigin: 'center center' }}
        >
            {children}
        </motion.div>
    );
};

export default PaperWrapper;