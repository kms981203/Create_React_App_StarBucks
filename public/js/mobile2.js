$(function(){
	
	//앱바 클릭 - 모바일 우측에서 좌측으로 슬라이딩 이동
	$('.appBarBtn').on({
		click:	function(){
			$('.gnb-modal').stop().show(0);
			$('.mobile-slide-wrap').stop().animate({right:0},500);
		}
	});
	
	//모바일 닫기버튼 클릭 - 모바일 좌측에서 우측으로 슬라이딩 이동
	$('.mobileCloseBtn').on({
		click:	function(){
			$('.mobile-slide-wrap').stop().animate({right:'-100%'},300);
			$('.gnb-modal').stop().delay(300).hide(0);
		}
	});
	
	
	
	
	
	$('.msub').slideUp(0);
	$('.mBtn').on({
		click:	function(){
			$(this).next().slideToggle(300);
			$(this).toggleClass('addBtnArrowUp');
		}
	});

	

});//mobile2.js