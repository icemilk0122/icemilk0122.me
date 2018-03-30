var pdname;
var desc;
var desc_cht;
var colorname;
var colorname_cht;

$(function(){
  var source;
  var template;
  var html;
  $.ajax({
    type: "POST",
    url: "get_prdt_detail.php",
    dataType:"json",
    data:{
      pid:url("?pid")
    },
    success:function(response){
      pdname = response.allPrdt[0].detail[0].prdt_name;
      desc = response.allPrdt[0].detail[0].description;
      desc_cht = response.allPrdt[0].detail[0].description_cht;
      source = $("#pd-template").html();
      template = Handlebars.compile(source);
      html = template(response.allPrdt[0]);
      $('#pd').html(html);
      $(".colorpd:first-child").show();
      $(".colorshop:first").show();
      $(".colorprice:first-child").show();
      $(".color:first-child").addClass("colorsel");
      pagechanheLangs();
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

function changecolor(cid)
{
  $(".colorpd").hide();
  $(".colorname").parent().hide();
  $(".colorprice").hide();
  $(".colorshop").hide();
  $(".colorsel").removeClass("colorsel");
  $("#colorpd"+cid).show();
  if(lang=="_cht")
  {
    $(".cht #colorname"+cid).parent().show();
  }else
  {
    $(".en #colorname"+cid).parent().show();
  }
  $("#colorprice"+cid).show();
  $("#colorshop"+cid).show();
  $("#color"+cid).parent().parent().addClass("colorsel");
}

function pagechanheLangs()
{
    if(lang=="_cht")
    {
      $(".cht").css("display","inherit");
      $(".colorname").parent().hide();
      $(".cht .colorname").parent().eq(0).show();
    }else
    {
      $(".en").css("display","inherit");
      $(".colorname").parent().hide();
      $(".en .colorname").parent().eq(0).show();
    }
}

function ShopAdd(cid,price,colorname,colorname_cht,img)
{
  if(Shop.Add(url("?pid"),cid,pdname,desc,desc_cht,colorname,colorname_cht,price,img))
  {
    location.href='payment_1.php';
  }
}
