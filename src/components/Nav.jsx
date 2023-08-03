import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {

const navigate = useNavigate();
    return (
        <div className="navWrapper">
            <div className="nav">
            <div className="technology" onClick={()=>{
                    navigate('/resume');
                }}>{"<Home />"}</div>
                <div className="technology" onClick={()=>{
                    navigate('/resume');
                }}>{"<Technologies />"}</div>
                <div className="technology" onClick={()=>{
                    navigate('/');
                }}>{"<Projects />"}</div>
                <div className="technology">{"<AboutMe />"}</div>
            </div>
        </div>
    )
}

export default Nav