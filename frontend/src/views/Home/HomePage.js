import React from 'react'
// import{ SmileOutlined } from '@ant-design/icons';
// import Item from 'antd/es/list/Item';
import './HomePage/HomePage.css';
import Overallstatistics from './sections/Overallstatistics.jsx';

function HomePage() {
    return (
        <div className="container">

            {/* user image section */}
            <div className="section1">
                <Overallstatistics name="harin">
                </Overallstatistics>
            </div>

            {/* background image section */}
            <div className="section2">
            </div>
            
            {/* contents image section */}
            {/* <div className="section3">
            </div> */}
        </div>
    )
}

export default HomePage