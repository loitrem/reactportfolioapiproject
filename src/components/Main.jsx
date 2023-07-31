import React from 'react'

function Main(props) {

    return (
        <div className="mainWrapper">
            <div className="main">
                <div className="mainGithub">
                    <div className="usename">Username: {props.github.login}</div>
                    <div className="name">Name: {props.github.name}</div>
                </div>
                <div className="mainWeather">
                    <div className="location">Location: {props.weather.location.name}</div>
                    <div className="currentTemp">Current Temp: {props.weather.current.temp_f}°F</div>
                    <div className="weatherCondition">Currently: {props.weather.current.condition.text} <img src={props.weather.current.condition.icon} alt="" className="weatherIcon" /></div>
                    <div>{props.ip}</div>
                </div>
            </div>
        </div>
    )
}

export default Main