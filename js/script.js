Reveal.initialize({
    controls: true,
    progress: true,
    width: 1600,
    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'default',
    dependencies: [
        {src: '../lib/js/classList.js', condition: function() {
                return !document.body.classList;
            }},
        {src: '../plugin/zoom-js/zoom.js', async: true, condition: function() {
                return !!document.body.classList;
            }}
    ]
});



Reveal.addEventListener('slidechanged', function(event) {

    if (event.indexh == 0) {
        $(".bottom").hide().animate({height: "0"}, 500);
        $(".controls").hide();

    } else {
        $(".bottom").show().animate({height: "64"}, 500);
        $(".controls").show();
    }

    $(".menu-list a").removeClass("active");
    $("#" + event.indexh + " a").addClass("active");
    $(".side-nave img").removeClass('activeSlide');
    $("#" + event.indexh + "-" + (event.indexv + 1) + " img").addClass("activeSlide");
    $(".side-nave slide").mCustomScrollbar("scrollTo", "#" + event.indexh + "-" + (event.indexv + 1));


});


$(document).ready(function() {
    $(".menu-list").on('click', function() {
        Reveal.slide($(this).data('month'));
    });
    
    $("#slide1 desc_btn").on('click', function() {
        Reveal.slide(1);
    });
});

$(".controls").hide();
navHeight = window.innerHeight - 178;
$(".side-nave").css("max-height", navHeight + 'px');

(function($) {
    $(window).load(function() {

        $(".side-nave slide").mCustomScrollbar({
            theme: "dark-thick",
            //autoDraggerLength: true,
            scrollButtons:
                    {
                        enable: false
                    }
        });

        navHeight = window.innerHeight - 178;
        navTop = -(navHeight / 2) - 15;

        $(".side-nave").css("max-height", navHeight + 'px');
        $(".side-nave").css("top", navTop + 'px');

        $(".side-nave li a").on('click', function() {
            Reveal.slide(parseInt($(this).data('month')), parseInt($(this).data('case')));
        });

    });
})(jQuery);

