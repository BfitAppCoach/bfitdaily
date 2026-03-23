//삼선메뉴 이벤트
$(document).ready(function(){
    $('.menu').mouseover(function(){
        $('.m_sp0').css({
            width : '30px'
        });
    });
    $('#header').mouseleave(function(){
        $('.m_sp0').css({
            width : '15px'
        });
    });
});
//드롭메뉴 이벤트
$(document).ready(function(){
    $('.menu').mouseover(function(){
        $('.drop_menu').css({
            'height' : '380px',
			'border-bottom' : '1px solid #f2f2f2'
        });
    });
    $('#header').mouseleave(function(){
        $('.drop_menu').css({
            'height' : '0px',
			'border-bottom' : '0'
        });
    });
});
//메인슬라이드
$(document).ready(function(){
	$('.main_vs').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		infinite: true,
		speed: 3000,
		fade: true,
		pauseOnHover: false,
		pauseOnFocus: true
	});
	var xpaused = false;
	
	$(".pause").on("click", function() {
		if( xpaused ) {
  		$(".main_vs").slick("play");
			$(this).css({"background":"url('/iium_img/controls_pause.png')","background-repeat":"no-repeat"});
  	} else {
  		$(".main_vs").slick("pause");
		$(this).css({"background":"url('/iium_img/controls_start.png')","background-repeat":"no-repeat"});
		
	}
	xpaused = !xpaused;
	  $(this).toggleClass( "paused" );
	});
});
//footer 패밀리사이트
$(document).ready(function(){
	famchk = 0;
	$(".fam_site>a").click(function(){
		if(famchk==0){
			$(this).next("ul").slideDown();
			$(this).css({"background-image":"url('/iium_img/ft_site_icn2.png')"});
			famchk = 1;
		}else{
			$(this).next("ul").slideUp();
			$(this).css({"background-image":"url('/iium_img/ft_site_icn.png')"});
			famchk = 0;
		}
	})
});
//iot탭메뉴
$(document).ready(function(){
    $(".tab_content").hide();
    $(".tab_content:first").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active")
        $(".tab_content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn(500)
    });
});
//모바일메뉴 시작
	//삼선버튼 효과
$(document).ready(function(){
  $(".m_menu").click(function(){
	$(this).toggleClass("is-active");
  });
});
	//삼선버튼 눌렀을때 효과
$(document).ready(function () {  
	function first(){
			$('.m_drop').fadeIn();
			$('.logo').css({"display":"none"});
            $('body').css({"overflow-y":"hidden"});
			$(".m_menu").one("click", second);
	}
	function second(){
			$('.m_drop').fadeOut();
			$('.logo').css({"display":"inline-block"});
            $('body').css({"overflow-y":"auto"});
			$(this).one("click", first);
	}
	 $(".m_menu").one("click", first);
});
	//메뉴 안에 아코디언 효과
$(document).ready(function(){
$('.m_drop li.active').addClass('open').children('ul').show();
	$('.m_drop li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});

});
//모바일메뉴 끝
//**sub3_02 js -> slick > product.js


