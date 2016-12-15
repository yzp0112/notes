$(window).load(function(){
   var link=(window.location.href).toString().toLowerCase();
   if(link.indexOf("index")>-1){
         $(".footer_nav ul li:nth-child(1) a").addClass("cur").siblings().removeClass("cur");
    }
   else if(link.indexOf("order")>-1){
      $(".footer_nav ul li:nth-child(2) a").addClass("cur").siblings().removeClass("cur");
   }
   else if(link.indexOf("mine")>-1){
      $(".footer_nav ul li:nth-child(3) a").addClass("cur").siblings().removeClass("cur");
   }
})