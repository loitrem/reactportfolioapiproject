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
                            <div className="objItem">{" Email:"}</div>
                            <div>{" 'ekowalski1982@gmail.com',"}</div>
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