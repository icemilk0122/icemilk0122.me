var mainUrl = "http://www.mooy.com.tw/";
var lang = "_cht";
if($.cookie('lang')==undefined || $.cookie('lang')=="") $.cookie('lang', "cht", { expires: 365, path: '/' });

switch($.cookie('lang'))
{
	case "en":
		lang = "";
		break;
	case "cht":
	default:
		lang = "_cht";
		break;
}

$(function(){
	checklang($.cookie('lang'));
	$("#pdmenu").css("margin-left",$(".sidebar-nav").offset().left-20);
	$( window ).resize(function() {
		$("#pdmenu").css("margin-left",$(".sidebar-nav").offset().left-20);
	});
})

function changlang (lang) {
	checklang(lang);
	$.cookie('lang', lang, { expires: 365, path: '/' });
	location=location;
}

function checklang(lang)
{
	switch(lang)
	{
		case "en":
			$.localise('js/lang/mooy', {loadBase: false,language:"en"});
			break;
		case "cht":
		default:
			$.localise('js/lang/mooy', {loadBase: false,language:"zh-TW"});
			break;
	}
	// 載入以 greeting 為前綴的語言檔
	// 並同時載入 greeting.js 為預設的語言檔
	// 語言檔的路徑是在 js/lang 中
	// 變更顯示在介面上的語言文字
	headerchangeLangs(lang);
	//pagechanheLangs(lang);
}

function headerchangeLangs(lang){
	$("#nav_prdt").html(nav_prdt);
	$("#nav_shop").html(nav_shop);
	$("#nav_about").html(nav_about);
	$("#nav_contact").html(nav_contact);
	$("#footer_newsletter").html(footer_newsletter);
	$("#footer_send").html(footer_send);
	// 設定 .selTitle 的文字內容為變數 selTitle 的值
	switch(lang)
	{
		case "cht":
			$(".lang_cht").addClass("bold");
			if(Device.Width()<768)
			{
				$(".lang_cht").css("color","#000");
			}
			break;
		case "en":
			$(".lang_en").addClass("bold");
			if(Device.Width()<768)
			{
				$(".lang_en").css("color","#000");
			}
			break;
	}
}

//Device
Device = {
	IsMobile: function()
	{
		var useragent = navigator.userAgent;
		if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('iPad') != -1 || useragent.indexOf('Android') != -1 ) {
			return true;
		} else {
			return false;
		}
	},
	IsiPhone: function()
	{
		var useragent = navigator.userAgent;
		if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('iPad') != -1) {
			return true;
		} else {
			return false;
		}
	},
	IsAndroid: function()
	{
		var useragent = navigator.userAgent;
		if (useragent.indexOf('Android') != -1 ) {
			return true;
		} else {
			return false;
		}
	},
	Width: function()
	{
		var useragent = navigator.userAgent;
		if (useragent.indexOf('iPhone') != -1)
		{
			return window.screen.width/* * window.devicePixelRatio*/;
		}else if(useragent.indexOf('Android 2') != -1 )
		{
			return window.outerWidth;
		}else
		{
			return window.screen.width;
		}
	},
	Height: function()
	{
		var useragent = navigator.userAgent;
		/*if (useragent.indexOf('iPhone') != -1)
		{
			return window.screen.height * window.devicePixelRatio;
		}else if(useragent.indexOf('Android 2') != -1 )
		{
			return window.outerHeight;
		}else
		{
			return window.innerHeight;
		}*/
		return window.innerHeight;
	}
};

Shop = {
	Add:function(pid,cid,pdname,desc,desc_cht,colorname,colorname_cht,price,img)
	{
		var shopdata = [];
		if($.cookie("shopdata") != undefined && $.cookie("shopdata") != "null")
		{
			shopdata = JSON.parse($.cookie("shopdata"));
		}
		if(shopdata != [] && getObjects(shopdata, 'cid', cid) == [])
		{
			shopdata.push({pid:pid,img:img,qty:1,cid:cid,price:price,pdname:pdname,desc:desc,desc_cht:desc_cht,colorname:colorname,colorname_cht:colorname_cht,price:price});
		}
		$.cookie("shopdata", JSON.stringify(shopdata), { path: '/' });
		return true;
	},
	Remove:function(cid)
	{
		var shopdata = [];
		if($.cookie("shopdata") != undefined && $.cookie("shopdata") != "null")
		{
			shopdata = JSON.parse($.cookie("shopdata"));
		}
		if(shopdata != [] && getObjects(shopdata, 'cid', cid) != [])
		{
			delObjects(shopdata, 'cid', cid);
		}
		$.cookie("shopdata", JSON.stringify(shopdata), { path: '/' });
		return true;
	},
	Update:function(cid,qty)
	{
		var shopdata = [];
		if($.cookie("shopdata") != undefined && $.cookie("shopdata") != "null")
		{
			shopdata = JSON.parse($.cookie("shopdata"));
		}
		if(shopdata != [] && getObjects(shopdata, 'cid', cid) != [])
		{
			updateObjects(shopdata, 'cid', cid, 'qty',qty);
		}
		$.cookie("shopdata", JSON.stringify(shopdata), { path: '/' });
		return true;
	},
	List:function()
	{
		if($.cookie("shopdata") != undefined && $.cookie("shopdata") != "null")
		{
			return JSON.parse($.cookie("shopdata"));
		}
		return [];
	}
}

function getObjects(obj, key, val)
{
    var newObj = false;
    $.each(obj, function()
    {
        var testObject = this;
        $.each(testObject, function(k,v)
        {
            //alert(k);
            if(val == v && k == key)
            {
                newObj = testObject;
            }
        });
    });

    return newObj;
}

function delObjects(obj, key, val)
{
    for(var i=0;i<obj.length;i++)
	{
		if(obj[i][key] == val)
		{
			obj.splice(i,1);
		}
	}
    return obj;
}

function updateObjects(obj, key, val, target, newval)
{
    for(var i=0;i<obj.length;i++)
	{
		if(obj[i][key] == val)
		{
			obj[i][target] = newval;
		}
	}
    return obj;
}
