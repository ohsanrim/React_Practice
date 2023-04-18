// import{ SmileOutlined } from '@ant-design/icons';
// import Item from 'antd/es/list/Item';
import './APITest/page.css';
import axiosApi from '../../utils/api/AxiosApi.js';
import axios from 'axios';
import React, {useState, useEffect} from "react";
// import axios from 'axios';
import { USER_SERVER } from '../../Config.js';

const name = "ohsanrim";
const phoneNum = "01000000000";
const birth = "19999999";

async function apiTestByGet(){
        
    const response = await axios.get(
        USER_SERVER+"/APITestByGetLoading/"+name+"/"+phoneNum+"/"+birth
      );
      
      return response.data;
}

function APITest() {
    

    /*
    Writer: Harin Kwak
    Date: 2023/04/17
    Description:API Test By Fetch (GET)
    */
    // const [getMsg, setGetMsg] = useState("");  //Get
    // useEffect(() => {
    //     fetch("/gateway/restapi/v1.0/APITestByGet/"+name+"/"+phoneNum+"/"+birth, { method: "GET" })
    //         .then((res) => {return res.json();})
    //         .then((data) => {setGetMsg(data);})
    //   }, []);

    /*
    Writer: Harin Kwak
    Date: 2023/04/17
    Description:API Test By Axios (GET)
    */
    // useEffect(() => { 
    //     axios.get("/gateway/restapi/v1.0/APITestByGet/"+name+"/"+phoneNum+"/"+birth)
    //   .then((res)=>{
    //     setGetMsg(res.data);})
    //   .catch((err)=> {console.log(err);})
    // }, []);

    /*
    Writer: Harin Kwak
    Date: 2023/04/17
    Description:API Test By Fetch (POST)
    */
    // const [postMsg, setPostMsg] = useState("");  //POST
    // useEffect(() => {
    //     fetch("/gateway/restapi/v1.0/APITestByPost", { 
    //         method: "POST",
    //         headers : {               //데이터 타입 지정
    //             "Content-Type":"application/json; charset=utf-8",
    //             "Name": name,
    //             "Birth": birth, 
    //             "PhoneNum": phoneNum
    //         }, 
    //         // body: JSON.stringify(jsonData)
    //         body: jsonData
    //     })
    //         .then((res) => {
    //             console.log(res.json());
    //             return res.json();
    //         })
    //         .then((data) => {setPostMsg(data);})
    //   }, []);

    /*
    Writer: Harin Kwak
    Date: 2023/04/17
    Description:API Test By Axios (POST)
    */
    // useEffect(() => { 
    //     axios.post("/gateway/restapi/v1.0/APITestByPost", jsonData, { 
    //         headers:{ 
    //             "Content-Type":"application/json; charset=utf-8",
    //             "Name": name,
    //             "Birth": birth, 
    //             "PhoneNum": phoneNum
    //            } 
    //          })
    //   .then((res)=>{
    //     setPostMsg(res.data);
    // })
    //   .catch((err)=> {console.log(err);})
    // }, []);


    const [state, refetch] = axiosApi(apiTestByGet, []);
    const { loading, data: datas, error } = state;

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!datas) return null;
    
    return (
        <div className="container">
            <div className="insertTestWrapper">

            </div>
            <div className="queryTestWrapper">
                <h3>GET 방식</h3>
                <ul>
                    <li><label>이름: </label>{datas.name}</li>
                    <li><label>생일: </label>{datas.birth}</li>
                    <li><label>핸드폰번호: </label>{datas.phoneNum}</li>
                </ul>
            </div>
            <div className="queryTestWrapperByPost">
                <h3>POST 방식</h3>
                <ul>
                    <li><label>이름: </label>{datas.name}</li>
                    <li><label>생일: </label>{datas.birth}</li>
                    <li><label>핸드폰번호: </label>{datas.phoneNum}</li>
                </ul>
            </div>
        </div>
    );
}

export default APITest