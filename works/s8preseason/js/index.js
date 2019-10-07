//計時器
$("#getting-started").countdown("2017/03/31", function(event) {
    $(this).html(
        event.strftime('<span>%D</span> 天 <span>%H</span> 時 <span>%M</span> 分 <span>%S</span> 秒')
    );
});

//超值內容顯示
$("#box1 .show").hover(function(){
	$("#box1 .dialog").addClass("show_a");	
}, function() {
    $( "#box1 .dialog").removeClass( "show_a" );
  }
);
$("#box2 .show").hover(function(){
	$("#box2 .dialog").addClass("show_a");	
}, function() {
    $( "#box2 .dialog").removeClass( "show_a" );
  }
);
$("#box3 .show").hover(function(){
	$("#box3 .dialog").addClass("show_a");	
}, function() {
    $( "#box3 .dialog").removeClass( "show_a" );
  }
);


//捲軸
(function($){
	$(window).on("load",function(){
		
		$("a[rel='load-content']").click(function(e){
			e.preventDefault();
			var url=$(this).attr("href");
			$.get(url,function(data){
				$(".content .mCSB_container").append(data); //load new content inside .mCSB_container
				//scroll-to appended content 
				$(".content").mCustomScrollbar("scrollTo","h2:last");
			});
		});
		
		$(".content").delegate("a[href='top']","click",function(e){
			e.preventDefault();
			$(".content").mCustomScrollbar("scrollTo",$(this).attr("href"));
		});
		
	});
})(jQuery);


//購買流程
$(".step_Y").hide();
$(".step_N").hide();

function step(){
    $(".step_1").hide();
	$(".step_Y").hide();
	$(".step_N").hide();
}
$(".go_step").click(function(){  
    step();
    $(".step_Y").fadeIn(300);
});