/*
-----------------
Function Library
-----------------
*/
/*
------
Custom Select
------
*/
let selectCustom = function() {
    let cs = $('.custom_select');
    let csMenu = $('.select_menu');
    let csMenuOpt = $('.select_menu li')

    cs.click(function() {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).children('.select_menu').slideToggle(300);
    })
    cs.focusout(function() {
        $(this).removeClass('active');
        $(this).children('.select_menu').slideUp(300);
    })
    csMenuOpt.click(function() {
        $(this).parents('.custom_select').find('.selected').text($(this).text());
        $(this).parents('.custom_select').find('#data_input').attr('value', $(this).attr('id'));
    })
};
/*
------
Sticky Nav
------
*/
$(document).ready(function() {
    // grab the initial top offset of the navigation 
       var stickyNavTop = $('.nav').offset().top;
       
       // our function that decides weather the navigation bar should have "fixed" css position or not.
       var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
             
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > 0) { 
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky'); 
        }
    };
    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });
});
/*
------
Class Version TT
------
*/
$('.modal-opener').click(function(){
    let tt = $(this).attr('tt-to');
    console.log(tt)
    $('.' + tt).show();
    $('body').css({
        'max-height': '100vh',
        'max-width': '100vw',
        'overflow': 'hidden',
        // 'position': 'fixed'
    })
})
$('.modal-closer, .modal-closer_btn').click(function(){
    $(this).parents('.modal').hide();
    $('body').css({
        'max-height': 'auto',
        'max-width': 'auto',
        'overflow': 'auto',
        'position': 'relative'
    })
})