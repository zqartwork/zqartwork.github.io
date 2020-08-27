$(document).ready(function () {
  if ($('.btn-bot-posi-wrap').length > 0) {
    $('.wrapper, footer').addClass('ex')
  }
  if ($('.submit-zone').length > 0) {
    $('.wrapper').css({
      'min-height': 'calc(100vh - 130px)'
    })
    $('footer').css({
      'padding-top': '20px'
    })
  }
})
/*
-----------------
Function Library
-----------------
*/
var bracketData = {
  teams: [
    ["btn-titler1", "btn-title2"],
    ["btn-titler3", "btn-title4"],
    ["btn-titler5", null],
    ["btn-titler7", "btn-title8"],
  ],
  results: [
    [
      [
        [1, 0],
        [0, 1],
        [null, null],
        [1, 0]
      ],
      [
        [1, 0],
        [0, 1]
      ],
      [
        [null, null]
      ]
    ]
  ]

};

var resizeParams = {
  teamWidth: 120,
  scoreWidth: 28,
  matchMargin: 20,
  roundMargin: 70,
  init: bracketData
};

//tapbar
$('.tapbar-item').click(function () {
  let target = $(this).attr('ct');
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  console.log('.ct-item.' + target)
  $('.ct-item.' + target).show();
  $('.ct-item.' + target).siblings('.ct-item').hide();
  $('#playoff').bracket(resizeParams);
  $('<img src="img/pic_preset_thumbnail.svg" class="team-sm-thumb">').prependTo('div.jQBracket .team div.label');
});
//inner
$('.inner-opener').click(function () {
  let target = $(this).attr('inner');
  $(this).parent().hide();
  $('.' + target).show();
  $('#playoff').bracket(resizeParams);
  $('<img src="img/pic_preset_thumbnail.svg" class="team-sm-thumb">').prependTo('div.jQBracket .team div.label');
});
$('.backer-wrap.inner').click(function () {
  let target = $(this).attr('inner');
  $(this).parent().hide();
  $(this).parent().siblings('.list').show();
});
/*
----------------
Zoomin Zoomout
----------------
*/
var zoomScale = 1;

$('.zoomin').click(function () {
  zoomScale += 0.1;
  console.log(zoomScale)
  $('.bracket-wrap').css({
    'transform': 'scale(' + zoomScale + ')'
  });
  if (zoomScale > 2) {
    zoomScale = 2;
  }
});

$('.zoomout').click(function () {
  zoomScale -= 0.1;
  console.log(zoomScale);
  $('.bracket-wrap').css({
    'transform': 'scale(' + zoomScale + ')'
  });
  if (zoomScale < 0.5) {
    zoomScale = 0.5;
  }
});

/*
--------------------
Custom Timer Slider
--------------------
*/

//Init the carousel
initSlider();

function initSlider() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    nav: false,
    dots: true,
    dotsData: true,
    onInitialized: startProgressBar,
    onTranslate: resetProgressBar,
    onTranslated: startProgressBar
  });
}

function startProgressBar() {
  // apply keyframe animation
  $(".active .slide-progress .thumb").css({
    width: "0px",
    transition: "width 5000ms",
  });
  setTimeout(function () {
    $(".active .slide-progress .thumb").css({
      width: "50px",
      transition: "width 5000ms",
    });
  }, 100);
}

function resetProgressBar() {
  $(".slide-progress .thumb").css({
    width: 0,
    transition: "width 0s",
  });
}
/*
----------------
Modal Opener
----------------
*/

// Class Version 
$('.alert-opener').click(function () {
  let alert = $(this).attr('alert-to');
  console.log(alert)
  $('.' + alert).show();
})
$('.alert-closer').click(function () {
  $(this).parents('.alert-box').hide();
})

// ID Version
$('.alert-opener').click(function () {
  let alert = $(this).attr('alert-to');
  let alertself = $(document.getElementById(alert))
  alertself.toggle();
})
$('.alert-closer').click(function () {
  $(this).parents('.alert-box').hide();
})

