function showVideo(){
	document.getElementById('show-video-wrap').style.display='block';
	document.getElementById('show-video').play();
}

function closeVideo(){
	document.getElementById('show-video-wrap').style.display='none';
	document.getElementById('show-video').pause();
}

	
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) && (document.documentElement.clientWidth > 568 && document.documentElement.clientWidth <768 ))  {
    document.getElementById("header-logo").style.display = "none";
  } else {
    document.getElementById("header-logo").style.display = "block";
  }
}

//For masonry

$(document).ready(function() {
        $('.work-grid').masonry({
          itemSelector: '.work-grid-item',
          columnWidth: '.work-grid-item',
        fitWidth: true,
        gutter:5,
        
      });

      /*$(window).resize(function () {
          $container.masonry('bindResize')
      });*/
    });

//For header 
$(document).ready(function(){
    $(window).scroll(function() {
        if ($(document).scrollTop() > 0) {
        $('.header').css('background','#fff').css('transition','all 1s ease');
        $('.header_logo_white').css('display', 'none').css('transition','all 1s ease');
        $('.header_logo_black').css('display','inline-block').css('transition','all 1s ease');
        $('.header-nav-link').css('color', '#515769').css('transition','all 1s ease');
      } else {
        $('.header').css('background','rgba(255,255,255, 0)');
        $('.header_logo_white').css('display', 'inline-block');
        $('.header_logo_black').css('display','none');
        $('.header-nav-link').css('color', '#fff');
      }

      if($(window).width()<= 576) {
        $('.header').css('background','rgba(255,255,255, 1)');
        $('.header_logo_white').css('display', 'none');
        $('.header_logo_black').css('display','inline-block');
        $('.header-nav-link').css('color', '#565C6E');
          
      }

    if (($(window).width()> 576) && ($(window).width()<768) ) {
      $('.header_logo_white').css('display', 'none');
      $('.header_logo_black').css('display','inline-block');
      $('.header-nav-link').css('color', '#565C6E');
          
    }
  });
});


//init magnific popup

$(document).ready(function(){
    $('.work-grid-item-link').magnificPopup({
      type:'inline',
      closeOnBgClick: false,
      enableEscapeKey: false,
          
    })
});

//For google map

function initMap() {
  // The location of Uluru
  var uluru = {lat: 48.4556011, lng: 35.0522975};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}


// for drop down

  $(document).ready(function(){
        $('.header-nav-icon').click(function(){
          
          /*$('.header-nav').toggleClass('dropdown')*/
          if ($('.header-nav').css('display') == 'none') {
            $('.header-nav').css('display', 'block');
            $('.header-nav-li').css('display', 'block');
            
          } else {$('.header-nav').css('display', 'none');
            $('.header-nav-li').css('display', 'inline-block');
          }
        });
      });