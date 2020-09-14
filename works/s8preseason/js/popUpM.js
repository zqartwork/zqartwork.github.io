/*//////////// Pop Up ////////////*/
/* M004 PopUP - SelfMake */
/* MIT license */
	
	
	
		/* add the overlap */
			
			
		$("body").append("<div class='overPopM' href='#Show' style='position:fixed;display:none;top:0px;left:0px;width:100%;height:100%;background-color:hsla(0, 0%, 0%, 0.8);z-index:99999;'></div><div  class='overPopShowM'><a href='#close' class='closebbM'></a></div>");
		
	
		/* for close */
		function closeMM(){
			$(".overPopM").fadeOut(200);
			$(".overPopShowM").fadeOut(200);
			$(".hideFirstM").hide();
			$(".closebbM").hide();
		}
	
		$(".overPopM").click(function(){  
		closeMM();}	);
		
		$(".closebbM").click(function(){  
		closeMM();}	);
		
		$(".close").click(function(){  
		closeMM();}	);
	
		function overPopM(pathid){ /* for open, call by href javascript */
			$(".overPopShowM").append($("#"+pathid));
			$(".overPopM").fadeIn(300);
			$(".overPopShowM").fadeIn(300);

			
			$(".overPopShowM").children().hide();
			$("#"+pathid).show();
			$(".closebbM").show();
									
			var aa=$("body").scrollTop();
			var bb=$("html").scrollTop();
			var now=0;
			if (aa>=bb){
				now=aa;
			}else if (bb>aa){
				now=bb;
			}else{
				now=0;
			}
			$(".overPopShowM").css('top',now+'px')
		}
		
		
		
	
/* overPopM code end */