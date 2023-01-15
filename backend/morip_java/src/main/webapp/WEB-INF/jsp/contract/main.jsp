<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en-US" dir="ltr">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <!-- ===============================================-->
    <!--    Document Title-->
    <!-- ===============================================-->
    <title>GoHub | Free Traveling Template</title>


    <!-- ===============================================-->
    <!--    Favicons-->
    <!-- ===============================================-->
    <link rel="apple-touch-icon" sizes="180x180" href="<%=request.getContextPath()%>/resources/assets/img/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<%=request.getContextPath()%>/resources/assets/img/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<%=request.getContextPath()%>/resources/assets/img/favicons/favicon-16x16.png">
    <link rel="shortcut icon" type="image/x-icon" href="<%=request.getContextPath()%>/resources/assets/img/favicons/favicon.ico">
    <link rel="manifest" href="<%=request.getContextPath()%>/resources/assets/img/favicons/manifest.json">
    <meta name="msapplication-TileImage" content="<%=request.getContextPath()%>/resources/assets/img/favicons/mstile-150x150.png">
    <meta name="theme-color" content="#ffffff">


    <!-- ===============================================-->
    <!--    Stylesheets-->
    <!-- ===============================================-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400;500;600;700&amp;family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,300&amp;display=swap" rel="stylesheet">
    <link href="<%=request.getContextPath()%>/resources/assets/css/theme.css" rel="stylesheet" />
    <link href="<%=request.getContextPath()%>/resources/assets/css/user.css" rel="stylesheet" />
	<style>
	
	.bg-10000 {
   		background-color: #9499b7 !important;
	}
	.bg-10000 h2, .bg-10000 .text-5000 {
		color: #e8eaf6
	}
	.contract_p { margin-top:20px;}
	.contact_description {font-family: 'Avenir Light'; font-size:16px;}
	</style>
  </head>


  <body>

    <!-- ===============================================-->
    <!--    Main Content-->
    <!-- ===============================================-->
    <%@ include file="../header.jsp" %>
    
    <main class="main" id="top">
      
      <section class="py-7 py-lg-10" id="home">
        <div class="bg-holder bg-size" style="background-image:url(<%=request.getContextPath()%>/resources/assets/img/illustration/2.png);background-position:left top;background-size:contain;">
        </div>
        <!--/.bg-holder-->

        <div class="bg-holder d-none d-xxl-block hero-bg" style="background-image:url(<%=request.getContextPath()%>/resources/assets/img/illustration/1.png);background-position:right top;background-size:contain;">
        </div>
        <!--/.bg-holder-->
		<form name="contractForm" id="contractForm">
	        <div class="container">
	          <div class="row align-items-center h-100 justify-content-center justify-content-lg-start" >
	            <div class="col-md-9 col-xxl-5 text-md-start text-center py-6 pt-8">
	              <h1 class="fs-4 fs-md-5 fs-xxl-4" data-zanim-xs='{"delay":0.3}' data-zanim-trigger="scroll">Send Me a Message?</h1>
	              <div>
	              	<p class="contract_p" data-zanim-xs='{"delay":0.5}' data-zanim-trigger="scroll">이메일(E-mail)</p>
	              
	              	<input class="form-control" type="text" id="email" name="email" placeholder="Email Address" data-zanim-trigger="scroll"/>
	              	<p class="contract_p" data-zanim-xs='{"delay":0.5}' data-zanim-trigger="scroll">이름(Name)</p>
	              	<div class="" style="display: flex;" data-zanim-trigger="scroll">
	              		<input class="form-control" type="text" id="firstName" name="firstName" placeholder="First Name" data-zanim-trigger="scroll"/>
	              		<input class="form-control" type="text" id="lastName" placeholder="Last Name" data-zanim-trigger="scroll"/>
	              	</div>
	              	<p class="contract_p" data-zanim-xs='{"delay":0.5}' data-zanim-trigger="scroll">메세지(Message)</p>
	              	<textarea type="text" style="width: 100%; height:100px;margin-bottom:20px;"id="message" name="message" data-zanim-trigger="scroll"></textarea>
		            <a class="btn btn-sm btn-primary me-1" onclick="javascript:submit();" href="#!" role="button">Send</a>
		          </div>
	            </div>
	          </div>
	        </div>
        </form>
      </section>




    </main>
    
    <%@ include file="../footer.jsp" %>

    <!-- ===============================================-->
    <!--    JavaScripts-->
    <!-- ===============================================-->
    <script src="<%=request.getContextPath()%>/resources/vendors/popper/popper.min.js"></script>
    <script src="<%=request.getContextPath()%>/resources/vendors/bootstrap/bootstrap.min.js"></script>
    <script src="<%=request.getContextPath()%>/resources/vendors/anchorjs/anchor.min.js"></script>
    <script src="<%=request.getContextPath()%>/resources/vendors/is/is.min.js"></script>
    <script src="<%=request.getContextPath()%>/resources/vendors/fontawesome/all.min.js"></script>
    <script src="<%=request.getContextPath()%>/resources/vendors/lodash/lodash.min.js"></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js"></script>
    <script src="<%=request.getContextPath()%>/resources/vendors/imagesloaded/imagesloaded.pkgd.js"></script>
    <script src="<%=request.getContextPath()%>/resources/vendors/gsap/customEase.js"></script>
    <script src="<%=request.getContextPath()%>/resources/vendors/gsap/scrollToPlugin.js"></script>
    <!--script(src=`${CWD}<%=request.getContextPath()%>/resources/vendors/gsap/drawSVGPlugin.js`)-->
    <script src="<%=request.getContextPath()%>/resources/assets/js/theme.js"></script>
    <script>
    	window.onload = function(){
	    	  console.log("<%=request.getContextPath()%>/resources");
    	  }
    	
    	function submit (){
    		callAjax('/contract/save', 'post', 'contractForm', successModal());
    	}
    	
    	function successModal(){
    		alert("Request Success!");
    	}
    </script>
    

  </body>

</html>