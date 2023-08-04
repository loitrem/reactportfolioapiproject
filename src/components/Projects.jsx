import React from 'react'
import { motion } from "framer-motion"
import {useContext} from 'react'
import { AppContext } from '../contexts/mainContext';

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
};


function Projects() {

    let {gitHubData, setGitHubData}=useContext(AppContext);
    
    return (
        <motion.div className="projectsWrapper" initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>

            <motion.div  variants={itemVariants} className="projects">



            </motion.div>
        </motion.div>
    )
}

export default Projects