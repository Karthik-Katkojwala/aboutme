/* -----| script |-------*
 * 01. Mobile call
 * 02. Window Scroll
 * 03. Home Slider
 * 04. wow animation
 * 05. Services Slider
 * 06. Product Slider 
 * 08. Mobile menu	
 * 09. Footer Accordion
 */


/*-------| Function |--------*
 * 
 *   A. Svg Rendering In Browser
 *   B. Equal Height



 */




/* ~~~~~~~~~ Header Sticky ~~~~~~~~~~ */
var prevScrollpos = window.pageYOffset; 
var stkyHeadHeight = document.getElementById('stkyHead').offsetHeight + 15;
//alert(prevScrollpos);
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("stkyHead").style.top = "0";
  } else {
    document.getElementById("stkyHead").style.top = "-"+stkyHeadHeight+"px";
  }
  prevScrollpos = currentScrollPos;
}



/*
$(window).bind('DOMMouseScroll', function(e){
    
   if(e.originalEvent.detail > 0) {

      $('#stkyHead').stop().css('top', "-"+$('#stkyHead').outerHeight()+"px");
   }else {
      $('#stkyHead').stop().removeAttr('style');
   }
});
//IE, Opera, Safari
$(window).bind('mousewheel', function(e){
   if(e.originalEvent.wheelDelta < 0) {
       $('#stkyHead').stop().css('top', "-"+$('#stkyHead').outerHeight()+"px");
   }else {
      $('#stkyHead').stop().removeAttr('style');
   }
});*/




/*~~~~~~~ Document Ready Start ~~~~~~~*/

$(document).ready(function() {

    svgConvert();
  
/*------------| 01. Mobile call |--------------*/

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {		
	$('.m_call').each(function(){
	var valuehtml = $(this).html();
	var value = $(this).text();
	$(this).addClass('mobileCall');
	$(this).html('<a class="callBtn" href="tel:' + value + '">' + valuehtml + '</a>');
});
}




/*~~~~~~~ 02. Window Scroll  ~~~~~~~~*/
$('.scrollTop').click(function() {
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });

 $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollTop').fadeIn();
        } else {
            $('.scrollTop').fadeOut();
        }
    });



/*--------| 08. menu |------------*/
 
$('.menuIcon').click(function() {  
$(".side-menu").toggleClass("open");
$(".wrapper").toggleClass("movewrapper");
$("body").toggleClass("fixbody");
 
}); 
$('.overlapDiv, .close-menu').click(function(){
  $(".side-menu").removeClass("open");
$(".wrapper").removeClass("movewrapper");
$("body").removeClass("fixbody");
});
$('.menu-main-link li:has(ul)').prepend("<span class='arrowLI'></span>");
$('.arrowLI').click(function() {
$(this).siblings('.subMenu').slideToggle('slow');
$(this).toggleClass('minus');
});  


$('.teamSlider').slick({
  dots: false,
  infinite: false,
  speed: 800,
 slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
responsive: [ {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.storySlider').slick({
  dots: false,
  infinite: false,
  speed: 1000,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
});
	
$('.paintsliderhome').slick({
  dots: false,
  infinite: true,
  speed: 700,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});    

$.each($('.form').find('.txtValue'), function(k, v) {
	if ($(this).val() != "") {
		$(this).parents('.txtBox').addClass('placeHolder');
	}
});

$('.txtValue').focus(function() {
	$(this).parents('.txtBox').addClass('placeHolder');
});
$('.txtValue').blur(function() {
	var $this = $(this);
	if ($this.val().length == 0)
		$(this).parents('.txtBox').removeClass('placeHolder');
});	
	
});



/*~~~~~~~ Window Load Start ~~~~~~~*/

$(window).load(function() {   
    
	equalheight('.eqheight');
	
	
	
});

/*~~~~~~~ Window Rezise Function ~~~~~~~~*/
$(window).resize(function(){
    equalheight('.eqheight');
 
});



/* ------| A. Svg Rendering In Browser |--------- */
function svgConvert() {
    $('.svg_icon').each(function() {
        /*  alert('test'); */
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('.svg_icon');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {

            /* Get the SVG tag, ignore the rest */
            var $svg = $(data).find('svg');
            /* Add replaced image's ID to the new SVG */
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            /* Add replaced image's classes to the new SVG */
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            /* Remove any invalid XML tags as per http://validator.w3.org */
            $svg = $svg.removeAttr('xmlns:a');

            /* Replace image with new SVG*/
            $img.replaceWith($svg);

        }, 'xml');

    });
}

/*-----------| B. Equal Height |-----------*/	
equalheight = function(container) {

    var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
    $(container).each(function() {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
};

 // homepage down function top
$(document).on('click','.slide-down-top a',function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000);
}); 
