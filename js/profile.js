$(document).ready(function(){
    $("#profile").mouseenter(function(){
        $("#profile-about-me").fadeTo(500,1);
        $("#profile-about-me").css("z-index",5);
        $("#profile").fadeTo(600,.3);
    });
    $("#profile-about-me").mouseleave(function(){
        $("#profile-about-me").fadeTo(500,.3);
        $("#profile-about-me").css("z-index",-5);
        $("#profile").fadeTo(600,1);
    });
});