$(function(){
  getbanner();
  var source;
  var template;
  var html;
  $.ajax({
    type: "GET",
    url: mainUrl + "get_shoplist.php",
    dataType:"json",
    data:{

    },
    success:function(response){
      source = $("#pd-template").html();
      template = Handlebars.compile(source);
      html = template(response);
      $('#items').html(html);
      pagechanheLangs();
      for(var i=0;i<$(".item").length;i++)
      {
        if(i%3==0)
        {
          $(".item").eq(i).addClass("clear");
        }
      }
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

function pagechanheLangs()
{
    if(lang=="_cht")
    {
      $(".cht").css("display","inherit");
    }else
    {
      $(".en").css("display","inherit");
    }
}

function getbanner()
{
  $.ajax({
    type: "POST",
    url: mainUrl + "get_images.php",
    dataType:"json",
    data:{

    },
    success:function(response){
      $(".header").css("background-image","url("+response.ad[0].shop[0]["path"+lang]+")");
      $(".shoplogo").html(response.ad[0].shop[0]["title"+lang]);
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
}
