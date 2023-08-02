import React, {useContext} from 'react'
import { AppContext } from '../context/mainContext';

function Weather() {
    let {weatherData}=useContext(AppContext);
    console.log(weatherData);
    if (weatherData){
        return (
            <div className="weatherWrapper">
                <div className="mainWeather">
                    <div className="location">
                        <div className="locationText">Location: </div>
                        <div className="locationData">{weatherData.location.name}</div>
                    </div>
                    <div className="currentTemp">
                        <div className="currentTempText">Current Temp:</div> 
                        <div className="currentTempData">{weatherData.current.temp_f}°F</div>
                    </div>
                    <div className="weatherCondition">
                        <div className="weatherConditionText">Currently: </div>
                        <div className="weatherConditionData">{weatherData.current.condition.text}<img src={weatherData.current.condition.icon} alt="" className="weatherIcon" /></div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather