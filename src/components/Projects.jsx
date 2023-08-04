import React from 'react'
import { motion } from "framer-motion"
import {useContext} from 'react'
import { AppContext } from '../context/mainContext';
import alien from '../images/alien.jpg'
import atm from '../images/atm.jpg'
import jungle from '../images/jungle.jpg'
import rpg from '../images/rpg.jpg'
import axios from 'axios';

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
};

let projectInfo = [{
    name: 'reactgroupretailproject',
    displayName: 'Retail Mockup',
    img: jungle
},{
    name: 'week6project',
    displayName: 'Turn based RPG game',
    img: rpg
},{
    name: 'saveTheUniverseGame',
    displayName: 'Alien Invasion',
    img: alien
},{
    name: 'atmHomework',
    displayName: 'ATM Mockup',
    img: atm
}]

function Projects() {

    let {gitHubData, setGitHubData}=useContext(AppContext);

    console.log('GITHUBDATA', gitHubData);

    let displayName = '';
    let projectImg = null;

    const getDateData = async() => {
        let res = await axios.get('https://api.github.com/users/loitrem/repos?per_page=100&sort=created', {
                method: "GET",
                headers: {
                    'Authorization': apikeys.REACT_APP_GITHUB_API_KEY,
                }
            });
        return (res.data[0].comit.author.date);
    }

    return (
        <motion.div className="projectsWrapper" initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>

            <motion.div  variants={itemVariants} className="projects">

                {gitHubData.map((current, i)=>{
                    for (let a = 0;a<projectInfo.length;a++){
                        if (current===projectInfo[a].name){
                                displayName = projectInfo[a].displayName;
                                projectImg = projectInfo[a].img;
                        }
                    }

                    <motion.div key={i}  variants={itemVariants} className="projectCell">
                        <motion.div  variants={itemVariants} className="projectCellLeft">
                            <motion.div  variants={itemVariants} className="projectCellScreenShot">
                                <img src={projectImg} alt="" className="projectScreenshotImg" />
                            </motion.div>
                        </motion.div>
                        <motion.div  variants={itemVariants} className="projectCellRight">
                            <motion.div  variants={itemVariants} className="projectName">{displayName}</motion.div>
                            <motion.div  variants={itemVariants} className="projectDesc">{gitHubData.description}</motion.div>
                            <motion.div  variants={itemVariants} className="projectModified">Last Modified: {getDateData()}</motion.div>
                            <motion.div  variants={itemVariants} className="projectGithubLink">
                                <a href={current.html_url} className="projectGit">Check out the repo</a>
                            </motion.div>
                            <motion.div  variants={itemVariants} className="projectLiveLink">
                                <a href={current.homepage} className="projectLive">Test it out</a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                })}
            </motion.div>
        </motion.div>
    )
}

export default Projects