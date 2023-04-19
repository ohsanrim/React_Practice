import React, {useEffect, useRef} from "react";
// JS
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-responsive-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';
// css
import '../../css/datatable/datatable.css';

function Datatable(props){
    const tableRef = useRef();

     useEffect(() => {
      const table = $(tableRef.current).DataTable({
        lengthChange: false, // 표시 건수기능 숨기기
		searching: false, // 검색 기능 숨기기
		ordering: false, // 정렬 기능 숨기기
		info: false, // 정보 표시 숨기기
		// paging: false, // 페이징 기능 숨기기
        pageLength: 5,  // 페이징 처리를 통한 화면 표시 건 수
        responsive: true, // 반응형 켜기
        ajax: props.dataTableAjax,
        columns: props.dataTableColumns
      });
      // 언마운트 시 destroy.
      return () => {
        table.destroy();
      };
    }, []);

    return <table ref={tableRef} style={{ width: '100%' }}></table>;

}

export default Datatable