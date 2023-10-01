import { motion } from "framer-motion"
import alien from '../images/alien.jpg'
import atm from '../images/atm.jpg'
import jungle from '../images/jungle.jpg'
import rpg from '../images/rpg.jpg'
import bgImg from '../images/bg2.jpg'
import git from '../images/git.png'
import warthunder from '../images/warthunder.png'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
};

function Projects(props) {

    const navigate = useNavigate();

    let projectInfo = [{
        name: 'reactgroupretailproject',
        displayName: 'Retail Mockup',
        img: jungle
    },{
        name: 'week6project',
        displayName: 'Turn based RPG game',
        img: rpg
    },{
        name: 'week4Day2Homework',
        displayName: 'War Thunder Website Mockup',
        img: warthunder
    },{
        name: 'gitSiteMockup',
        displayName: 'Git Website Mockup',
        img: git
    },{
        name: 'saveTheUniverseGame',
        displayName: 'Alien Invasion',
        img: alien
    },{
        name: 'atmHomework',
        displayName: 'ATM Mockup',
        img: atm
    }]  

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
                            <motion.div  variants={itemVariants} className="projectDesc">{props.projectInfo[3].desc}</motion.div>
                            <motion.div  variants={itemVariants} className="projectGithubLink" onClick={()=>{
                                    {window.location.href =props.projectInfo[3].html}
                            }}>Check out the repo</motion.div>
                            <motion.div  variants={itemVariants} className="projectLiveLink" onClick={()=>{
                                    {window.location.href =props.projectInfo[3].homepage}
                            }}>Try it out</motion.div>
                        </motion.div>
                    </motion.div> 

                    <motion.div  variants={itemVariants} className="projectCell">
                        <motion.div  variants={itemVariants} className="projectCellLeft">
                            <motion.div  variants={itemVariants} className="projectCellScreenShot">
                                <img src={props.projectInfo[4].img} alt="" className="projectScreenshotImg" />
                            </motion.div>
                        </motion.div>
                        <motion.div  variants={itemVariants} className="projectCellRight">
                            <motion.div  variants={itemVariants} className="projectName">{props.projectInfo[4].displayName}</motion.div>
                            <motion.div  variants={itemVariants} className="projectDesc">{props.projectInfo[4].desc}</motion.div>
                            <motion.div  variants={itemVariants} className="projectGithubLink" onClick={()=>{
                                    {window.location.href =props.projectInfo[4].html}
                            }}>Check out the repo</motion.div>
                            <motion.div  variants={itemVariants} className="projectLiveLink" onClick={()=>{
                                    {window.location.href =props.projectInfo[4].homepage}
                            }}>Try it out</motion.div>
                        </motion.div>
                    </motion.div> 

                    <motion.div  variants={itemVariants} className="projectCell">
                        <motion.div  variants={itemVariants} className="projectCellLeft">
                            <motion.div  variants={itemVariants} className="projectCellScreenShot">
                                <img src={props.projectInfo[5].img} alt="" className="projectScreenshotImg" />
                            </motion.div>
                        </motion.div>
                        <motion.div  variants={itemVariants} className="projectCellRight">
                            <motion.div  variants={itemVariants} className="projectName">{props.projectInfo[5].displayName}</motion.div>
                            <motion.div  variants={itemVariants} className="projectDesc">{props.projectInfo[5].desc}</motion.div>
                            <motion.div  variants={itemVariants} className="projectGithubLink" onClick={()=>{
                                    {window.location.href =props.projectInfo[5].html}
                            }}>Check out the repo</motion.div>
                            <motion.div  variants={itemVariants} className="projectLiveLink" onClick={()=>{
                                    {window.location.href =props.projectInfo[5].homepage}
                            }}>Try it out</motion.div>
                        </motion.div>
                    </motion.div> 

                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Projects