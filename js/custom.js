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
        setTimeout(function(){
            $(this).parents('.custom_select').find('.selected').text($(this).text());
        },100)
        $(this).parents('.custom_select').find('#data_input').attr('value', $(this).attr('page'));
        console.log($(this).parents('.custom_select').find('#data_input').attr('value'))
        $('#' + $(this).parents('.custom_select').find('#data_input').attr('value')).show()
        $('#' + $(this).parents('.custom_select').find('#data_input').attr('value')).siblings().hide()
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
let ttFc = function(){
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
}

/*
-----------
Scroll Top
-----------
*/
let scrollTopFc = function() {
    var scrollTop = $(".scrollTop");
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
        $(scrollTop).css("opacity", "1");

        } else {
        $(scrollTop).css("opacity", "0");
        }
    }); 

    //Click event to scroll to top
    $(scrollTop).click(function() {
        $('html, body').animate({
        scrollTop: 0
        }, 800);
        return false;
    }); 
}

/*
------------
Switch Tab
------------
*/

let switchTab = function(){
    $('.switcher').click(function(){
        $('#' + $(this).attr('sw-to')).addClass('active')
        $('#' + $(this).attr('sw-to')).siblings().removeClass('active')
    })
}

/*
------------
Scroll Spy
------------
*/

let scrollSpy = function(){
  
        var link = $('.section-anchor-nav-tab');
        var alink = $('.anchor');
        
        // Move to specific section when click on menu link
        link.on('click', function(e) {
          var target = $($(this).attr('href'));
          $('html, body').animate({
            scrollTop: target.offset().top - 100
          }, 600);
          $(this).addClass('active');
          e.preventDefault();
        });
        alink.on('click', function(e) {
            var target = $($(this).attr('href'));
            $('html, body').animate({
              scrollTop: target.offset().top - 100
            }, 600);
            $(this).addClass('active');
            e.preventDefault();
          });
        
        // Run the scrNav when scroll
        $(window).on('scroll', function(){
          scrNav();
        });
        
        // scrNav function 
        // Change active dot according to the active section in the window
        function scrNav() {
          var sTop = $(window).scrollTop();
          $('section').each(function() {
            var id = $(this).attr('id'),
                offset = $(this).offset().top-1,
                height = $(this).height();
            if(sTop >= offset && sTop < offset + height) {
              link.removeClass('active');
              $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
            }
          });
        }
        scrNav();
}