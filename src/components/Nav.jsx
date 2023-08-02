import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {

const navigate = useNavigate();

    const openTab  = (x) => {
        
        var i, tabcontent, tablinks;
        tabcontent = document.querySelectorAll(".mainBanner");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.querySelectorAll(".tab");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.querySelector(x).style.display = "block";
        let tab = document.querySelector(x);
        tab.className += " active";
    }
    return (
        <div className="NavWrapper">
            <div className="nav">

            </div>
        </div>
    )
}

export default Nav