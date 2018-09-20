window.onload = function(){
	
//连接底部
	$(".footer").load("footer.html");
	
//返回顶部


//左上角-轮播图	
	var n = $(".header .section .see>img")[0].offsetWidth;
	$(".arrow").hide();
	var timer1 = null;
	var pic = 0;
	var xh = 0;
	$(".header .section .see>img:eq(0)").clone().appendTo(".see");
	$(".header .section li")[0].style.background = "#3ED2B2";
	$(".header .section li").mouseenter(function(){
		$(".header .section li").css("background","transparent");
		$(this).css("background","#3ED2B2");
		$(".see").animate({"left":-312*$(this).index()},500);
		pic = $(this).index();
		xh  = $(this).index();
	})
	/*声明阀值*/
	var flag = true;
	$(".right").click(function(){
		if(flag){
			play();
			flag = false
		}	
	})
	$(".left").click(function(){
		if(flag){
			if(pic==0){
				$(".see").css("left","-1800px")
				pic = 4;
			}
			pic--;
			$(".see").animate({"left":-312*pic,},500,function(){flag = true});
			if(xh==0){
				xh=4;
			}
			xh--;
			$(".header .section li").css("background","transparent");
			$(".header .section li").eq(xh).css("background","#3ED2B2");
			flag = false
		}
		
	})
	$(".section").on({
		"mouseover":function(){$(".arrow").show(),
								clearInterval(timer1)},
		"mouseout":function(){$(".arrow").hide(), 
								clearInterval(timer1),
        						timer1 = setInterval(play,3000)}
	})
	timer1 = setInterval(play,3000);
	
	function play(){
		if(pic>=4){
			$(".see").css("left","0")
			pic = 0;
		}
		pic++;
		$(".see").animate({"left":-312*pic},500,function(){flag = true});
		if(xh==3){
			xh=-1;
		}
		xh++;
		console.log(xh)
		$(".header .section li").css("background","transparent");
		$(".header .section li").eq(xh).css("background","#3ED2B2");
	}
//轮播结束
	


}
