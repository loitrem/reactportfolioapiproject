import React, {useContext} from 'react'
import { AppContext } from '../context/mainContext';

function Main(props) {
    let {setWeatherData}=useContext(AppContext);
    setWeatherData(props.weather)
    console.log('props',props.weather);
    return (
        // main wrapper start
        <div className="mainWrapper">
            {/* main start */}
            <div className="main">
                {/* main banner wrapper start */}
                <div className="mainBannerWrapper">
                    {/* main banner start */}
                    <div className="mainBanner">

                        {/* temp - remove later */}
                        <div className="mainGithub">
                            <div className="usename">Username: {props.github.login}</div>
                            <div className="name">Name: {props.github.name}</div>
                        </div>
                        {/* temp end -  remove later */}

                        Main Banner
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