import React from 'react'
// import{ SmileOutlined } from '@ant-design/icons';
// import Item from 'antd/es/list/Item';
import './MyPage/MyPage.css';
import bgImage from '../../images/architecture.jpg';
import userImage from '../../images/basicUserImage.png';

function MyPage() {
    return (
        <div className="container">

            {/* user image section */}
            <div className="section1">
                <img alt = "React" src={userImage} className="userImgBox"/>
                <div className="blogContentsWrapper">
                </div>
            </div>

            {/* background image section */}
            <div className="section2">
                {/* <img src={bgImage}/> */}
                <img alt = "React" src={bgImage} className="bgimage"/>
            </div>
            
            {/* contents image section */}
            {/* <div className="section3">
            </div> */}
        </div>
    )
}

export default MyPage