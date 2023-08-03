import React from 'react'
import triangle from '../images/triangle.png'

function Footer() {
  return (
    <div className="footerWrapper">
        <div className="footer">
            <div className="footerTop">
              <div className="triangleWrapper" onClick={()=>{
                document.body.scrollIntoView();
              }}>
                <img src={triangle} alt="" className="triangle" />
              </div>
              <div className="footerTopText">back to top</div>    
            </div>
            <div className="footerBottom">
                <div className="footerLeft">
                <div className="footerEmail" onClick={() => {
                                window.location = 'mailto:ekowalski1982@gmail.com'
                                }}>Email: {" ekowalski1982@gmail.com"}</div> 
                </div>
                <div className="footerCenter">
                  <a href="" className="downloadResume">Download Resume</a>
                </div>
                <div className="footerRight">
                  <a href="www.loitrem.com" className="footerWebsite">Website: loitrem.com</a>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Footer