import { motion } from "framer-motion"
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
    <motion.div className="resumeWrapper" style={{backgroundImage: `url(${bgImg})`, 
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'}}>
      <div className="darkerbg">
          {navigator.pdfViewerEnabled ? <object className="resumeDisplay" data={resume} type="application/pdf" width="100%" height="100%"></object> :<div className='mobileWrapper'><div className='mobile'><a href={resume} className="downloadResumeMobile">Download Resume</a></div></div>}
      </div>
      
  </motion.div>
    
  )
}

export default Resume
