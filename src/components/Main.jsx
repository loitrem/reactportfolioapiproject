import React, {useContext, useEffect} from 'react'
import { AppContext } from '../context/mainContext';
import erik from '../images/erik3.png'
import Typed from 'typed.js'
import backgroundImg from '../images/sepic2.jpg'
import coding from '../images/coding.png'

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

                                <div className="bioDesc">{'> '}<span ref={typeVar}></span></div>
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
                <div className="fillerWrapper">
                    {/* bio start */}
                    <div className="filler" style={{ 
                    backgroundImage: `url('${backgroundImg}')`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'none',
                    backgroundSize: 'cover',
                    }}>
                        {/* <img src={coding} alt="" className="coding" /> */}
                    {/* bio end */}
                    </div>
                {/* bio wrapper end */}
                </div>
            {/* main end */}
            </div>
        {/* main wrapper end */}
        </div>
    )
}

export default Main