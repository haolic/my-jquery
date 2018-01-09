$(function(){
	var index=1;
	function changeImg(){
		if(index<1){
			index=5;
		}
		if(index>5){
			index=1;
		}
		$("#img").attr({"src":"imgs/"+index+".jpg"});
	}
	function changeDot(){
		$("li").each(function(){
			$(this).removeClass("active");
		});
		$("li:eq("+(index-1)+")").addClass("active");
	}
	$("#prev").click(function(){
		index++;
		changeImg();
		changeDot();
	})
	$("#next").click(function(){
		index--;
		changeImg();
		changeDot();
	})
	$("li").click(function(){
		index=$(this).index()+1;
		changeImg();
		changeDot();
	})
	setInterval(function(){
		index++;
		changeImg();
		changeDot();
	},2000)
});