/*
----------------
Lock Start Picker
----------------
*/

let alert__teamleaderForTournament = $('#teamleaderForTournament');
let alert__teamleaderNotOnBoard = $('#teamleaderNotOnBoard');
let alert__pickStartOverQuant = $('#pickStartOverQuant');

let alertConfirm__teamleaderForTournament = $('#teamleaderForTournament .alert-confirm');
let alertConfirm__teamleaderNotOnBoard = $('#teamleaderNotOnBoard .alert-confirm');
let alertConfirm__pickStartOverQuant = $('#pickStartOverQuant .alert-confirm');

let pickStartLimit = 0;
let pickTimeLimit = 2;

$('.member-list-wrap').click(function () {
  let self = $(this);
  let teamleaderForTournament = $('input[name="teamleaderForTournament"]:checked').length;

  if (teamleaderForTournament === 0) {
    alert__teamleaderForTournament.show();
  }

})
alertConfirm__teamleaderForTournament.click(function () {
  alert__teamleaderForTournament.hide();
})
alertConfirm__teamleaderNotOnBoard.click(function () {
  alert__teamleaderNotOnBoard.hide();
})

$('input[name="teamleaderForTournament"]').click(function () {

  let self = $(this);
  let teamleaderForTournament = $('input[name="teamleaderForTournament"]:checked').length;
  let teamleaderForTournamentVal = document.querySelector('input[name="teamleaderForTournament"]:checked').value;

  console.log(teamleaderForTournamentVal);
  console.log(teamleaderForTournament);

  if (teamleaderForTournament == 1 && teamleaderForTournamentVal == 1) {
    $('.member-list-wrap .btn__user, .btn__normal.submit').attr('disabled', false);
    return pickStartLimit = 4;

  } else if (teamleaderForTournament == 1 && teamleaderForTournamentVal == 0) {
    $('.member-list-wrap .btn__user, .btn__normal.submit').attr('disabled', false);
    alert__teamleaderNotOnBoard.show();
    return pickStartLimit = 5;
  }

})

$("input.pick-start:checkbox").click(function () {
  var bol = $("input:checkbox:checked").length >= pickStartLimit;
  if (bol) {
    $("input:checkbox").not(":checked").attr("disabled", bol).next('label').find('.systxt').show();
  }
});
$("input.pick-time:checkbox").click(function () {
  var bol = $("input:checkbox:checked").length >= pickTimeLimit;
  var bolb = $("input:checkbox:checked").length >= pickTimeLimit - 1;
  var valb = $("input#timeCustom").val() != '';
  console.log(bol)
  if (bol) {
    $("input:checkbox").not(":checked").attr("disabled", bol);
    $("input#timeCustom").attr("disabled", bol);
  } else if (bolb && valb) {
    $("input:checkbox").not(":checked").attr("disabled", bolb);
  } else {
    $("input:checkbox").not(":checked").attr("disabled", false);
    $("input#timeCustom").attr("disabled", false);
  }
});

/*
--------------------
Custom upload files
--------------------
*/
var inputs = document.querySelectorAll('.upload-file');
Array.prototype.forEach.call(inputs, function (input) {
  var label = input.nextElementSibling;
  var labelVal = label.innerHTML;

  input.addEventListener('change', function (e) {
    var fileName = '已上傳';
    if (this.files && this.files.length > 1) {
      fileName = (this.getAttribute('data-multiple-caption') || '').replace('已上傳');
    } else {
      fileName = e.target.value.split('').pop();
    }
    if (fileName) {
      label.querySelector('.item-subtitle').innerHTML = '已上傳';
    } else {
      label.innerHTML = labelVal;
    }
  })
})

/*
--------------------
Go Backer
--------------------
*/
function goBack() {
  console.log(window.history)
  window.history.back();
}