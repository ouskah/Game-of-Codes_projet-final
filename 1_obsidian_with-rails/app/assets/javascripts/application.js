// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets


<script> // Effet “smooth scroll” en jquery
            $(document).ready(function() { 
                $('.js-scrollTo').on('click', function() { // Au clic sur un élément
                    var page = $(this).attr('href'); // Page cible
                    var speed = 750; // Durée de l'animation (en ms)
                    $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
                    return false;
                });
            });
        </script>
        
        <script> // Bouton "scroll to top" => retour en haut de page
            ScrollToTop=function() {
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
        </script>


