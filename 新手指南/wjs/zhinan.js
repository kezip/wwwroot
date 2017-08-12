$(function(){
  $('.qiang').mouseenter(function(){
    $('.nizhan').show();
    $('.logo').show();
  })
$('.nizhan').mouseleave(function(){
    $('.nizhan').hide();
  })
$('.phb').mouseenter(function(){
    $('.phb i').css('backgroundPosition','-170px -134px');
  })
$('.phb').mouseleave(function(){
    $('.phb i').css('backgroundPosition','-150px -134px');
  })
  $('.phb').mouseenter(function(){
    $('.gameList').show();
  })
  $('.phb').mouseleave(function(){
    $('.gameList').hide();
  })
    window.onscroll = function(){
   var st = getScroll().scrollTop;
   if(st>260){
       $('.daohan').css({'position':'fixed',top:-40,left:180});
       $('.jieshao').css('marginTop','160px');
   }else{
      $('.daohan').css('position','static');
      $('.jieshao').css('marginTop','60px');
   }
   }
  function getScroll(){
        return {
            scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
            scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        };
    }
})
  


