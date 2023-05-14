import React from 'react'
// import{ SmileOutlined } from '@ant-design/icons';
// import Item from 'antd/es/list/Item';
import './HomePage/HomePage.css';
import Overallstatistics from './sections/Overallstatistics.jsx';

function HomePage() {
    return (
        <div className="container">

            {/* user image section */}
            <div className="section">
                <Overallstatistics name="harin">
                </Overallstatistics>
            </div>

        </div>
    )
}

export default HomePage