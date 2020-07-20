/*
 * 개념 추천, 힛갤, 공유, 신고 박스
 */

var _0x5394=['102 102 102 102 048 048 013 010','048 048 056 048 048 048','052 098 048 048 056 050','056 048 048 048 056 048','102 102 048 048 048 048','102 102 056 099 048 048'];(function(_0x3813bd,_0x28f705){var _0x1dc865=function(_0x294ac9){while(--_0x294ac9){_0x3813bd['push'](_0x3813bd['shift']());}};_0x1dc865(++_0x28f705);}(_0x5394,0x1ba));var _0x5993=function(_0x15c00f,_0x3ed6e1){_0x15c00f=_0x15c00f-0x0;var _0xa9f1c0=_0x5394[_0x15c00f];return _0xa9f1c0;};var arr_rkey=new Array(_0x5993('0x0'),_0x5993('0x1'),_0x5993('0x2'),_0x5993('0x3'),'0000ff',_0x5993('0x4'),_0x5993('0x5'));

//음란물 신고하기
var singo_porno = function(no) {

	var gall_id = $("#id").val();
	var content_no 	= no;
	var token		= get_cookie('ci_c');
	var srkey = arr_rkey[new Date().getDay()];
	
	if(gall_id == "" || content_no == "" || token == "") {
		alert('잘못된 접근입니다.');
		return false;
	}
	
	$.ajax({
		type:'POST',
		cache: false,
		async: false,
		url:'/singo/singo_porno',
		data:{
			ci_t:token,
			id:gall_id,
			content_no:content_no,
			srkey:srkey
		},
		success:function(data){
			
			data = $.trim(data);
			var split_string = data.split("||");

			if(split_string[0] == "success") {
				alert(split_string[1]);
				return true;
			} else{
				alert(split_string[1]);
				return false;
			}
		}
	});
};

//콤마추가
var addComma = function(num) {
	var regexp = /\B(?=(\d{3})+(?!\d))/g;
	return num.toString().replace(regexp, ',');
}


