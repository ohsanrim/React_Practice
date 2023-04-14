// import{ SmileOutlined } from '@ant-design/icons';
// import Item from 'antd/es/list/Item';
import './APITest/page.css';
import React, {useState, useEffect} from "react";

function APITest() {
    const [msg, setMsg] = useState("");
    useEffect(() => {
        fetch("/gateway/restapi/v1.0/queryDataByReactTest")
            .then((res) => {return res.json();})
            .then((data) => {setMsg(data);})
      }, []);
    return (
        <div className="container">
            <div class="insertTestWrapper">

            </div>
            <div class="queryTestWrapper">
                <ul>
                    <li><label>이름: </label>{msg.name}</li>
                    <li><label>생일: </label>{msg.birth}</li>
                    <li><label>핸드폰번호: </label>{msg.phoneNum}</li>
                </ul>
            </div>
        </div>
    );
}

export default APITest