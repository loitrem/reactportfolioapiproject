import React from 'react'
import logo from '../images/logo.png'
import Weather from './Weather';

function Nav() {
    return (
        <div className="navWrapper">
            <div className="navTop"><Weather /></div>
            <div className="nav">
                <div className="navBottom">
                    <div className="navLeft"><img src={logo} alt="" className="navLogo" /></div>
                    <div className="navRight">
                        <div className="website"><a href="http://loitrem.tplinkdns.com/perscholas/" className="websiteLink">http://www.loitrem.com/</a></div>
                        <div className="contactMe"><button className="contactMeBtn">Get in Touch</button></div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Nav