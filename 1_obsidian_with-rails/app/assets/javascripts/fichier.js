// Effet “smooth scroll” en jquery
$(document).ready(function() { 
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 1000; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });
});
        
// Bouton "scroll to top" => retour en haut de page
ScrollToTop = function() {
    var s = $(window).scrollTop();
    if (s > 250) {
        $('.scrollup').fadeIn();
        } else {
        $('.scrollup').fadeOut();
    }

    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
        });
}

StopAnimation=function() {
    $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
        $('html, body').stop();
    });
}

$(window).scroll(function() {
    ScrollToTop();
    StopAnimation();
});

