// import{ SmileOutlined } from '@ant-design/icons';
// import Item from 'antd/es/list/Item';
// import React from "react";
// CSS
import './Report/page.css';
import './Report/datatables_report.css';

//JS
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-responsive-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';

import { Bar } from 'react-chartjs-2';

import React, {useState, useEffect, useRef} from "react";

import menu_2 from '../../images/menu_2.png';
import menu_4 from '../../images/menu_4.png';
import menu_5 from '../../images/menu_5.png';
import menu_9 from '../../images/menu_9.png';
import menu_6 from '../../images/menu_6.png';

import title_icon  from '../../images/tit_icon.png';
import search_06_icon from '../../images/06_search_icon.png';

function Report() {
    var year = "2023";
    var month = "4";
    const [mainCnt, initMainCount] = useState("");
    useEffect(() => {
        fetch("/gateway/restapi/report/getDashboardCnt")
            .then((res) => {return res.json();})
            .then((data) => {initMainCount(data);})
      }, []);

    // Make Datatables
    const tableRef = useRef();
  
    useEffect(() => {
      const table = $(tableRef.current).DataTable({
        lengthChange: false, // 표시 건수기능 숨기기
		searching: false, // 검색 기능 숨기기
		ordering: false, // 정렬 기능 숨기기
		info: false, // 정보 표시 숨기기
		paging: false, // 페이징 기능 숨기기
        responsive: true, // 반응형 켜기
      });
  
      // 언마운트 시 destroy.
      return () => {
        table.destroy();
      };
    }, []);
    
    var data = GetTxStatisticsByChannels();
    // var config = getTxStatisticsByChannelsChart(data);
    // console.log("//////////////////////////////");
    // console.log(config);

    const options = {
        plugins: {
          title: {
            display: true,
            text: '월간 트랜잭션 통계',
          },
        },
        responsive: true,
        interaction: {
          intersect: false
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      };

    return (
        <div className="page_wrapper" >
            <div className="page_container"></div>
            <div className="blockchainReportWrapper"  id="pdfArea">
                <div className="report_head_wrapper">
                    <p className="page_tit">{year}년도 {month}월 블록체인 리포트</p><button className="pdf_download_btn"><img alt = "React" src={search_06_icon}/> PDF 다운로드</button>
                </div>
                
                <ul>
                    <li>
                        <div className="totalBlocksWrapper totalBlocksWrapper1">
                            <p className="tit"><img alt = "React" src={menu_6}/><span>Block</span></p>
                            <p className="num" id="blocks">{mainCnt.blocks}</p>	
                        </div>
                    </li>
                    <li>
                        <div className="totalBlocksWrapper totalBlocksWrapper2" >
                            <p className="tit"><img alt = "React" src={menu_9}/><span>Identifier</span></p>
                            <p className="num" id="identitys">{mainCnt.identitys}</p>
                        </div>
                    </li>
                    <li>
                        <div className="totalBlocksWrapper totalBlocksWrapper3">
                            <p className="tit"><img alt = "React" src={menu_5}/><span>Chaincode</span></p>
                            <p className="num" id="chaincodes">{mainCnt.chaincodes}</p>
                        </div>
                    </li>
                    <li>
                        <div className="totalBlocksWrapper totalBlocksWrapper4">
                            <p className="tit"><img alt = "React" src={menu_4}/><span>Channel</span></p>
                            <p className="num" id="channels">{mainCnt.channels}</p>
                        </div>
                    </li>
                    <li>
                        <div className="totalBlocksWrapper totalBlocksWrapper5">
                            <p className="tit"><img alt = "React" src={menu_2}/><span>Peer</span></p>
                            <p className="num" id="nodes">{mainCnt.nodes}</p>
                        </div>
                    </li>
                </ul>
                {/* <!-- 월간 채널 별 트랜잭션 요청 통계 --> */}
                <div className="box_wrap"  id="statistics_list0">
                    <div className="boxfloat">
                        <div className="boxTitleWrapper">
                            <p className="tit"><img alt = "React" src={title_icon}/><span></span></p>
                            <p className="txt">월간 채널 별 트랜잭션 요청 통계</p>
                        </div>
                        {/* <div className="canvas_wrap" id="canvas_wrap_graph" >
                            <canvas className="center" id="txStatisticsByChannelsNodeGraph" width="100">{config}</canvas>
                        </div> */}
                        {/* <Bar option="{options}" data={config}/> */}
                        <table ref={tableRef} className="tbl table table-bordered" id="txStatisticsByChannelsTable"><thead><tr><th></th></tr></thead></table>
                    </div>
                </div> 
                
                {/* <!-- 월간 채널 별 블록 요청 통계 --> */}
                <div className="box_wrap" id="statistics_list1">
                    <div className="boxfloat">
                        <div className="boxTitleWrapper">
                            <p className="tit"><img alt = "React" src={title_icon}/><span></span></p>
                            <p className="txt">월간 채널 별 블록 요청 통계</p>
                        </div>
                        <div className="canvas_wrap" id="canvas_wrap_graph" >
                        <canvas className="center" id="blocksByChannelsNodeGraph" width="100"></canvas>
                        </div>
                        {}
                    </div>
                </div>
                
                {/* <!-- 월간 블록 별 트랜잭션 요청 통계 --> */}
                <div className="box_wrap" id="statistics_list2">
                    <div className="boxfloat">
                        <div className="boxTitleWrapper">
                            <p className="tit"><img alt = "React" src={title_icon}/><span></span></p>
                            <p className="txt">월간 노드 별 트랜잭션 요청 통계</p>
                        </div>
                        <div className="canvas_wrap" id="canvas_wrap_graph" >
                        <canvas className="center" id="txStatisticsByNodeGraph" width="100"></canvas>
                        </div>
                        <table className="tbl table table-bordered" id="txStatisticsByNodesTable">
                            <thead>
                                <tr>
                                    <th></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                
                {/* <!-- 월간 HDD 사용량 통계 --> */}
                <div className="box_wrap" id="statistics_list3">
                    <div className="boxfloat">
                        <div className="boxTitleWrapper">
                            <p className="tit"><img alt="React" src={title_icon}/><span></span></p>
                            <p className="txt">월간 HDD 사용량 통계(GB)</p>
                        </div>
                        <div className="canvas_wrap" id="canvas_wrap_graph" >
                        <canvas className="center" id="HDDStaticGraph" width="100"></canvas>
                        </div>
                        <table className="tbl table table-bordered" id="HDDStatisticsTable">
                            <thead>
                                <tr>
                                    <th></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                
                {/* <!-- 월간 체인코드 별 사용량 통계 API --> */}
                <div className="box_wrap" id="statistics_list4">
                    <div className="boxfloat">
                        <div className="boxTitleWrapper">
                            <p className="tit"><img alt = "React" src={title_icon}/><span></span></p>
                            <p className="txt">월간 체인코드 별 사용량 통계</p>
                        </div>
                        <div className="canvas_wrap" id="canvas_wrap_pie" >
                        <canvas className="center" id="chaincodeUsePie"></canvas>
                        </div>
                        <table className="tbl table table-bordered" id="monthlyChaincodeUsageTable">
                            <thead>
                                <tr>
                                    <th></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                
                {/* // <!-- 월간 스마트컨트랙트 별 Fnc 호출량 통계 API --> */}
                <div className="box_wrap" id="statistics_list5">
                    <div className="boxfloat">
                        <div className="boxTitleWrapper">
                            <p className="tit"><img alt = "React" src={title_icon}/><span></span></p>
                            <p className="txt">월간 스마트컨트랙트 별 Fnc 호출량 통계</p>
                        </div>
                        <div className="canvas_wrap" id="canvas_wrap_pie">
                        <canvas className="center" id="smartContractUsePie"></canvas>
                        </div>
                        <table className="tbl table table-bordered" id="smartcontractFncUsageTable">
                            <thead>
                                <tr>
                                    <th></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                
                {/* // <!-- 월간 사용자 별 사용량 통계 API --> */}
                <div className="box_wrap"  id="statistics_list6">
                    <div className="boxfloat">
                        <div className="boxTitleWrapper">
                            <p className="tit"><img alt = "React" src={title_icon}/><span></span></p>
                            <p className="txt">월간 사용자 별 사용량 통계</p>
                        </div>
                        <div className="canvas_wrap" id="canvas_wrap_pie">
                            <div className="center"> <canvas id="userUsePie"></canvas></div>
                        </div>
                        <table className="tbl table table-bordered" id="monthlyUserUsageTable">
                            <thead>
                                <tr>
                                    <th></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function GetTxStatisticsByChannels() {
    $('#txStatisticsByChannelsTable').empty();
    const [txStatisticsByChannels, initTxStatisticsByChannels] = useState("");
    useEffect(() => {
        fetch("gateway/restapi/report/getTxStatisticsByChannels/2023/04")
            .then((res) => {return res.json();})
            .then((data) => {initTxStatisticsByChannels(data);})
      }, []);

    var table_head="<thead><tr><th>채널 이름</th>";
	var table_body = "<tbody>";

    $(txStatisticsByChannels).each(function(index, row) {
        table_body += "<tr>";
		
        var row_data = JSON.parse(JSON.stringify(row))
        var channel_name = row_data.channel_name;
        var dataArr = JSON.parse(row_data.dataArr);
        var total = row_data.total;

        if( channel_name === "TxTotal"){
            table_body += '<th class="row_head">전체 트랜잭션 요청</th>';
        } else {
            table_body += '<th class="row_head">'+channel_name+'</th>';
        }

        $(dataArr).each(function(index_sub, cntData) {
				
            if(index === 0) table_head += '<th>'+(index_sub+1)+"일"+'</th>';
            
            table_body += '<th>'+cntData+'</th>';
            
        });

        table_body += "<th>"+ total +"</th></tr>";
        
      });
    table_head += '<th class="row_head">합계</th></tr></thead>';
	table_body += '</tr></tbody>"';

    $('#txStatisticsByChannelsTable').append(table_head + table_body);

    $("#txStatisticsByChannelsTable").DataTable().draw();

    return txStatisticsByChannels;
    // getTxStatisticsByChannelsChart(txStatisticsByChannels);
  }

  export function getTxStatisticsByChannelsChart(data) {
    console.log(data);
    var backgColor = randomColorArr(data.length);
	
	var labels = [];
	var datasets = [];
	var endIndex = data.length - 1;
	$(data).each(function(index, row) {
		var row_data = JSON.parse(JSON.stringify(row));
		
		var label = row_data.channel_name;
		var cntDataArr = [];
		var dataArr = JSON.parse(row_data.dataArr);
		console.log("월간 채널 별 트랜잭션 요청 통계 차트");
		$(dataArr).each(function(index_sub, cntData) {
			if(index === 0) {
				labels.push((index_sub+1)+"일");
			}
			
			cntDataArr.push(cntData);
		});
		
		var dataset = {
			type: 'bar',
			label: label,
			data: cntDataArr,
			borderColor: backgColor[index],
			backgroundColor: backgColor[index],
			order: 1,
			stack: 'Stack 0',
		};
		if(index === endIndex){
			dataset.type = 'line';
			dataset.order = 0;
			delete dataset.stack;
		}
		datasets.push(dataset);
	});
	
	var graphData = {
	  labels: labels,
	  datasets: datasets
	};
	
	// var config = {
	//   data: graphData,
	//   options: {
	//     plugins: {
	//     	responsive: true,
	// 		title: {
	// 		  display: true,
	// 		  text: '월간 채널 별 트랜잭션 요청 호출 통계'
	// 		}
	//     },
	//   },
	// };
	
	return graphData;
  }

export function randomColorArr(length){

	var backgColor = [];

	for (var i = 0 ; i< length ; i++) { 
		var RGB_1 = Math.floor(Math.random() * (255 + 1)+1)
		var RGB_2 = Math.floor(Math.random() * (255 + 1)-22) 
		var RGB_3 = Math.floor(Math.random() * (255 + 1)+29)
		
		backgColor.push("rgb("+RGB_1+","+RGB_2+","+RGB_3+")"); 
		
	}
	return backgColor; 
}
export default Report