import React, {useContext, useEffect} from 'react'
import { AppContext } from '../context/mainContext';
import erik from '../images/erik3.png'
import Typed from 'typed.js'
import backgroundImg from '../images/sepic2.jpg'
import coding from '../images/coding.png'
import { motion } from "framer-motion"


const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
};

function Main(props) {
    let {setWeatherData}=useContext(AppContext);
    setWeatherData(props.weather)
    console.log('props',props);

    //typed.js dependency/library @ https://github.com/mattboldt/typed.js
    const typeVar = React.useRef(null);

    useEffect(()=> {

        //typed.js dependency/library @ https://github.com/mattboldt/typed.js
        const typed = new Typed(typeVar.current, {
            strings: ["Hi, I'm Erik. " + "<br/><br/><span style='font-size: 26px'>" + " I am a software engineer from Pittsburgh, PA." + '</span>'],
            typeSpeed: 100,
            loop: false
        })

        return ()=>{
            typed.destroy();
        } ;

    }, []);

    return (
        // main wrapper start
        <motion.div initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }} className="mainWrapper page">
            {/* main start */}
            <motion.div  variants={itemVariants}  className="main">
                {/* main banner wrapper start */}
                <motion.div  variants={itemVariants}  className="mainBannerWrapper">
                    {/* main banner start */}
                    <motion.div  variants={itemVariants}  className="mainBanner">
                        {/* main banner left start */}
                        <motion.div  variants={itemVariants}  className="mainBannerLeft">
                            <motion.div  variants={itemVariants}  className="bioPage">

                                <motion.div  variants={itemVariants}  className="bioDesc">{'> '}<span ref={typeVar}></span></motion.div>
                            </motion.div>
                        {/* main banner left end */}
                        </motion.div>
                        {/* main banner right start */}
                        <motion.div  variants={itemVariants}  className="mainBannerRight">
                            <motion.div  variants={itemVariants}  className="mainImg">
                                <motion.div  variants={itemVariants}  className="userImgWrapper">
                                    <img src={erik} alt="" className="userImg" />
                                </motion.div>
                            </motion.div>
                        
                        {/* main banner right end */}
                        </motion.div>
                    {/* main banner end */}
                    </motion.div>
                {/* main banner wrapper end */}
                </motion.div>
                    
                {/* filler wrapper start */}
                <motion.div  variants={itemVariants}  className="fillerWrapper">
                    {/* filler start */}
                    <motion.div  variants={itemVariants}  className="filler" style={{ 
                    backgroundImage: `url('${backgroundImg}')`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'none',
                    backgroundSize: 'cover',
                    }}>

                    {/* filler end */}
                    </motion.div>
                {/* filler wrapper end */}
                </motion.div>
            {/* main end */}
            </motion.div>
        {/* main wrapper end */}
        </motion.div>
    )
}

export default Main