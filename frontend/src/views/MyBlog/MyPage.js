import React from 'react'
import{ SmileOutlined } from '@ant-design/icons';
// import Item from 'antd/es/list/Item';

function MyPage() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> Happy Coding  <SmileOutlined/></p>
        </div>
    )
}

export default MyPage