import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {

const navigate = useNavigate();
    return (
        <div className="navWrapper">
            <div className="nav">
            <div className="navLinks" onClick={()=>{
                    navigate('/');
                }}>{"<Home />"}</div>
                <div className="navLinks" onClick={()=>{
                    navigate('/technologies');
                }}>{"<Technologies />"}</div>
                <div className="navLinks" onClick={()=>{
                    navigate('/');
                }}>{"<Projects />"}</div>
                <div className="navLinks">{"<AboutMe />"}</div>
            </div>
        </div>
    )
}

export default Nav