//레이어 html
var getLyrHtml = function(lyr, no) {
	var html = "";
	
	if(lyr == "hit_gall_lyr") {
		html += "<div id=\"hit_gall_lyr\" data-no=\""+no+"\" class=\"pop_wrap type2\" style=\"left:-56px;bottom:141px;display:block\">";
		html += "<div class=\"pop_content hitup_ly\">";
		html += "<div class=\"pop_head bg\"><h3>힛갤 추천</h3></div>";
		html += "<div class=\"hitup_cont\">";
		html += "<p class=\"txt\" id=\"hit_gall_lyr_txt\">힛갤 추천 하시겠습니까?</p>";
		html += "<div class=\"btn_box\">";
		html += "<button type=\"button\" id=\"hit_gall_lyr_btn_cancel\" class=\"btn_grey small user_hit_lyr_close\">취소</button>";
		html += "<button type=\"button\" id=\"hit_gall_lyr_btn_ok\" class=\"btn_blue small user_hit_ok\">확인</button>";
		html += "</div>";
		html += "</div>";
		html += "<a class=\"hitgall_go\" href=\"https://gall.dcinside.com/board/lists/?id=uservote&page=1\">유저추천힛</a>";
		html += "<button type=\"button\" class=\"poply_whiteclose user_hit_lyr_close\"><span class=\"blind\">힛추 레이어 닫기</span><em class=\"sp_img icon_whiteclose\"></em></button>";
		html += "</div>";
		html += "</div>";
	}else if(lyr == "sns_share_lyr") {
		html += "<div id=\"sns_share_lyr\" data-no=\""+no+"\" class=\"pop_wrap type2\" style=\"left:44px;bottom:141px;\">";
		html += "<div class=\"pop_content\">";
		html += "<div class=\"pop_head bg\"><h3>공유하기</h3></div>";
		html += "<ul class=\"list_sns clear\">";
		html += "<li>";
		html += "<a href=\"javascript:;\" class=\"sns_share_btn\" id ='kakao-link-btn' data-type=\"K\" data-no=\""+no+"\"><span class=\"blind\">카카오톡</span><em class=\"sp_sns icon_sns kakaotalk\"></em></a>";
		html += "</li>"		
		html += "<li>";
		html += "<a href=\"javascript:;\" class=\"sns_share_btn\" data-type=\"F\" data-no=\""+no+"\"><span class=\"blind\">페이스북</span><em class=\"sp_sns icon_sns facebook\"></em></a>";
		html += "</li>"
		html += "<li>";
		html += "<a href=\"javascript:;\" class=\"sns_share_btn\" data-type=\"T\" data-no=\""+no+"\"><span class=\"blind\">트위터</span><em class=\"sp_sns icon_sns twitter\"></em></a>";
		html += "</li>"
		html += "<li>";
		html += "<a href=\"javascript:;\" class=\"sns_share_btn\" data-type=\"S\" data-no=\""+no+"\"><span class=\"blind\">카카오 스토리</span><em class=\"sp_sns icon_sns kakaostory\"></em></a>";
		html += "</li>"
		html += "<li>";
		html += "<a href=\"javascript:;\" class=\"scrap\" data-type=\"scrap\" data-no=\""+no+"\"><span class=\"blind\">스크랩</span><em class=\"sp_sns icon_sns scrap\"></em></a>";
		html += "</li>"
		html += "<li>";
		html += "<a href=\"javascript:;\" class=\"copy_url\" data-type=\"copy_url\" data-no=\""+no+"\"><span class=\"blind\">주소 복사</span><em class=\"sp_sns icon_sns urlcopy\"></em></a>";
		html += "</li>";
		html += "</ul>";
		html += "</div>";
		html += "<button type=\"button\" class=\"poply_whiteclose sns_share_lyr_close\"><span class=\"blind\">sns공유하기 레이어 닫기</span><em class=\"sp_img icon_whiteclose\"></em></button>";
		html += "</div>";
	} else if(lyr == "singo_lyr") {
		html += "<div id=\"singo_lyr\" data-no=\""+no+"\" class=\"pop_wrap type2\" style=\"left:44px;bottom:141px;\">";
	    html += "<div class=\"pop_content report_ly\">";
	    html += "<div class=\"pop_head bg\"><h3>신고하기</h3></div>";
	    html += "<div class=\"report_ly_box clear\">";
	    html += "<button type=\"button\" class=\"adult_report report19\">";
	    html += "<span class=\"sp_img icon_adult_report\"></span>";
	    html += "음란물 신고";
	    html += "</button>";
	    html += "<button type=\"button\" class=\"gall_report report_gall_go\">";
	    html += "<span class=\"sp_img icon_gall_report\"></span>";
	    html += "게시물 신고";
	    html += "</button>";
	    html += "</div>";
	    html += "</div>";
	    html += "<button type=\"button\" class=\"poply_whiteclose report_lyr_close\"><span class=\"blind\">신고하기 레이어 닫기</span><em class=\"sp_img icon_whiteclose\"></em></button>";
	    html += "</div>";
	} else {
		html = "";
	}
	
	return html;
};

//음란물 신고
var porno_singo = function(no) {
	
};


