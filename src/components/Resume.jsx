import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import PdfViewer from './PdfViewer';
import resume from '../files/resume.pdf'
import bgImg from '../images/bg2.jpg'
import React, {useContext, useState, useEffect} from 'react'
import { AppContext } from '../context/mainContext';

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

function Resume() {

  let {weatherData, setWeatherData}=useContext(AppContext);
  const [currentWeather, setCurrentWeather]=useState(null)

  useEffect(() => {

      // Update session storage
      if (weatherData){
          localStorage.setItem("weatherData", JSON.stringify(weatherData));
      }
      

      if (!weatherData){
          setCurrentWeather(JSON.parse(localStorage.getItem("weatherData")));
          setWeatherData(JSON.parse(localStorage.getItem("weatherData")));
      }
  }, []);
  
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
