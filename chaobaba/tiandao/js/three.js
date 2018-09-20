$(function() {
	$(".header").load("header.html")

	$(".footer").load("footer.html")

	//	
	$(".nav>li").eq(0).find(".didi").show();
	$(".nav>li").on("click", function() {
		$(this).find(".didi").slideDown().end().siblings().find(".didi").slideUp().end().siblings()
	})

})