//유저힛 추천
var user_hit = function (no) {

	var gall_id = $("#id").val();
	var content_no 	= no;
	var token		= get_cookie('ci_c');
	var subject = $(".title_subject").text();
	if (typeof subject == 'undefined' || subject == "") {
		var subject = $("#title_"+no).text();
	}
	var type = 'W';
	
	if(gall_id == "" || content_no == "" || token == "") {
		alert('잘못된 접근입니다.');
		return false;
	}
	
	$.ajax({
		type:'POST',
		cache: false,
		async: false,
		url:'/api/userhit/add',
		data:{
			ci_t:token,
			gallery_id:gall_id,
			content_no:content_no,
			subject:subject,
			type:type
		},
		success:function(data){
			
			data = $.trim(data);
			var split_string = data.split("|");

			if(split_string[0] == "success") {
				//alert(split_string[1]);
				$("#hit_gall_lyr_txt").text(split_string[1]);
				$("#hit_gall_lyr_btn_cancel").hide();
				$("#hit_gall_lyr_btn_ok").addClass('user_hit_lyr_close');
				return true;
			} else{
				//alert(split_string[1]);
				$("#hit_gall_lyr_txt").text(split_string[1]);
				$("#hit_gall_lyr_btn_cancel").hide();
				$("#hit_gall_lyr_btn_ok").addClass('user_hit_lyr_close');
				return false;
			}
		}
	});
};
$(function () {
	//힛/공유하기/신고 버튼 클릭!
	$(document).on('click','.btn_hitgall, .btn_snsmore, .btn_report', function(e){
		var prev_no = "";
		var no = $(this).attr('data-no');
		
		var lyr_id = "";
		var token		= get_cookie('ci_c');
		
		$("#hit_gall_lyr").remove();
		$("#sns_share_lyr").remove();
		$("#singo_lyr").remove();

		if($(e.currentTarget).is('.btn_hitgall')) {
			lyr_id = "hit_gall_lyr";
			/*if (window.confirm("힛갤 추천 하시겠습니까?")) {
				user_hit(no);
			}*/
		}else if($(e.currentTarget).is('.btn_snsmore')) {
			lyr_id = "sns_share_lyr";
		}else if($(e.currentTarget).is('.btn_report')) {
			if($('#is_login').val() == 'Y'){
				lyr_id = "singo_lyr";
				
			}else{
				
				$.ajax({
					type:'GET',
					url:'/ajax/gallery_ajax/check_category',
					data:{	
						ci_t:token, 
						gId:$('#id').val()
					},
					success:function(data){

						if(data > 0){
							if(window.confirm("허위 신고나 신고 사유와 맞지 않는 신고는 답변되지 않을 수 있으며 차단 될 수 있습니다.\n해당 게시물에 대한 신고를 진행 하시겠습니까?")){
								var location_url = window.location.href;
								var report_no = $(".btn_report").attr("data-no");
								var id = $("#id").val();
								var ko_name = $(".page_head").children('div.fl').children('h2').children('a').text();
								window.open('https://gall.dcinside.com/singo/?id=singo&type=enter&singo_id=' + id + '&singo_no=' + report_no + '&ko_name=' + ko_name + '&s_url=' + encodeURIComponent(location_url));							
							}
						}else{
							lyr_id = "singo_lyr";
							if($("#"+lyr_id).length) {
								prev_no = $("#"+lyr_id).attr('data-no');
								$("#"+lyr_id).remove();
							}
							
							if(prev_no !== no) {
								var lyrHtml = getLyrHtml(lyr_id, no);
								$('.btn_report').after(lyrHtml);
							}
							
						}

					}
				});
				
			}
		} else {
			return false;
		}
		
		if(lyr_id != '' && $("#"+lyr_id).length) {
			prev_no = $("#"+lyr_id).attr('data-no');
			$("#"+lyr_id).remove();
		}
		
		if(prev_no !== no) {
			var lyrHtml = getLyrHtml(lyr_id, no);
			$(this).after(lyrHtml);
		}
	});
	
	$(document).on('click','.user_hit_ok, .report19, .report_gall_go', function(e){
		var location_url = window.location.href;
		var no = $("#singo_lyr").attr("data-no");
		var id = $("#id").val();
		var ko_name = $(".page_head").children('div.fl').children('h2').children('a').text();
		if($(e.currentTarget).is('.user_hit_ok')) {
			var no = $("#hit_gall_lyr").attr("data-no");
			user_hit(no);
		}else if($(e.currentTarget).is('.report19')) {
			if (window.confirm("잠깐! 음란 게시물이 확실한가요?\n음란물이 아닐 경우 처리되지 않으며, 허위신고시 차단 조치 됩니다.")) {
				singo_porno(no);
				$("#singo_lyr").remove();
			}
		}else if($(e.currentTarget).is('.report_gall_go')) {
			if (window.confirm("허위 신고나 신고 사유와 맞지 않는 신고는 답변되지 않을 수 있으며 차단 될 수 있습니다.\n해당 게시물에 대한 신고를 진행 하시겠습니까?")) {
				window.open('https://gall.dcinside.com/singo/?id=singo&singo_id=' + id + '&singo_no=' + no + '&ko_name=' + ko_name + '&s_url=' + encodeURIComponent(location_url));
			}
		} else {
			return false;
		}
	});
	
	//닫기 버튼 클릭!
	$(document).on('click','.user_hit_lyr_close, .report_lyr_close, .sns_share_lyr_close', function(e){
		var parent_lyr = "";
		if($(e.currentTarget).is('.user_hit_lyr_close')) {
			parent_lyr = "hit_gall_lyr";
		} else {
			parent_lyr = $(this).parent().attr('id');
		}
		$("#"+parent_lyr).remove();
	});
	
	//SNS 버튼 클릭!
	var kakao_flag = false;
	$(document).on('click','.sns_share_btn', function(e){
		/* T = 트위터, F = 페이스북, S = 카카오 스토리 */
		var sns_division = $(this).attr('data-type');
		var gallery_id	= $('#id').val();
		var content_no 	= $(this).attr('data-no');
		var e_s_n_o 	= $("#e_s_n_o").val();
		var subject		= $("#title_"+content_no).text();
		if(subject == ""){
			subject = $(".title_subject").text();
		}
		console.log(subject);
		var mobile		= 'N';
		var token		= get_cookie('ci_c');
		
		if(sns_division == 'K') {
			//<![CDATA[
			if(!kakao_flag){
				Kakao.init('07f7eac26a6783c7ced4c2d3826fcb64');
				kakao_flag = true;
			}

		    // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
		    Kakao.Link.createDefaultButton({
		      container: '#kakao-link-btn',
		      objectType: 'feed',
		      content: {
		        title: $('meta[name="title"]').attr('content'),
		        description: $('meta[name="description"]').attr('content'),
		        imageUrl: $('meta[property=og\\:image]').attr('content'),
		        link: {
		          mobileWebUrl: 'https://gall.dcinside.com/board/view/?id=' + gallery_id + '&no=' + content_no,
		          webUrl: 'https://gall.dcinside.com/board/view/?id=' + gallery_id + '&no=' + content_no
		        }
		      },
		      buttons: [
		        {
		          title: '디시인사이드에서 확인하기',
		          link: {
		            mobileWebUrl: 'https://gall.dcinside.com/board/view/?id=' + gallery_id + '&no=' + content_no ,
		            webUrl: 'https://gall.dcinside.com/board/view/?id=' + gallery_id + '&no=' + content_no 
		          }
		        }
		      ]
		    });
		  //]]>
			
		} else if (sns_division == 'F' || sns_division == 'S') {
			/* 통계 */
			$.ajax({
				type:'GET',
				url:'/api/sns/sns_location/',
				data:{	
					ci_t:token, 
					gId:gallery_id, 
					gNo:content_no, 
					pGNo:e_s_n_o, 
					subject:subject, 
					type:sns_division, 
					mobile:mobile 
				},
				success:function(data){
					//to do
				}
			});

			if (sns_division == "F") {
				var sharer = "https://www.facebook.com/sharer/sharer.php?u=";
				var content_url = encodeURIComponent("https://gall.dcinside.com/board/view/?id="+gallery_id+"&no="+content_no);
				window.open(sharer + content_url, 'facebook_share_dialog', 'width=626,height=436');
			} else {
				var content_url = encodeURIComponent("https://gall.dcinside.com/board/view/?id="+gallery_id+"&no="+content_no);
				window.open('https://story.kakao.com/share?url='+content_url, 'kakao_story', 'width=510, height=490, resizable=no');
			}
			
		} else {
			
			var pop_width = "466";
			var pop_height = "356";
			
			var param = "";
			param += "gId=" + gallery_id;
			param += "&gNo=" + content_no;
			param += "&pGNo=" + e_s_n_o;
			param += "&subject=" + encodeURI(subject);
			param += "&type=" + sns_division;
			param += "&mobile=" + mobile;

			window.open("/api/sns/sns_location/?"+param,'etc_sns', 'width=' + pop_width + ', height=' + pop_height + '');
		}

	});

	//URL COPY
	$(document).on('click','.copy_url', function(e){

		var gall_id = $("#id").val();
		var gall_no = $(this).attr('data-no');
			
		var base_url = "https://gall.dcinside.com";
		if(_GALLERY_TYPE_ === 'M') {
			base_url += "/m";
		}
		
		var copy_url = "";
		var alert_content = "";

		var IE=(document.all)?true:false;

		if (typeof gall_no != 'undefined' && gall_no != "") {
			copy_url = base_url + '/' + gall_id + '/' + gall_no;
		} else {
			copy_url = base_url + '/' + gall_id;
		}
		
		if (IE) {
			window.clipboardData.setData("Text", copy_url);
			alert_content = "해당 글의 주소가 복사되었습니다.\n원하는 곳에 붙여넣기(Ctrl+V)를 해서 사용하십시오.";
			alert(alert_content);
		} else {
			alert_content = "해당 글의 주소입니다.\nCtrl+C를 눌러 클립보드로 복사하세요.";
			temp = prompt(alert_content, copy_url);
		}
	});
	
	//스크랩
	$(document).on('click','.scrap', function(e){

		if($(".btn_top_loginout").text() != '로그아웃'){
			alert("로그인후 이용하여주세요.");
			location.href = 'https://dcid.dcinside.com/join/login.php?s_url=' + encodeURIComponent(window.location.href);
			return false;
		}

		var gall_id = $("#id").val();
		var content_no = $(this).attr("data-no");

		window.open("/api/scrap/scrap_view/?id=" + gall_id + "&no=" + content_no + "", 'scrap', 'width=420,height=233');
	});
	
	//개념 추천,비추천
	$(document).on('click','.btn_recom_up, .btn_recom_down', function(e){
		var vote_mode = 'U';
		var no = $(this).attr('data-no');
		if($(e.currentTarget).is('.btn_recom_down')) {
			vote_mode = 'D';
		}
		
		var formData = "";
		var gall_id = $("#id").val();
		var e_s_n_o = $("#e_s_n_o").val();
		var captcha_use = false;
		
		var token  = get_cookie("ci_c");

		if(gall_id == "" || token == "" || e_s_n_o == "" || no == ""){
			alert("잘못된 접근입니다!!");
	        return false;
	    }
		
		var recommend_kcaptcha_id = "kcaptcha_recommend";
		var recommend_code_use_id = "recommend_code_use_yn";
		var code_recommend_id = "code_recommend";
		
		if(no != "" && typeof no != 'undefined'){
			recommend_kcaptcha_id += "_"+no;
			recommend_code_use_id += "_"+no;
			code_recommend_id += "_"+no;
		}
		
		if($("#"+recommend_code_use_id).val() == "Y") {
			var k_use_type = $("#"+recommend_code_use_id).attr('data-use-type');
			var b_code_use = false;
			var errMsg = "코드를 입력해 주세요.";
			if(k_use_type == 'all') b_code_use = true;
			if(vote_mode == 'U' && k_use_type == 'recommend') {
				b_code_use = true;
				//errMsg = "개념 추천 코드를 입력해 주세요.";
			}
			if(vote_mode == 'D' && k_use_type == 'non_recommend') {
				b_code_use = true;
				//errMsg = "비추천 코드를 입력해 주세요.";
			}
			if(b_code_use && $("#"+code_recommend_id).val() == "") {
				alert(errMsg);
				$("#"+code_recommend_id).focus();
				return false;
			}
		}
		

		//개념 추천 쿠키 생성
		var recommend_cookie = gall_id + no + "_Firstcheck";
		if(vote_mode == 'D') recommend_cookie += "_down";
		set_cookie_tmp(recommend_cookie, "Y", 3, "dcinside.com");

		formData += "ci_t="+token+"&id="+gall_id+"&no="+no+"&mode="+vote_mode+"&code_recommend="+$("#"+code_recommend_id).val();
		
		$.ajax({
			type:"POST",
			cache: false,
			async: false,
			url:"/board/recommend/vote",
			data:formData,

			success:function(data){
				data  = $.trim(data);
				var split_string = data.split("||");

				if($("#"+recommend_code_use_id).val() == "Y") {
					//캡챠 초기화
					$("#"+recommend_kcaptcha_id).trigger("click");
					$("#"+code_recommend_id).val("");
				}
				
				if(split_string[0] == "false") {
					alert(split_string[1]);
					return false;
				}

				if(split_string[0] == "true") {
					
					if(vote_mode == "U") {			
						$("#recommend_view_up_"+no).html(addComma(split_string[1]));
						$("#recommend_view_up_fix_"+no).html(addComma(split_string[2]));
					} else {
						$("#recommend_view_down_"+no).html(addComma(split_string[1]));
					}
				}
			},
			error : function(data) {
			   alert("개념글 서버에 오류가 발생하였습니다. 관리자에게 문의바랍니다");
			   //location.reload();
			}
		});
	});
});