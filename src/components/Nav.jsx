import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {

const navigate = useNavigate();
    return (
        <div className="navWrapper">
            <div className="nav">
                <div className="technology">{"<Technologies />"}</div>
                <div className="technology">{"<Projects />"}</div>
                <div className="technology">{"<AboutMe />"}</div>
            </div>
        </div>
    )
}

export default Nav