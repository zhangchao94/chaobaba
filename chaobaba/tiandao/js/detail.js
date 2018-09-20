$(function(){
	
	$(".detail-head").load("header.html")
	$(".detail-foot").load("footer.html")
	
	
	if(getHash("type")){
		var a = getHash("type"),
			b = getHash("id");
		loadDetail(a,b)
	}
	
	//请求服务端数据
	function loadDetail(type,id){
		$.ajax({
			type: 'get',
			url: './js/article.php',
			data: {
				'type' : type || "",
				'id' : id || ""
			},
			dataType: 'text',
			error: function(e){
				console.log(e)
			},
			success: function(data){
				//处理返回结果
				data = JSON.parse(data).data;
				
				$("#muban>h1").html(data.typeTitle);
				$("#muban>h3").html(data.title);
				$("#muban .create-date").html(data.creatAt);
				$("#muban .create-user").html(data.creatByFullName);
				$("#muban>.box>img").attr("src",data.coverImg);
				$("#muban .text").html(data.content);
				
				console.log(data)
			}
		})
	}
	
	//获取地址栏数据
	function getHash(name){
		var data = window.location.search.slice(1);
		var reg = new RegExp("(^|&)"+name+"=([a-zA-Z0-9]*)(&|$)");
		var res = reg.exec(data)
		
		if(res){
			return res[2];
		}else{
			return "";
		}
	}
})
