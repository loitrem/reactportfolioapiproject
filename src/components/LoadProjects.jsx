import React from 'react'
import {useContext, useEffect, useState} from 'react'
import { AppContext } from '../context/mainContext';
import { calcLength, motion } from "framer-motion"
import alien from '../images/alien.jpg'
import atm from '../images/atm.jpg'
import jungle from '../images/jungle.jpg'
import rpg from '../images/rpg.jpg'
import Projects from './Projects';
import axios from 'axios';
import apikeys from '../models/apikeys.js'

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
};


function LoadProjects() {

    console.log('*************************************************************************************************************');
    console.log('LOADPROJECTS');
    console.log('*************************************************************************************************************');

    let {gitHubData, setGitHubData}=useContext(AppContext);


    useEffect(() => {

        // Update session storage
        if (gitHubData){
            localStorage.setItem("gitHubData", JSON.stringify(gitHubData));
            console.log('LOCAL STORAGE INFO GETTING = '. localStorage,'---', gitHubData);
        }
        

        if (!gitHubData){
            setGitHubData(JSON.parse(localStorage.getItem("gitHubData")));
        }
    }, []);

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

    let repoData = [];

    const getRepoData = async(repo) => {
        let res = await axios.get(`https://api.github.com/repos/loitrem/${repo}`, {
            method: "GET",
            headers: {
                'Authorization': apikeys.REACT_APP_GITHUB_API_KEY,
            }
        });
        repoData.push(res.data)
    }

    if (gitHubData){
        for (let a = 0;a<projectInfo.length;a++){   
            gitHubData.map((current, i)=>{
                if (current.name===projectInfo[a].name){
                    projectInfo[a].desc = current.description;
                    projectInfo[a].html = current.html_url;
                    projectInfo[a].homepage = current.homepage;

                    console.log('NUMBER OF LOOPS = ', i, current.name);

                    getRepoData(current.name)
                } 
            })
    
        }  
    } 

    return (
    <motion.div className="projectsWrapper" initial="hidden"
    animate="visible"
    exit={{ opacity: 0, transition: { duration: 1 } }}
    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>

        <Projects repoData={repoData} projectInfo={projectInfo}/>

    </motion.div>
    )
    
}

export default LoadProjects