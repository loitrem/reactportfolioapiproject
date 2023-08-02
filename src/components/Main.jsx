import React, {useContext, useEffect} from 'react'
import { AppContext } from '../context/mainContext';
import erik from '../images/erik3.png'
import Typed from 'typed.js'

function Main(props) {
    let {setWeatherData}=useContext(AppContext);
    setWeatherData(props.weather)
    console.log('props',props);

    const typeVar = React.useRef(null);
    const descVar = React.useRef(null);

    useEffect(()=> {
        const typed = new Typed(typeVar.current, {
            strings: ["Hi, I'm Erik. " + "<br/><br/><span style='font-size: 20px'>" + " I am a software engineer from Pittsburgh, PA." + '</span>'],
            typeSpeed: 150,
            loop: false
        })

        return ()=>{
            typed.destroy();
        } ;

    }, []);



    return (
        // main wrapper start
        <div className="mainWrapper">
            {/* main start */}
            <div className="main">
                {/* main banner wrapper start */}
                <div className="mainBannerWrapper">
                    {/* main banner start */}
                    <div className="mainBanner">
                        {/* main banner left start */}
                        <div className="mainBannerLeft">
                            <div className="bioPage">

                                <div className="bioHello">{'> '}<span ref={typeVar}></span></div>
                                <div className="bioDesc">
                                    <span ref={descVar}></span>
                                </div>
                            </div>
                        {/* main banner left end */}
                        </div>
                        {/* main banner right start */}
                        <div className="mainBannerRight">
                            <div className="mainImg">
                                <div className="userImgWrapper">
                                    <img src={erik} alt="" className="userImg" />
                                </div>
                            </div>
                        
                        {/* main banner right end */}
                        </div>
                    {/* main banner end */}
                    </div>
                {/* main banner wrapper end */}
                </div>
                    
                {/* bio wrapper start */}
                <div className="bioWrapper">
                    {/* bio start */}
                    <div className="bio">
                        Bio
                    {/* bio end */}
                    </div>
                {/* bio wrapper end */}
                </div>
                {/* technologies wrapper start */}
                <div className="technologiesWrapper">
                    {/* technologies start */}
                    <div className="technologies">
                        technologies
                    {/* technologies end */}
                    </div>
                {/* technologies wrapper end */}
                </div>
                {/* projects wrapper start */}
                <div className="projectsWrapper">
                    {/* projects start */}
                    <div className="projects">
                        projects
                    {/* projects end */}
                    </div>
                {/* projects wrapper end */}
                </div>
                {/* footer wrapper start */}
                <div className="footerWrapper">
                    {/* footer start */}
                    <div className="footer">
                        footer
                    {/* footer end */}
                    </div>
                {/* footer wrapper end */}
                </div>
            {/* main end */}
            </div>
        {/* main wrapper end */}
        </div>
    )
}

export default Main