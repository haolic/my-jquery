jQuery.fn.extend({
	myTest:function(){
		$(this).html("我的插件开发成功。");
		return($(this));
	}
})