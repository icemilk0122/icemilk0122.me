$(function(){
  if(Device.IsMobile())
  {
    if(url('filename')=="product")
    {
      location.href="/product_m.php?"+url('?')
    }
  }else
  {
    if(url('filename')=="product_m")
    {
      location.href="/product.php?"+url('?')
    }
  }
  var source;
  var template;
  var html;
  $.ajax({
    type: "POST",
    url: mainUrl + "get_prdt_detail.php",
    dataType:"json",
    data:{
      pid:url('?pid')
    },
    success:function(response){
      $("#wrapper").html($.parseHTML(convert(response.allPrdt[0].detail[0].editor.replace(/&nbsp;/g,"")),document,true));
      if($("#wrapper").html() == "")
      {
        $("#wrapper").html($.parseHTML(convert(default_temp.replace(/&nbsp;/g,"")),document,true));
      }
      if(url('filename')=="product_m")
      {
        source = $("#pdm-template").html();
      }else
      {
        source = $("#pd-template").html();
      }
      template = Handlebars.compile(source);
      for(var i=1;i<6;i++)
      {
        if(response.allPrdt[0].detail[0]["ad_"+i]=="")
        {
          delete response.allPrdt[0].detail[0]["ad_"+i];
          delete response.allPrdt[0].detail[0]["ad_"+i+"_cht"];
        }
      }
      html = template(response.allPrdt[0].detail[0]);
      $('#wrapper').html(html);
      $('#adlist .item:first-child').addClass("active");
      if(lang=="_cht")
      {
        $( ".en" ).remove();
      }else
      {
        $( ".cht" ).remove();
      }
      $('#carousel').carousel({
        interval: 5000
      })
      //$(".left").click(function(){$('.carousel').carousel('prev');});
      //$(".right").click(function(){$('.carousel').carousel('next');});
      editareainit();
    },
    beforeSend:function(){
      //showloading(true);
    },
    complete:function(){
      //showloading(false);
    },
    error: function(jqXHR, textStatus, errorThrown){
      //alert('error');
    }
  });
});

Handlebars.registerHelper('checktopbg', function(text) {
  if(lang=="_cht")
  {
    return this.PrdtImg_path_cht;
  }else
  {
    return this.PrdtImg_path;
  }
});

Handlebars.registerHelper('editarea', function(text) {
  return new Handlebars.SafeString(text);
});

function pagechanheLangs()
{
    if(lang=="_cht")
    {
      $(".cht").css("display","inline-block");
    }else
    {
      $(".en").css("display","inline-block");
    }
}

var convert = function(convert){
    return $("<span />", { html: convert }).text();
    //return document.createElement("span").innerText;
};

var convert = function(convert){
    return $("<span />", { html: convert }).text();
    //return document.createElement("span").innerText;
};
