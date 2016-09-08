$(".nav .sup:not(.current) a").mouseenter(function(){
	$(this).parent().hasClass("current") || $(this).css("color", "rgb(1,204,206)");
}).mouseleave(function(){
	$(this).css("color", "");
}).click(function(){
	$(this).css("color","").parent().addClass("current").siblings().removeClass("current");
});
$(".nav .sup").eq(1).mouseenter(function(){
	$(this).find(".alllist").show();
}).mouseleave(function(){
	isEnterSub || $(".nav .sup .alllist").hide();
});
var isEnterSub;
$(".nav .sup .alllist").mouseenter(function(){
	isEnterSub = 1;
	$(this).show();
}).mouseleave(function(){
	isEnterSub = 0;
	$(this).hide();
}).find(".list a").mouseenter(function(){
	$(this).css({
		backgroundColor:"rgb(1,204,206)",
		"color":"white"
	})
}).mouseleave(function(){
	$(this).css("backgroundColor","white")
});
$(".nav .sup").eq(3).mouseenter(function(){
	$(this).find(".alllist2").show();
}).mouseleave(function(){
	isEnterSub || $(".nav .sup .alllist2").hide();
});
var isEnterSub;
$(".nav .sup .alllist2").mouseenter(function(){
	isEnterSub = 1;
	$(this).show();
}).mouseleave(function(){
	isEnterSub = 0;
	$(this).hide();
}).find(".list2 a").mouseenter(function(){
	$(this).css({
		backgroundColor:"rgb(1,204,206)",
		"color":"white"
	})
}).mouseleave(function(){
	$(this).css("backgroundColor","white")
});
$.ajax({
	type:"get",
	url:"http://www.ikindness.cn/api/test/getFund"
}).done(function(data){
	console.log(data.data);

});
