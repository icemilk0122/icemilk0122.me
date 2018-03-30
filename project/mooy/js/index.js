var adarr=[];
var ad2arr=[];
var items;
$(function(){
	var source;
	var template;
	var html;
	$.ajax({
		type: "POST",
		url: mainUrl + "get_images.php",
		dataType:"json",
		data:{

		},
		success:function(response){
			$(".header").css("background-image","url("+response.ad[0].bg[0].path+")");
			var len = response.ad[0].slider.length;
			for(var i=0;i<len;i++)
			{
				adarr.push({img:response.ad[0].slider[i]["path"+lang],url:response.ad[0].slider[i]["link"+lang],target:response.ad[0].slider[i]["window"]});
			}
			for(var j=0;j<adarr.length/2;j++)
			{
				ad2arr.push({img1:adarr[2*j].img,url1:adarr[2*j].url,target1:adarr[2*j].target,img2:adarr[2*j+1].img,url2:adarr[2*j+1].url,target2:adarr[2*j+1].target});
			}
			init();
		},
		beforeSend:function(){
			//showloading(true);
		},
		complete:function(){
			//showloading(false);
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('error');
		}
	});
});

Handlebars.registerHelper('checktarget', function(context, options) {
  if(context=="1")
  {
    return "_blank";
  }else
  {
    return "";
  }
});

function init()
{
	if(!Device.IsMobile())
	{
		source = $("#pd2-template").html();
		template = Handlebars.compile(source);
		items = {items:ad2arr};
		html = template(items);
		for(var i=0;i<ad2arr.length;i++)
		{
			$(".carousel-indicators").append('<li data-target="#carousel" data-slide-to="'+i+'"></li>');
		}
		$(".carousel-indicators li:first-child").addClass("active");
	}else
	{
		source = $("#pd1-template").html();
		template = Handlebars.compile(source);
		items = {items:adarr};
		html = template(items);
	}
	$('#pdlist').html(html);
	$('#pdlist .item:first-child').addClass("active");
	$('.carousel').carousel({
		interval: 5000
	})
	$(".left").click(function(){$('.carousel').carousel('prev');});
	$(".right").click(function(){$('.carousel').carousel('next');});
	pagechanheLangs(lang);
}

function pagechanheLangs(lang)
{
	$(".More").html(index_more);
}
