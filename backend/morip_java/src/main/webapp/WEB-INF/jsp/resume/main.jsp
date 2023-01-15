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
<link rel="apple-touch-icon" sizes="180x180"
	href="<%=request.getContextPath()%>/resources/assets/img/favicons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32"
	href="<%=request.getContextPath()%>/resources/assets/img/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16"
	href="<%=request.getContextPath()%>/resources/assets/img/favicons/favicon-16x16.png">
<link rel="shortcut icon" type="image/x-icon"
	href="<%=request.getContextPath()%>/resources/assets/img/favicons/favicon.ico">
<link rel="manifest"
	href="<%=request.getContextPath()%>/resources/assets/img/favicons/manifest.json">
<meta name="msapplication-TileImage"
	content="<%=request.getContextPath()%>/resources/assets/img/favicons/mstile-150x150.png">
<meta name="theme-color" content="#ffffff">


<!-- ===============================================-->
<!--    Stylesheets-->
<!-- ===============================================-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
	href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400;500;600;700&amp;family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,300&amp;display=swap"
	rel="stylesheet">
<link
	href="<%=request.getContextPath()%>/resources/assets/css/theme.css"
	rel="stylesheet" />
<link href="<%=request.getContextPath()%>/resources/assets/css/user.css"
	rel="stylesheet" />
<style>
h1, h2, h3, h4, h5, h6 {
	font-family: 'Work Sans', sans-serif;
}

.container.flex {
	display: flex;
}

.container.border_gray {
	border-bottom: solid 1px gray;
	border-opacity: 0.3;
}

.container.margintop {
	margin-top: 30px;
}

.container.resume {
	height: 200px;
	align-items: flex-end;
	margin-bottom: 100px;
}

.sub_container_title {
	width: 60%;
}

.resumes_wrapper {
	width: 40%;
}

.resume_wrapper.certificate {
	margin-bottom: 20px;
	margin-top: 20px;
}

.resume_wrapper {
	display: flex;
	justify-content: space-between;
	margin-bottom: 70px;
	margin-top: 50px;
}

.resume_wrapper .resume_year {
	width: 30%;
}

.resume_year, .resume_description {
	font-family: 'Avenir Light';
	font-size: 16px;
}

.resume_wrapper .resume_contents_wrapper {
	width: 69%;
}
</style>
</head>


