import React from 'react'
import logo from '../images/logo.png'
import Weather from './Weather';
import Nav from './Nav';

function Header() {
    return (
        <div className="headerWrapper">
            <div className="headerTop"><Weather /></div>
            <div className="header">
                <div className="headerBottom">
                    <div className="headerLeft">
            
                    </div>
                    <div className="headerRight">
                        <div className="website"><a href="http://loitrem.tplinkdns.com/perscholas/" className="websiteLink">www.loitrem.com</a></div>
                        <div className="contactMe"><button className="contactMeBtn">Get in Touch</button></div>
                    </div>
                </div>
                <div className="headerNavWrapper">
                    <Nav />
                </div>
                
            </div>
        </div>
    )
}

export default Header