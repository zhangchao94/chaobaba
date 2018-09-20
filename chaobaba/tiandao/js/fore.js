$(function() {
	$(".header").load("header.html")

	$(".footer").load("footer.html")

	//	
	$(".screen>li").hover(function(){
					$(this).stop().animate({"width":600}).siblings().stop().animate({"width":60})
				},function(){
					$(".screen>li").stop().animate({"width":150})
				})
})