<body>

	<!-- ===============================================-->
	<!--    Main Content-->
	<!-- ===============================================-->
	<%@ include file="../header.jsp"%>


	<section id="head_title">
		<div class="container resume flex">
			<h1 class="text-center display-5 "
				style="color: currentcolor; font-family: 'Work Sans', sans-serif;"
				data-zanim-xs='{"delay":0.3}' data-zanim-trigger="scroll">
				Resume</h1>
		</div>
		<div class="container margintop flex">
			<div class="sub_container_title">
				<h3 style="font-family: 'Work Sans', sans-serif;">Certificate</h3>
			</div>
			<div class="resumes_wrapper" id="certificate_box" >
			</div>
		</div>
		<div class="container margintop flex">
			<div class="sub_container_title">
				<h3 style="font-family: 'Work Sans', sans-serif;">Education</h3>
			</div>
			<div class=resumes_wrapper id="education_box">
				<!-- <div class="resume_wrapper">
					<div class="resume_year">2020.03</div>
					<div class="resume_contents_wrapper">
						<div class="resume_title">
							<h4>호서대학교 법경찰학과(졸업)</h4>
						</div>
						<div class="resume_description">[졸업논문] 사이버범죄의 효과적 대응방안에 관한
							연구</div>
					</div>
				</div>
				<div class="resume_wrapper">
					<div class="resume_year">2020.09</div>
					<div class="resume_contents_wrapper">
						<div class="resume_title">
							<h4>디지털컨버전스 기반 Spring 개발자 양성과정</h4>
						</div>
						<div class="resume_description">비트교육센터</div>
					</div>
				</div>
				<div class="resume_wrapper">
					<div class="resume_year">2020 - Present</div>
					<div class="resume_contents_wrapper">
						<div class="resume_title">
							<h4>Editor</h4>
						</div>
						<div class="resume_description">I'm a paragraph. Click here
							to add your own text and edit me. It’s easy. Just click “Edit
							Text” or double click me to add your own content and make changes
							to the font.</div>
					</div>
				</div> -->
			</div>
		</div>
		<div class="container margintop border_gray flex">
			<div class="sub_container_title">
				<h3 style="font-family: 'Work Sans', sans-serif;">
					Work<br>Experience
				</h3>
			</div>
			<div class=resumes_wrapper id="work_exp_box">
				<!-- <div class="resume_wrapper">
					<div class="resume_year">2020 - Present</div>
					<div class="resume_contents_wrapper">
						<div class="resume_title">
							<h4>Editor</h4>
						</div>
						<div class="resume_description">I'm a paragraph. Click here
							to add your own text and edit me. It’s easy. Just click “Edit
							Text” or double click me to add your own content and make changes
							to the font.</div>
					</div>
				</div>
				<div class="resume_wrapper">
					<div class="resume_year">2020 - Present</div>
					<div class="resume_contents_wrapper">
						<div class="resume_title">
							<h4>Editor</h4>
						</div>
						<div class="resume_description">I'm a paragraph. Click here
							to add your own text and edit me. It’s easy. Just click “Edit
							Text” or double click me to add your own content and make changes
							to the font.</div>
					</div>
				</div>
				<div class="resume_wrapper">
					<div class="resume_year">2020 - Present</div>
					<div class="resume_contents_wrapper">
						<div class="resume_title">
							<h4>Editor</h4>
						</div>
						<div class="resume_description">I'm a paragraph. Click here
							to add your own text and edit me. It’s easy. Just click “Edit
							Text” or double click me to add your own content and make changes
							to the font.</div>
					</div>
				</div> -->
			</div>
		</div>

	</section>


	</main>

	<%@ include file="../footer.jsp"%>

	<!--script(src=`${CWD}<%=request.getContextPath()%>/resources/vendors/gsap/drawSVGPlugin.js`)-->

	<script>
		$(document).ready(function() {
			getList();
		});

		function getList() {
			//1. Draw Certificate
			var type = "res_001";
			$('#certificate_box').empty();
			
			callAjax('/resume/getAllByType/' + type, 'get', '', function(data) {
				$(data).each(function(index, list) {
					var data = '<div class="resume_wrapper certificate"><div class="resume_year">'+list.endDay+'</div><div class="resume_contents_wrapper"><div class="resume_title"><h4>'+list.title+'</h4></div><div class="resume_description">'+list.description+'</div></div></div>'
					$('#certificate_box').append(data);
				});
			});
			
			//2. Draw Education
			var type = "res_002";
			$('#education_box').empty();
			
			callAjax('/resume/getAllByType/' + type, 'get', '', function(data) {
				$(data).each(function(index, list) {
					var data = '<div class="resume_wrapper"><div class="resume_year">'+list.endDay+'</div><div class="resume_contents_wrapper"><div class="resume_title"><h4>'+list.title+'</h4></div><div class="resume_description">'+list.description+'</div></div></div>';
					$('#education_box').append(data);
				});
			});
			
			//3. Work Experience
			var type = "res_003";
			$('#work_exp_box').empty();
			
			callAjax('/resume/getAllByType/' + type, 'get', '', function(data) {
				$(data).each(function(index, list) {
					var data = '<div class="resume_wrapper"><div class="resume_year">'+list.endDay+'<br/>~'+list.startDay+'</div><div class="resume_contents_wrapper"><div class="resume_title"><h4>'+list.title+'</h4></div><div class="resume_description">'+list.description+'</div></div></div>';
					$('#work_exp_box').append(data);
				});
			});
		}
		
	</script>


</body>

</html>