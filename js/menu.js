$(document).ready(function(){
   $(".menu-button a").on("click", function(e){
    e.preventDefault();
    var hrefval = $(this).attr("href");
    
    if(hrefval == "#menu") {
      var distance = $('.site-wrapper').css('right');
      
      if(distance == "auto" || distance == "0px") {
        $(this).addClass("open");
        openSidepage();
      } else {
        closeSidepage();
      }
    }
  });

  function openSidepage() {
    $('.site-wrapper').animate({
      right: '200px'
    }, 500, 'easeOutBack'); 
  }
  
  function closeSidepage(){
    $(".menu-button a").removeClass("open");
    $('.site-wrapper').animate({
      right: '0px'
    }, 500, 'easeOutQuint');  
  }
}); 