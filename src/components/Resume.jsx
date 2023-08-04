import React from 'react'
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import PdfViewer from './PdfViewer';
import resume from '../files/resume.pdf'
import bgImg from '../images/bg2.jpg'

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

function Resume() {
  return (
    <motion.div className='resumeWrapper' style={{backgroundImage: `url(${bgImg})`, 
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'}} initial="hidden"
    animate="visible"
    exit={{ opacity: 0, transition: { duration: 1 } }}
    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
        <motion.div  variants={itemVariants} className="backgroundDarker">
      <motion.div className='resumeDisplay'   variants={itemVariants} >
      <PdfViewer document={resume} />
      </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Resume
