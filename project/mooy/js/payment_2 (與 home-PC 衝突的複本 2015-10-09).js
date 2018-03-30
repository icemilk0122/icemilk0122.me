var items=[];
var total = 0;
$(function(){
	var source;
	var template;
	var html;
	var shopdata = {shopdata:Shop.List()}
	source = $("#paylist-template").html();
	template = Handlebars.compile(source);
	html = template(shopdata);
	$('.paylist').html(html);
	pagechanheLangs();
	caltotal();
	for(var i =0;i<shopdata.shopdata.length;i++)
	{
		items.push({prdt_id:shopdata.shopdata[i].pid,color_id:shopdata.shopdata[i].cid,price:shopdata.shopdata[i].price,qty:shopdata.shopdata[i].qty})
	}
	$('#Shipping_Way').change(function() {caltotal();});
})

Handlebars.registerHelper('total', function(items, options) {
	return this.qty*this.price;
});

function caltotal()
{
	total = 0;
	$( ".subtotal:visible" ).each(function( index ) {
		total += parseInt($( this ).html());
	});
	if(total<590)
	{
		if($('#Shipping_Way').val()=='0')
		{
			$("#Shipping_Fee").html('60');
		}else if($('#Shipping_Way').val()=="1")
		{
			$("#Shipping_Fee").html('100');
		}
	}else
	{
		$("#Shipping_Fee").html('0');
	}
	$("#fee").html(total+parseInt($("#Shipping_Fee").html()));
}

function pagechanheLangs()
{
		if(lang=="_cht")
		{
			$(".cht").css("display","initial");
			$(".en").css("display","none");
		}else
		{
			$(".en").css("display","initial");
			$(".cht").css("display","none");
		}
		$("#pay1_prdt").html(pay1_prdt);
		$("#pay1_qty").html(pay1_qty);
		$(".pay1_total").html(pay1_total);
		$(".pay1_totalprice").html(pay1_totalprice);
		$("#pay2_conti").html(pay1_conti);
		$("#pay2_checkout").html(pay1_checkout);
		$("#pay2_detail").html(pay2_detail);
		$("#pay2_standard").html(pay2_standard);
		$("#pay2_express").html(pay2_express);
		$(".pay2_delivery").html(pay2_delivery);
		$("#pay2_contact").html(pay2_contact);
		$("#pay2_name").html(pay2_name);
		$("#pay2_phone").html(pay2_phone);
		$("#pay2_mobile").html(pay2_mobile);
		$("#pay2_address").html(pay2_address);
		$("#pay2_receipt").html(pay2_receipt);
		$("#pay2_type").html(pay2_type);
		$("#pay2_2copies").html(pay2_2copies);
		$("#pay2_3copies").html(pay2_3copies);
		$("#pay2_recipient").html(pay2_recipient);
		$("#pay2_receiptadd").html(pay2_receiptadd);
		$("#pay2_samecontact").html(pay2_samecontact);
		$("#pay2_add").html(pay2_add);
}

function send()
{
	//check
	var allpass=true;
	$(".has-error").removeClass("has-error");
	if($("#addressee").val()=="")
	{
		$("#addressee").parent().addClass("has-error");
		allpass = false;
	}
	if($("#email").val()=="")
	{
		$("#email").parent().addClass("has-error");
		allpass = false;
	}
	if($("#mobile").val()=="")
	{
		$("#mobile").parent().addClass("has-error");
		allpass = false;
	}
	if($("#address").val()=="")
	{
		$("#address").parent().addClass("has-error");
		allpass = false;
	}
	if($("#address").val()=="")
	{
		$("#address").parent().addClass("has-error");
		allpass = false;
	}
	if(!allpass)
	{
		return;
	}
	$("input[name='prdt']").val(JSON.stringify(items));
	$("input[name='addressee']").val($("#addressee").val());
	$("input[name='email']").val($("#email").val());
	$("input[name='mobile']").val($("#mobile").val());
	$("input[name='phone']").val($("#phone").val());
	$("input[name='address']").val($("#address").val());
	$("input[name='Shipping_Way']").val($('#Shipping_Way').val());
	$("input[name='inv_form']").val($('input[name=inv_form]:checked').val());
	$("input[name='inv_receiver']").val($("#inv_receiver").val());
	$("input[name='inv_address']").val(($("#inv_addr_same").prop('checked'))?$("#address").val():$("#inv_address").val());
	$("input[name='fee']").val(total);
	$("input[name='Shipping_Fee']").val($("#Shipping_Fee").html());
	$("input[name='Englishmode']").val("0");
	$("input[name='iphonepage']").val("0");
	$( "#sendfrom" ).submit();
	/*$.ajax({
		type: "POST",
		url: mainUrl + "PaymentConfirm2.php",
		dataType:"html",
		data:{
		prdt:items,
		addressee:$("#addressee").val(),
		email:$("#email").val(),
		mobile:$("#mobile").val(),
		phone:$("#phone").val(),
		address:$("#address").val(),
		Shipping_Way:$('#Shipping_Way').val(),
		inv_form:$('input[name=inv_form]:checked').val(),
		inv_receiver:$("#inv_receiver").val(),
		inv_address:($("#inv_addr_same").prop('checked'))?$("#address").val():$("#inv_address").val(),
		fee:total,
		Shipping_Fee:$("#Shipping_Fee").html()
		},
		success:function(response){


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
	});*/
}
