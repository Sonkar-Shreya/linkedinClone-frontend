$(document).ready(function() {
    $(window).bind('scroll', function() {
        let navHeight = $(window).height() - 450;
        if($(window).scrollTop() > navHeight){
            $('.recent').addClass('scrollFix');
        } else{
            $('.recent').removeClass('scrollFix')
        }
    })
})