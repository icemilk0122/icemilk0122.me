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
	$(".qty_input").on("keyup",function(){
    changeqty($(this).attr("id").substring(3));
  })
  $(".qty_input").change(function(){
    if($(this).val()=="")
    {
      $(this).val(0);
			changeqty($(this).attr("id").substring(3));
    }
  })
})

Handlebars.registerHelper('total', function(items, options) {
  return this.qty*this.price;
});

function caltotal()
{
	var total = 0;
	$( ".subtotal:visible" ).each(function( index ) {
		total += parseInt($( this ).html());
	});
	$("#total").html(total);
}

function changeqty(cid)
{
	if(Shop.Update(cid,$("#qty"+cid).val()))
	{
		$("#subtotal"+cid).html(parseInt($("#price"+cid).html())*parseInt($("#qty"+cid).val()));
		caltotal();
	}
}

function delitem(cid)
{
	if(Shop.Remove(cid))
	{
		$("#"+cid).hide();
		caltotal();
	}
}

function pagechanheLangs()
{
		if(lang=="_cht")
		{
			$(".cht").css("display","inherit");
		}else
		{
			$(".en").css("display","inherit");
		}
		$("#pay1_prdt").html(pay1_prdt);
		$("#pay1_price").html(pay1_price);
		$(".pay1_totalprice").html(pay1_totalprice);
		$("#pay1_qty").html(pay1_qty);
		$(".pay1_total").html(pay1_total);
		$(".pay1_update").html(pay1_update);
		$("#pay1_conti").html(pay1_conti);
		$("#pay1_checkout").html(pay1_checkout);
}
