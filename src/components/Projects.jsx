import React from 'react'
import { motion } from "framer-motion"
import {useContext} from 'react'
import { AppContext } from '../context/mainContext';
import alien from '../images/alien.jpg'
import atm from '../images/atm.jpg'
import jungle from '../images/jungle.jpg'
import rpg from '../images/rpg.jpg'

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
};

let projectInfo = [{
    name: 'reactgroupretailproject',
    displayName: 'Retail Mockup'
},{
    name: 'week6project',
    displayName: 'Turn based RPG game'
},{
    name: 'saveTheUniverseGame',
    displayName: 'Alien Invasion'
},{
    name: 'atmHomework',
    displayName: 'ATM Mockup'
}]

function Projects() {

    let {gitHubData, setGitHubData}=useContext(AppContext);

    console.log('GITHUBDATA', gitHubData);

    return (
        <motion.div className="projectsWrapper" initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>

            <motion.div  variants={itemVariants} className="projects">

                <div className="projectCell">
                    div.
                </div>

            </motion.div>
        </motion.div>
    )
}

export default Projects