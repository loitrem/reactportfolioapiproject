import React from 'react'
import javascriptImg from '../images/javascript.png'
import reactImg from '../images/react.png'
import cssImg from '../images/css.png'
import htmlImg from '../images/html.png'
import javaImg from '../images/java.png'
import nodeImg from '../images/node.png'
import npmImg from '../images/npm.png'

function Technologies() {

  return (


    <div className="technologyWrapper">
        <div className="technology">
            <div className="techCell">
                <div className="techCellLeft">
                    <img className='techJsImg' src={reactImg} alt="" />
                </div>
                <div className="techCellRight">React</div>
            </div>

            <div className="techCell">
                <div className="techCellLeft">
                    <img className='techJsImg' src={javascriptImgImg} alt="" />
                </div>
                <div className="techCellRight">JavaScript</div>
            </div>

            <div className="techCell">
                <div className="techCellLeft">
                    <img className='techJsImg' src={htmlImg} alt="" />
                </div>
                <div className="techCellRight">Html</div>
            </div>

            <div className="techCell">
                <div className="techCellLeft">
                    <img className='techJsImg' src={cssImg} alt="" />
                </div>
                <div className="techCellRight">Css</div>
            </div>

            <div className="techCell">
                <div className="techCellLeft">
                    <img className='techJsImg' src={nodeImg} alt="" />
                </div>
                <div className="techCellRight">Node.js</div>
            </div>

        </div>
    </div>
  )
}

export default Technologies