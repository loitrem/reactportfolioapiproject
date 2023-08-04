import React from 'react'
import javascriptImg from '../images/javascript.png'
import reactImg from '../images/react.png'
import cssImg from '../images/css.png'
import htmlImg from '../images/html.png'
import javaImg from '../images/java.png'
import nodeImg from '../images/node.png'
import phpImg from '../images/php.png'
import sqlImg from '../images/sql.png'
import bgImg from '../images/bg2.jpg'

function Technologies() {

return (


    <div className="technologyWrapper page" style={{backgroundImage: `url(${bgImg})`, 
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'}}>
        <div className="test">
        <div className="technology">
            <div className="techCell topCell">
                <div className="techCellLeft">
                    <img className='techReactImg' src={reactImg} alt="" />
                </div>
                <div className="techCellRight">React</div>
            </div>

            <div className="techCell">
                <div className="techCellLeft">
                    <img className='techJsImg' src={javascriptImg} alt="" />
                </div>
                <div className="techCellRight">JavaScript</div>
            </div>

            <div className="techCell">
                <div className="techCellLeft">
                    <img className='techHtmlImg' src={htmlImg} alt="" />
                </div>
                <div className="techCellRight">Html</div>
            </div>

            <div className="techCell">
                <div className="techCellLeft">
                    <img className='techCssImg' src={cssImg} alt="" />
                </div>
                <div className="techCellRight">Css</div>
            </div>

            <div className="techCell">
                <div className="techCellLeft">
                    <img className='techJavaImg' src={javaImg} alt="" />
                </div>
                <div className="techCellRight">Java</div>
            </div>

            <div className="techCell">
                <div className="techCellLeft">
                    <img className='techPhpImg' src={phpImg} alt="" />
                </div>
                <div className="techCellRight">Php</div>
            </div>

            <div className="techCell">
                <div className="techCellLeft">
                    <img className='techSqlImg' src={sqlImg} alt="" />
                </div>
                <div className="techCellRight">Sql</div>
            </div>

            <div className="techCell">
                <div className="techCellLeft">
                    <img className='techNodeImg' src={nodeImg} alt="" />
                </div>
                <div className="techCellRight">Node.js</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Technologies