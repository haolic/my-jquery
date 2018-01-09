$(function(){
	var index = 0;
	var sporting;
	function moveImgs(distance){
		sporting = true;
		$("#imgs").animate({"left":"+=" + distance + "px"},1000,"easeInOutExpo",function(){
			if (parseInt($("#imgs").css("left")) < -2600) {
				$("#imgs").css({"left" : "-520px"});
			};
			if (parseInt($("#imgs").css("left")) > -520) {
				$("#imgs").css({"left" : "-2600px"});
			};
			sporting = false;
		});
	};//moveImgs()结束；


// ===============changeDot()函数================================
	function changeDot(dotIndex){
		$("#spans span").removeClass("active");
		$("span:eq(" + dotIndex + ")").addClass("active");
	}//changeDot()结束；


// =============通过click调用图片移动函数及dot改变函数======
	function nextImg(){//此nextImg()函数不能作为#next点击时的回调函数，原因：实现自动轮播需要调用此函数；
		if (sporting){
			return;
		}
		index++;
		if (index > 4){//此处判断放到changeDot()函数内部会错乱，原因暂未深究；
			index = 0;
		}
		changeDot(index);
		moveImgs(-520);
	}
	$("#next").click(nextImg);
	$("#prev").click(function(){
		if (sporting){
			return;
		}
		index--;
		if (index < 0){
			index = 4;
		}
		changeDot(index);
		moveImgs(520);
	});
	$("#spans span").click(function(){
		if (sporting){
			return;
		}
		moveImgs(520 * (index - $(this).index()));
		index = $(this).index();
		changeDot(index);
	});
	setInterval(nextImg,3000);
});
// =================2017-07-29_by_Haolic=============