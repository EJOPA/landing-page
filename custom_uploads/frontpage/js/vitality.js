/*!
 * Vitality v1.3.5 (http://themes.startbootstrap.com/vitality-v1.3.5)
 * Copyright 2013-2015 Start Bootstrap Themes
 * To use this theme you must have a license purchased at WrapBootstrap (https://wrapbootstrap.com)
 */

(function($) {
    "use strict"; // Start of use strict

    // Smooth Scrolling: Smooth scrolls to an ID on the current page.
    // To use this feature, add a link on your page that links to an ID, and add the .page-scroll class to the link itself. See the docs for more details.
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });


    // Formstone Background - Video Background Settings
    $("header.video").background({
        source: {
            poster: "custom_uploads/frontpage/img/bg-mobile-fallback.jpg",
            mp4: "custom_uploads/frontpage/mp4/eclipse_web.mp4"
        }
    });

  


})(jQuery); // End of use strict

// Load WOW.js on non-touch devices
var isPhoneDevice = "ontouchstart" in document.documentElement;
$(document).ready(function() {
    if (isPhoneDevice) {
        //mobile
    } else {
        //desktop               
        // Initialize WOW.js
        wow = new WOW({
            offset: 50
        })
        wow.init();
    }
});