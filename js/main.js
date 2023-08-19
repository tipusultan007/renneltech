// Header Sticky
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 120) {
        $('.navbar-area').addClass("is-sticky");
    }
    else {
        $('.navbar-area').removeClass("is-sticky");
    }
});

// Go to Top
$(function () {
    // Scroll Event
    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });
    // Click Event
    $('.go-top').on('click', function () {
        $("html, body").animate({ scrollTop: "0" }, 500);
    });
});

// WOW JS
$(window).on('load', function () {
    if ($(".wow").length) {
        var wow = new WOW({
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 20,          // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true,       // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }
});