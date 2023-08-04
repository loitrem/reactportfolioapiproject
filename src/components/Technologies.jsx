import React from 'react'
import javascriptImg from '../images/javascript.png'
import reactImg from '../images/react.png'
import cssImg from '../images/css.png'
import htmlImg from '../images/html.png'
import javaImg from '../images/java.png'
import nodeImg from '../images/node.png'
import phpImg from '../images/php.png'
import sqlImg from '../images/sql.png'
import bgImg from '../images/bg2.jpg'
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
};

function Technologies() {
    
return (

<motion.div className='techno' initial="hidden"
    animate="visible"
    exit={{ opacity: 0, transition: { duration: 1 } }}
    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
    <motion.div className="technologyWrapper" style={{backgroundImage: `url(${bgImg})`, 
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'}}>
        <motion.div  variants={itemVariants} className="backgroundDarker">
        <motion.div  variants={itemVariants} className="technology">
            <motion.div  variants={itemVariants} className="techCell topCell">
                <motion.div  variants={itemVariants} className="techCellLeft">
                    <img className='techReactImg' src={reactImg} alt="" />
                </motion.div>
                <motion.div  variants={itemVariants} className="techCellRight">React</motion.div>
            </motion.div>

            <motion.div  variants={itemVariants} className="techCell">
                <motion.div  variants={itemVariants} className="techCellLeft">
                    <img className='techJsImg' src={javascriptImg} alt="" />
                </motion.div>
                <motion.div  variants={itemVariants} className="techCellRight">JavaScript</motion.div>
            </motion.div>

            <motion.div  variants={itemVariants} className="techCell">
                <motion.div  variants={itemVariants} className="techCellLeft">
                    <img className='techHtmlImg' src={htmlImg} alt="" />
                </motion.div>
                <motion.div  variants={itemVariants} className="techCellRight">Html</motion.div>
            </motion.div>

            <motion.div  variants={itemVariants} className="techCell">
                <motion.div  variants={itemVariants} className="techCellLeft">
                    <img className='techCssImg' src={cssImg} alt="" />
                </motion.div>
                <motion.div  variants={itemVariants} className="techCellRight">Css</motion.div>
            </motion.div>

            <motion.div  variants={itemVariants} className="techCell">
                <motion.div  variants={itemVariants} className="techCellLeft">
                    <img className='techJavaImg' src={javaImg} alt="" />
                </motion.div>
                <motion.div  variants={itemVariants} className="techCellRight">Java</motion.div>
            </motion.div>

            <motion.div  variants={itemVariants} className="techCell">
                <motion.div  variants={itemVariants} className="techCellLeft">
                    <img className='techPhpImg' src={phpImg} alt="" />
                </motion.div>
                <motion.div  variants={itemVariants} className="techCellRight">Php</motion.div>
            </motion.div>

            <motion.div  variants={itemVariants} className="techCell">
                <motion.div  variants={itemVariants} className="techCellLeft">
                    <img className='techSqlImg' src={sqlImg} alt="" />
                </motion.div>
                <motion.div  variants={itemVariants} className="techCellRight">Sql</motion.div>
            </motion.div>

            <motion.div  variants={itemVariants} className="techCell">
                <motion.div  variants={itemVariants} className="techCellLeft">
                    <img className='techNodeImg' src={nodeImg} alt="" />
                </motion.div>
                <motion.div  variants={itemVariants} className="techCellRight">Node.js</motion.div>
            </motion.div>
            </motion.div>
        </motion.div>
    </motion.div>
    </motion.div>
  )
}

export default Technologies