// import{ SmileOutlined } from '@ant-design/icons';
// import Item from 'antd/es/list/Item';
import './APITest/page.css';
import axiosApi from '../../utils/api/AxiosApi.js';
import axios from 'axios';
import React, {forwardRef, useRef, useState, useEffect} from "react";
// import axios from 'axios';
import { USER_SERVER } from '../../Config.js';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Dialog from '../../utils/dialog/Dialog.jsx';

// DataBase 
import Datatable from '../../utils/datatable/Datatable.jsx';

// Chart 
import LineChart from '../../utils/chart/LineChart.jsx';
import LineChartByChartJS from '../../utils/chart/chartjs.jsx';

//loadingbar
import Loading from '../../utils/loading/Loading.jsx';
import $ from 'jquery';

//Modal
import useModal from '../../utils/modal/useModal.js';


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
// alert Dailog
async function alertDialog(){
    confirmAlert({
        customUI: ({ onClose }) => {
        return (
        ///////////////////////////////////////////////Alert 띄우기///////////////////////////////////////////////        
        <Dialog type="alert" header="확인" msg="수정이 완료되었습니다!" onClose={onClose} />
        );
      }
    });
  };

async function confirmDialog(data){
    confirmAlert({
        customUI: ({ onClose }) => {
        return (
        ///////////////////////////////////////////////Alert 띄우기///////////////////////////////////////////////        
        // <Dialog type="alert" header="확인" msg="수정이 완료되었습니다!" onClose={onClose} />
        
        ///////////////////////////////////////////////Confirm 띄우기///////////////////////////////////////////////        
        <Dialog type="confirm" header="확인" msg="등록하시겠습니까?" onClose={onClose} successFunc={() => afterConfirm(data)}/>

        ///////////////////////////////////////////////Delete Confirm 띄우기///////////////////////////////////////////////       
        // <Dialog type="delete" header="삭제" msg="삭제하시겠습니까?" onClose={onClose} successFunc={afterDelete}/>          
        );
      }
    });
  };

  async function deleteDialog(data){

    confirmAlert({
        customUI: ({ onClose }) => {
        return (
        ///////////////////////////////////////////////Delete Confirm 띄우기///////////////////////////////////////////////       
        <Dialog type="delete" header="삭제" msg="삭제하시겠습니까?" onClose={onClose} successFunc={() => afterDelete(data)}/>          
        );
      }
    });
  };

  function afterDelete(data){
    if(data !=null){
        APITestByGet(data);
    }
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
    if(data !=null){
        APITestByGet(data);
    }
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
    const [loading, setLoading] = useState(true);

    async function apiTestByGetAll(){
        
        const response = await axios.get(
            USER_SERVER+"/APITestByGetLoading/ohsanrim/20220002/01000000000"
          );
          setLoading(false);
          return response.data;
    }
    // API Test Zone
    const [ name, setName ] = useState(null);
    const [ phoneNum, setPhoneNume ] = useState(null);
    const [ birth, setBirth ] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    // const tableRef = useRef();

    useEffect(() => {
        console.log("컴포넌트가 화면에서 나타남");
        setName("ohsanrim");
        setPhoneNume("01000000000");
        setBirth("19999999");   
        return () => {
            console.log("컴포넌트가 화면에서 사라짐");
        }
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
    // const { loading, data: datas, error } = state;
    
    // if (loading) return <div>로딩중..</div>;
    // if (error) return <div>에러가 발생했습니다</div>;
    // if (!datas) return null;

    //dataTable 
   
    const drawSearchTable = () => {
        console.log("drawSearchTable");
        $('#datatable').DataTable().draw();
        // $(tableRef.current).DataTable().ajax.reload();
    }

    // const dataTableData = [['Suki Burks', 'Developer', 'London', '6832', '2020/10/22', '$114,500'],['Suki Burks', 'Developer', 'London', '6832', '2020/10/22', '$114,500'],['Suki Burks', 'Developer', 'London', '6832', '2020/10/22', '$114,500'],['Suki Burks', 'Developer', 'London', '6832', '2020/10/22', '$114,500']];
    const dataTableColumns = [
    //     { data: 'name', title: 'Name' },
    //     { data: 'position', title: 'Position' },
    //     { data: 'office', title: 'Office' },
    //     { data: 'extn', title: 'Extn.' },
    //     { data: 'startDate', title: 'Start date' },
    //     { data: 'salary', title: 'Salary' },
    //     { title:'Detail', name: 'Detail',defaultContent:"<input type=\"button\" class=\"showDetailBtn\" value=\"상세정보\">",
    //     createdCell: function (cell, cellData, rowData){$(cell).on("click", "input", rowData, showDetailColume);}
    // }

    { data: 'chaincodeName', title: 'chaincodeName' },
    { data: 'channelName', title: 'channelName' },
    { data: 'createdDate', title: 'createdDate' },
    { title:'Detail', name: 'Detail',defaultContent:"<input type=\"button\" class=\"showDetailBtn\" value=\"상세정보\">",
        createdCell: function (cell, cellData, rowData){$(cell).on("click", "input", rowData, showDetailColume);}
    }
    ];

    const { openModal } = useModal();

    function showDetailColume(event) {
        openModal({ type: "first" });
        
        fetch(USER_SERVER+"/dataTableSearchDetailTest/"+event.data.id, { method: "GET" })
         .then((res) => {return res.json();})
         .then((data) => {
            console.log(data);
        })
        
      }

    const [ SEL_GROUP_ID, setSEL_GROUP_ID ] = useState("");
    const [ searchKind, setSearchKind] = useState("");
    const [ searchValue, setSearchValue] = useState("");
    const dataTableAjax ={
        type: 'GET',
        url: USER_SERVER+"/dataTableSearchTest",
        dataType: 'json',
        data: function ( params ) {
            /* sort field */
            params = dataTableParamAdjust(params);

            /* search field */
            params.objectId = SEL_GROUP_ID;
            
            params.searchKind = searchKind.current;

            params.searchValue = searchValue.current;

        }
      };

      function dataTableParamAdjust(params){
		console.log(params);
		for (var i = 0; i < params.order.length; i++) {
			const columnIndex = params.order[i].column;
			params.orderColumn = params.columns[columnIndex].data;
			params.orderDir = params.order[i].dir;
	    }
		params.columns = null;
		params.order = null;
		return params;
	}

      const onChange= (e) => {
        setSearchValue(e.target.value);
      }

      function APITestByGet(data){
        fetch("/gateway/restapi/v1.0/APITestByGet/"+data.name+"/"+data.phoneNum+"/"+data.birth, { method: "GET" })
         .then((res) => {return res.json();})
         .then((data) => {return data;})
    }
    // alert Dailog
    async function alertDialog(){
        console.log("1");
        confirmAlert({
            customUI: ({ onClose }) => {
            return (
            ///////////////////////////////////////////////Alert 띄우기///////////////////////////////////////////////        
            <Dialog type="alert" header="확인" msg="수정이 완료되었습니다!" onClose={onClose} />
            );
          }
        });
      };
    
    async function confirmDialog(data){
        console.log("2");
        confirmAlert({
            customUI: ({ onClose }) => {
            return (
            ///////////////////////////////////////////////Alert 띄우기///////////////////////////////////////////////        
            // <Dialog type="alert" header="확인" msg="수정이 완료되었습니다!" onClose={onClose} />
            
            ///////////////////////////////////////////////Confirm 띄우기///////////////////////////////////////////////        
            <Dialog type="confirm" header="확인" msg="등록하시겠습니까?" onClose={onClose} successFunc={() => afterConfirm(data)}/>
    
            ///////////////////////////////////////////////Delete Confirm 띄우기///////////////////////////////////////////////       
            // <Dialog type="delete" header="삭제" msg="삭제하시겠습니까?" onClose={onClose} successFunc={afterDelete}/>          
            );
          }
        });
      };
    
      async function deleteDialog(data){
        console.log("3");
        confirmAlert({
            customUI: ({ onClose }) => {
            return (
            ///////////////////////////////////////////////Delete Confirm 띄우기///////////////////////////////////////////////       
            <Dialog type="delete" header="삭제" msg="삭제하시겠습니까?" onClose={onClose} successFunc={() => afterDelete(data)}/>          
            );
          }
        });
      };
    
      function afterDelete(data){
        setLoading(true);
    
        setTimeout(() => confirmAlert({
            customUI: ({ onClose }) => {
                setLoading(false);
            return (
            <Dialog type="alert" header="확인" msg="삭제가 완료되었습니다!" onClose={onClose}/>        
            );
          }
        }), 5000)
        
        
    }

    


    function afterConfirm(data){
        // console.log("userName >> "+data.name);
        // console.log("birth >> "+data.birth);
        // console.log("phoneNum >> "+data.phoneNum);
        if(data !=null){
            APITestByGet(data);
        }
        // console.log(datas);
        confirmAlert({
            customUI: ({ onClose }) => {
            return (
                <Dialog type="alert" header="확인" msg="등록이 완료되었습니다!" onClose={onClose}/>        
            );
          }
        });
    }

    return (
        <div className="container">
            {loading ? <Loading/> : ""} 
                <div className="contentsWrapper ">
                <div className="datatableTestWrapper content">
                    <h3>DataTable 라이브러리 사용하기</h3>
                    <div className="page_top_area">
                        <div  className="search_wrap">
                            <select  className="log_select1" name="searchKind" id="searchKind">
                                <option value="">검색조건</option>
                                <option value="chaincodeName">체인코드명</option>
                                <option value="channelName">채널명</option>
                            </select>
                            <div  className="search_text">
                                <input type="text" value={searchValue} className="searchValue" name="searchValue" id="searchValue" onChange={onChange} placeholder="Search..."/>
                                <button type="button" onClick={drawSearchTable}>검색</button>
                            </div>
                        </div>
                    </div>
                    {/* <Datatable dataTableColumnDefs={dataTableColumnDefs} dataTableData={dataTableData} dataTableColumns={dataTableColumns}></Datatable> */}
                    <Datatable dataTableAjax={dataTableAjax} dataTableColumns={dataTableColumns}></Datatable>
                </div>
                <div className="chartTestWrapper content">                    
                    <div className="lineChart">
                        <h3>LineChart(nivo/line 라이브러리) 사용하기</h3>
                        <div className="source_url">
                            출처 : <a href='https://nivo.rocks/pie/canvas/'>NIVO 라이브러리</a>
                        </div>
                        <LineChart></LineChart>
                    </div>
                </div>
                <div className="chartTestWrapper2 content">                    
                    <div className="lineChart2">
                        <h3>기본 Chart(Chart.js 라이브러리) 사용하기</h3>
                        <div className="source_url">
                            출처 : <a href='https://react-chartjs-2.js.org/examples/pie-chart/'>Chart.js 라이브러리</a><br/>
                            구현: 특정 임계치 이상의 데이터일 경우 빨간색으로 그려주고, 그 아래는 초록색으로 표시 
                        </div>
                        <div className="pieChartWrapper">
                            <LineChartByChartJS></LineChartByChartJS>
                        </div>
                    </div>
                </div>
                <div className="dialogTestWrapper content">
                    <h3>커스터마이징 Dialog 사용하기</h3>
                    <div className="buttonWrapper">
                        <button onClick={() => alertDialog()}>알림 Dialog</button>
                        <button onClick={() => confirmDialog()}>확인 Dialog</button>
                        <button onClick={() => deleteDialog()}>삭제 Dialog</button>
                    </div>
                </div>
                <div className="queryTestWrapper content">
                    <h3>API 조회</h3>

                    {/* <ul>
                        {datas.map(data => (
                            <li key={data.no}><label>이름: </label>{data.name}<button onClick={() => confirmDialog(data)}>상세보기</button></li>
                        ))}
                    </ul> */}
                </div>
                <div className="source_url">
                    출처 : <a href='https://react.vlpt.us/react-router/04-extra.html'>React 스터디</a>
                </div>
            </div>
        </div>
    );
}

export default APITest