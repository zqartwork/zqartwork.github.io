// FadeOnLoad-載入漸進式
$(document).ready(function() {
    $('.fadeOnLoad').hide(0).delay(500).fadeIn(2000);
})

// ＭouseOver-function
$(document).ready(function() {
    $('.MouseOver-Position-Aware')
        .on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX })
        })
        .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX })
        });
    // $('[href=#]').click(function(){return false});
});

// Sticky Top Nav-bar 
// cache the element
var $navBar = $('.nav-bar-start');
var $sl = $('.split-line');

// find original navigation bar position
var navPos = $navBar.offset().top;

// on scroll
$(window).scroll(function() {

    // get scroll position from top of the page
    var scrollPos = $(this).scrollTop();

    // check if scroll position is >= the nav position
    if (scrollPos >= navPos) {
        $navBar.addClass('nav-bar-sticky');
        $sl.addClass('show').delay(500);
    } else {
        $navBar.removeClass('nav-bar-sticky');
        $sl.removeClass('show').delay(0);
    }

});

// slick-slider custom
$('.skill-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.skill-slider-nav'
});
$('.skill-slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.skill-slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});