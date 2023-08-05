import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import {useContext, useState} from 'react'
import { AppContext } from '../context/mainContext';
import alien from '../images/alien.jpg'
import atm from '../images/atm.jpg'
import jungle from '../images/jungle.jpg'
import rpg from '../images/rpg.jpg'
import bgImg from '../images/bg2.jpg'
import { useNavigate } from 'react-router-dom'

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
};

function Projects(props) {

    const navigate = useNavigate();

    // let {gitHubData, setGitHubData}=useContext(AppContext);

    // console.log('GITHUBDATA', gitHubData);

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
    
    // useEffect(()=>{

    // },[])


    // if (gitHubData){
    //     for (let a = 0;a<projectInfo.length;a++){   
    //         gitHubData.map((current, i)=>{
    //             if (current.name===projectInfo[a].name){
    //                 projectInfo[a].desc = current.description;
    //                 projectInfo[a].html = current.html_url;
    //                 projectInfo[a].homepage = current.homepage;
    //             } 
    //         })
    
    //     }  
    // }

    console.log('||||||||||||||||||||||',props.commitData);
    return (
        <motion.div className="projectsWrapper" initial="hidden"
            style={{backgroundImage: `url(${bgImg})`, 
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'}}
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
            <motion.div  variants={itemVariants} className='backgroundTop'>
                <motion.div  variants={itemVariants} className="projects">
                    <motion.div variants={itemVariants} className="projectCell">
                        <motion.div  variants={itemVariants} className="projectCellLeft">
                            <motion.div  variants={itemVariants} className="projectCellScreenShot">
                                <img src={projectInfo[0].img} alt="" className="projectScreenshotImg" />
                            </motion.div>
                        </motion.div>
                        <motion.div  variants={itemVariants} className="projectCellRight">
                            <motion.div  variants={itemVariants} className="projectName">{props.projectInfo[0].displayName}</motion.div>
                            <motion.div  variants={itemVariants} className="projectDesc">{props.projectInfo[0].desc}</motion.div>
                            <motion.div  variants={itemVariants} className="projectGithubLink" onClick={()=>{
                                {window.location.href =props.projectInfo[0].html}
                                }}>Check out the repo
                            </motion.div>
                            <motion.div  variants={itemVariants} className="projectLiveLink" onClick={()=>{
                                {window.location.href =props.projectInfo[0].homepage}
                                }}>Try it out
                            </motion.div>
                        </motion.div>
                    </motion.div>  

                    <motion.div variants={itemVariants} className="projectCell">
                        <motion.div  variants={itemVariants} className="projectCellLeft">
                            <motion.div  variants={itemVariants} className="projectCellScreenShot">
                                <img src={props.projectInfo[1].img} alt="" className="projectScreenshotImg" />
                            </motion.div>
                        </motion.div>
                        <motion.div  variants={itemVariants} className="projectCellRight">
                            <motion.div  variants={itemVariants} className="projectName">{props.projectInfo[1].displayName}</motion.div>
                            <motion.div  variants={itemVariants} className="projectDesc">{props.projectInfo[1].desc}</motion.div>
                            <motion.div  variants={itemVariants} className="projectGithubLink" onClick={()=>{
                                {window.location.href =props.projectInfo[1].html}
                                }}>Check out the repo
                            </motion.div>
                            <motion.div  variants={itemVariants} className="projectLiveLink" onClick={()=>{
                                {window.location.href =props.projectInfo[1].homepage}
                                }}>Try it out
                            </motion.div>
                        </motion.div>
                    </motion.div>  

                    <motion.div  variants={itemVariants} className="projectCell">
                        <motion.div  variants={itemVariants} className="projectCellLeft">
                            <motion.div  variants={itemVariants} className="projectCellScreenShot">
                                <img src={props.projectInfo[2].img} alt="" className="projectScreenshotImg" />
                            </motion.div>
                        </motion.div>
                        <motion.div  variants={itemVariants} className="projectCellRight">
                            <motion.div  variants={itemVariants} className="projectName">{props.projectInfo[2].displayName}</motion.div>
                            <motion.div  variants={itemVariants} className="projectDesc">{props.projectInfo[2].desc}</motion.div>
                            <motion.div  variants={itemVariants} className="projectGithubLink" onClick={()=>{
                                    {window.location.href =props.projectInfo[2].html}
                            }}>Check out the repo</motion.div>
                            <motion.div  variants={itemVariants} className="projectLiveLink" onClick={()=>{
                                    {window.location.href =props.projectInfo[2].homepage}
                            }}>Try it out</motion.div>
                        </motion.div>
                    </motion.div> 

                    <motion.div  variants={itemVariants} className="projectCell">
                        <motion.div  variants={itemVariants} className="projectCellLeft">
                            <motion.div  variants={itemVariants} className="projectCellScreenShot">
                                <img src={props.projectInfo[3].img} alt="" className="projectScreenshotImg" />
                            </motion.div>
                        </motion.div>
                        <motion.div  variants={itemVariants} className="projectCellRight">
                            <motion.div  variants={itemVariants} className="projectName">{props.projectInfo[3].displayName}</motion.div>
                            <motion.div className="projectDesc">props.commitData[0].commit.author.date</motion.div>
                            <motion.div  variants={itemVariants} className="projectDesc">{props.projectInfo[3].desc}</motion.div>
                            <motion.div  variants={itemVariants} className="projectGithubLink" onClick={()=>{
                                    {window.location.href =props.projectInfo[3].html}
                            }}>Check out the repo</motion.div>
                            <motion.div  variants={itemVariants} className="projectLiveLink" onClick={()=>{
                                    {window.location.href =props.projectInfo[3].homepage}
                            }}>Try it out</motion.div>
                        </motion.div>
                    </motion.div> 
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Projects