// import{ SmileOutlined } from '@ant-design/icons';
// import Item from 'antd/es/list/Item';
import './APITest/page.css';
import axiosApi from '../../utils/api/AxiosApi.js';
import axios from 'axios';
import React, {useState, useEffect} from "react";
// import axios from 'axios';
import { USER_SERVER } from '../../Config.js';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Dialog from '../Dialog/Dialog.js';

async function apiTestByGetAll(){
        
    const response = await axios.get(
        USER_SERVER+"/APITestByGetAll"
      );
      
      return response.data;
}

// async function showDetails(data){
//     console.log("userName >> "+data.name);
//     console.log("birth >> "+data.birth);
//     console.log("phoneNum >> "+data.phoneNum);
// }

function APITestByGet(data){
    fetch("/gateway/restapi/v1.0/APITestByGet/"+data.name+"/"+data.phoneNum+"/"+data.birth, { method: "GET" })
     .then((res) => {return res.json();})
     .then((data) => {return data;})
}

async function confirmDialog(data){
    confirmAlert({
        customUI: ({ onClose }) => {
        return (
        ///////////////////////////////////////////////Alert 띄우기///////////////////////////////////////////////        
        // <Dialog type="alert" header="확인" msg="수정이 완료되었습니다!" onClose={onClose} />
        
        ///////////////////////////////////////////////Confirm 띄우기///////////////////////////////////////////////        
        <Dialog type="confirm" header="확인" msg="확인하시겠습니까?" onClose={onClose} successFunc={() => afterConfirm(data)}/>

        ///////////////////////////////////////////////Delete Confirm 띄우기///////////////////////////////////////////////       
        // <Dialog type="delete" header="삭제" msg="삭제하시겠습니까?" onClose={onClose} successFunc={afterDelete}/>          
        );
      }
    });
  };

  function afterDelete(){
    confirmAlert({
        customUI: ({ onClose }) => {
        return (
            <Dialog type="alert" header="확인" msg="삭제가 완료되었습니다!" onClose={onClose}/>        
        );
      }
    });
}

function afterConfirm(data){
    // console.log("userName >> "+data.name);
    // console.log("birth >> "+data.birth);
    // console.log("phoneNum >> "+data.phoneNum);

    APITestByGet(data);
    
    // console.log(datas);
    confirmAlert({
        customUI: ({ onClose }) => {
        return (
            <Dialog type="alert" header="확인" msg="등록이 완료되었습니다!" onClose={onClose}/>        
        );
      }
    });
}

function APITest() {
    const [ name, setName ] = useState(null);
    const [ phoneNum, setPhoneNume ] = useState(null);
    const [ birth, setBirth ] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);

    useEffect(() => {
        setName("ohsanrim");
        setPhoneNume("01000000000");
        setBirth("19999999");   
    }, []);

    const handleOpen = () => {
        setModalOpened(true);
      };
      const handleClose = () => {
        setModalOpened(false);
    };
    
    
    
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


    const [state, refetch] = axiosApi(apiTestByGetAll, []);
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
                    {/* List 형태로 데이터 리스트 뿌려주기 */}
                    {datas.map(data => (
                        <li key={data.no}><label>이름: </label>{data.name}<button onClick={() => confirmDialog(data)}>상세보기</button></li>
                    ))}
                </ul>

            </div>
        </div>
    );
}

export default APITest