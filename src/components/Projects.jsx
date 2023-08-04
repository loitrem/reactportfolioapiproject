import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import {useContext, useState} from 'react'
import { AppContext } from '../context/mainContext';
import alien from '../images/alien.jpg'
import atm from '../images/atm.jpg'
import jungle from '../images/jungle.jpg'
import rpg from '../images/rpg.jpg'
import axios from 'axios';
import apikeys from '../models/apikeys.js'

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
};

function Projects() 
{

    let [newGitData, setNewGitData]=useState(null)
    let {gitHubData, setGitHubData}=useContext(AppContext);

    console.log('GITHUBDATA', gitHubData);

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
    


    if (gitHubData){
        for (let a = 0;a<projectInfo.length;a++){   
            gitHubData.map((current, i)=>{
                if (current.name===projectInfo[a].name){
                    projectInfo[a].desc = current.description;
                    projectInfo[a].html = current.html_url;
                    projectInfo[a].homepage = current.homepage;
                } 
            })
        }
    }

    console.log('||||||||||||||||||||||',projectInfo);
    return (
        <motion.div className="projectsWrapper" initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
            <motion.div  variants={itemVariants} className="projects">

                {gitHubData? projectInfo.map((current)=>{
                        console.log('CURRENT = ', current);
                    <motion.div  variants={itemVariants} className="projectCell">
                        <motion.div  variants={itemVariants} className="projectCellLeft">
                            <motion.div  variants={itemVariants} className="projectCellScreenShot">
                                <img src={current.img} alt="" className="projectScreenshotImg" />
                            </motion.div>
                        </motion.div>
                        <motion.div  variants={itemVariants} className="projectCellRight">
                            <motion.div  variants={itemVariants} className="projectName">{current.displayName}</motion.div>
                            <motion.div  variants={itemVariants} className="projectDesc">{current.desc}</motion.div>
                            <motion.div  variants={itemVariants} className="projectModified">Last Modified:</motion.div>
                            <motion.div  variants={itemVariants} className="projectGithubLink">
                                <a href={current.html_url} className="projectGit">Check out the repo</a>
                            </motion.div>
                            <motion.div  variants={itemVariants} className="projectLiveLink">
                                <a href={current.homepage} className="projectLive">Test it out</a>
                            </motion.div>
                        </motion.div>
                    </motion.div>                  
                }):null}
            </motion.div>
        </motion.div>
    )
}

export default Projects