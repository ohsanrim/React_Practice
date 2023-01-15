<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    


<script
		src="<%=request.getContextPath()%>/resources/vendors/popper/popper.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/resources/vendors/bootstrap/bootstrap.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/resources/vendors/anchorjs/anchor.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/resources/vendors/is/is.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/resources/vendors/fontawesome/all.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/resources/vendors/lodash/lodash.min.js"></script>
	<script
		src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/resources/vendors/imagesloaded/imagesloaded.pkgd.js"></script>
	<script
		src="<%=request.getContextPath()%>/resources/vendors/gsap/customEase.js"></script>
	<script
		src="<%=request.getContextPath()%>/resources/vendors/gsap/scrollToPlugin.js"></script>
	<script src="<%=request.getContextPath()%>/resources/assets/js/theme.js"></script>
	<script src="<%=request.getContextPath()%>/resources/assets/js/jquery-2.2.4.min.js"></script>
	
	<script>
	
	var CONTEXT_PATH = '<%=request.getContextPath()%>';
	
	//TODO ajax 호출 공통
	function callAjax(callUrl, callType, callFormName, successFunction){	
		blur();
		$.ajax({
            url      : CONTEXT_PATH + callUrl,
            type     : callType,
            data     : $('#' + callFormName).serialize(),
            dataType : 'json',
            success  : function(data){
            	successFunction(data);
            },
            error : function(request, status, error ) {   // 오류가 발생했을 때 호출된다.
            	$('#failCode').text(JSON.parse(request.responseText).resultMessage);
            	showFailModal();
           	}
            
        });
	}
	
	//TODO ajax 호출 공통
	function callAjaxData(callUrl, callType, data, successFunction){	
		blur();
		$.ajax({
            url      : CONTEXT_PATH + callUrl,
            type     : callType,
            data     : data,
            dataType : 'json',
            success  : function(data){
            	successFunction(data);
            },
            error : function(request, status, error ) {   // 오류가 발생했을 때 호출된다.
            	$('#failCode').text(JSON.parse(request.responseText).resultMessage);
            	showFailModal();
           	}
            
        });
	}
	
	
	//TODO ajax 호출 공통
	function callAjaxWithMultiForm(callUrl, callType, data, successFunction){		
		blur();
		$.ajax({
            url      : CONTEXT_PATH + callUrl,
            type     : callType,
            data     : data,
            dataType : 'json',
            success  : function(data){
            	successFunction(data);
            },
            error : function(request, status, error ) {   // 오류가 발생했을 때 호출된다.
            	
            	$('#failCode').text(JSON.parse(request.responseText).resultMessage);
            	showFailModal();
           	}
            
        });
	}
	
	//TODO ajax 호출 공통 (파일 업로드 포함)
	function callAjaxWithFile(callUrl, callType, callFormName, successFunction){
		
		var formData = new FormData(document.getElementById(callFormName)); //jquery object 아님
		
		blur();
		$.ajax({
            url      : CONTEXT_PATH + callUrl,
            type     : callType,
            enctype  : 'multipart/form-data',
            data     : formData,
            processData: false,
            contentType: false,
            dataType : 'json',
            success  : function(data){
            
            	successFunction(data);
            },
            error : function(request, status, error ) {   // 오류가 발생했을 때 호출된다.
            	
            	$('#failCode').text(JSON.parse(request.responseText).resultMessage);
            	showFailModal();
           	}
            
        });
	}
	</script>