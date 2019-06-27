$("a[href*='#']").click(function (e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").delay(400).animate({
        scrollTop: position
    }, 1000, "swing");

    $(this).addClass('ex');

    setTimeout(() => {
        $(this).removeClass('ex');
    }, 1000);
});

$("#top").click(function () {
    $("body, html").delay(300).animate({
        scrollTop: 0
    }, 1000, "swing");
})
$(window).scroll(function () {

    if ($(this).scrollTop() > 800) {
        $('#top').fadeIn();
    } else {

        $('#top').fadeOut();
    }

});

$(window).scroll(function () {

    var nav = $('.navbar_wrapper');

    if ($(this).scrollTop() > 0) {
        nav.addClass('sticky');
        $('.section_A').css('opacity', 0.8)
    } else {
        nav.removeClass('sticky');
        $('.section_A,l').css('opacity', 1)

    }

});