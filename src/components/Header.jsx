import logo from '../images/logo.png'
import Weather from './Weather';
import Nav from './Nav';
import React, {useContext, useState, useEffect} from 'react'
import { AppContext } from '../context/mainContext';

function Header() {
    let {weatherData, setWeatherData}=useContext(AppContext);
    const [currentWeather, setCurrentWeather]=useState(null)

    useEffect(() => {

        // Update session storage
        if (weatherData){
            localStorage.setItem("weatherData", JSON.stringify(weatherData));
        }
        

        if (!weatherData){
            setCurrentWeather(JSON.parse(localStorage.getItem("weatherData")));
            setWeatherData(JSON.parse(localStorage.getItem("weatherData")));
        }
    }, []);

    return (
        <div className="headerWrapper">
            <div className="headerTop"><Weather /></div>
            <div className="header">
                <div className="headerBottom">
                    <div className="headerLeft">
                        <div className="headerNavWrapper">
                            <Nav />
                        </div>
                    </div>
                    <div className="headerRight">
                        <div className="contactMe">
                            <div className="const">{"const "}</div>
                            <div className="userInfo"> {"UserInfo"}</div>
                            <div className="equals">{"="}</div>
                            <div className="bracket">{"{"}</div>
                            <div className="emailLink" onClick={()=>{
                                window.location = 'mailto:ekowalski1982@gmail.com'
                            }}>
                                <div className="objItem">{" Email:"}</div>
                                <div className="websiteLink">{" 'ekowalski1982@gmail.com',"}</div>
                            </div>
                            <div className="website"> </div> 
                            <div className="objItem">{" Website:"}</div> 
                            <div><a href="http://loitrem.tplinkdns.com/perscholas/" className="websiteLink">'loitrem.com'</a></div>
                            <div className="bracket">{"}"}</div>
                            <div>;</div> 
                        </div>  
                    </div>         
                </div>              
            </div>
        </div>
    )
}

export default Header