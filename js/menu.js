$(document).ready(function(){
   $(".menu-button a").on("click", function(e){
    e.preventDefault();
    var hrefval = $(this).attr("href");
    
    if( $(window).width() > 800 ) {
      if(hrefval == "#menu") {
        var distance = $('.site-wrapper').css('right');
        
        if(distance == "auto" || distance == "0px") {
          $(this).addClass("open");
          openSide();
        } else {
          closeSide();
        }
      }
    } else {
      if(hrefval == "#menu") {
        var distance = $('.site-wrapper').css('right');
        
        if(distance == "auto" || distance == "0px") {
          $(this).addClass("open");
          openSideSmall();
        } else {
          closeSide();
        }
      }
    }
  });

  function openSideSmall() {
    $('.menu-button img').attr('src','/img/right.png');
    $('.site-wrapper').animate({
      right: '100px'
    }, 500, 'easeOutBack');
  }
  
  function openSide() {
    $('.menu-button img').attr('src','/img/right.png');
    $('.site-wrapper').animate({
      right: '200px'
    }, 500, 'easeOutBack');
  }
  
  function closeSide(){
    $('.menu-button img').attr('src','/img/left.png');
    $('.menu-button a').removeClass("open");
    $('.site-wrapper').animate({
      right: '0px'
    }, 500, 'easeOutQuint');  
  }
}); 