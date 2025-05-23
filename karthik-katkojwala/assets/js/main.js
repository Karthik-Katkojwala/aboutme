/* ===================================================================
    
		Theme Name:  Willam | Personal Portfolio vCard HTML Template
		Author: Themetum
		Version: 1.0
    
* ================================================================= */
jQuery(document).ready(function(){ 

	"use strict";

		// Preloader
		$(window).on("load", function () {
			$('.lds-ellipsis').fadeOut(); // will first fade out the loading animation
			$('.preloader').delay(333).fadeOut('slow'); // will fade out the white DIV that covers the website.
			$('body').delay(333);
		});
		

		// Header Sticky
		
			$(window).scroll( function() {
				$(window).scrollTop() >= 50 ? $(".sticky").addClass("stickyadd") : $(".sticky").removeClass("stickyadd")
			})
			  
			  $(document).on("click", ".navbar-collapse.show", function(e) {
				$(e.target).is("a") && $(this).collapse("hide")
			}) 
			  
			 $(".navbar-nav a, .scroll_down a").click( function(e) {
				var a = $(this);
				$("html, body").stop().animate({
					scrollTop: $(a.attr("href")).offset().top - 0
				}, 1500, "easeInOutExpo"), e.preventDefault()
			}) 
			  
			  $("#navbarCollapse").scrollspy({
				offset: 20
			})

			
			
        /* ==================================================
            # Smooth Scroll
         =============================================== */
		 
		// Sections Scroll
		if($("body").hasClass("side-header")){
			$('.smooth-scroll').click( function() {
				event.preventDefault();
				var sectionTo = $(this).attr('href');
				$('html, body').stop().animate({
				  scrollTop: $(sectionTo).offset().top}, 110, 'easeInOutExpo');
			});
		   }
		 else {
			$('.smooth-scroll').click( function() {
				event.preventDefault();
				var sectionTo = $(this).attr('href');
				$('html, body').stop().animate({
				  scrollTop: $(sectionTo).offset().top - 10}, 110, 'easeInOutExpo');
			});
		}

		 /* ==================================================
            # Scroll to top
         =============================================== */
			//Get the button
			var mybutton = document.getElementById("scrtop");

			// When the user scrolls down 20px from the top of the document, show the button
			window.onscroll = function() {scrollFunction()};

			function scrollFunction() {
			  if (document.body.scrollTop >10 || document.documentElement.scrollTop > 10) {
				mybutton.style.display = "block";
			  } else {
				mybutton.style.display = "none";
			  }
			}

		
		 /* ==================================================
            # Youtube Video Init
         ===============================================*/
        $('.player').mb_YTPlayer();
		
		/* ==================================================
			# Portfolio Menu
		 =============================================== */
		 
		$(window).on("load", function() {
			var e = $(".work-filter"),
				a = $("#menu-filter");
			e.isotope({
				filter: "*",
				layoutMode: "masonry",
				animationOptions: {
					duration: 750,
					easing: "linear"
				}
			}), 
			
			a.find("a").click( function() {
				var o = $(this).attr("data-filter");
				return a.find("a").removeClass("active"), $(this).addClass("active"), e.isotope({
					filter: o,
					animationOptions: {
						animationDuration: 150,
						easing: "linear",
						queue: !1
					}
				}), !1
			})
		}), 

		$(".img-zoom").magnificPopup({
			type: "image",
			closeOnContentClick: !0,
			mainClass: "mfp-fade",
			gallery: {
				enabled: !0,
				navigateByImgClick: !0,
				preload: [0, 1]
			}
		}),

		/*------------------------------------
			Typed
		-------------------------------------- */

		$(".typed").each(function() {
		var typed = new Typed('.typed', {
			stringsElement: '.typed-strings',
			loop: true,
			typeSpeed: 20,
			backSpeed: 10,
			backDelay: 3000,
		});
		});
		

		/*------------------------------------
			WOW animation
		-------------------------------------- */

		$(".wow").each(function() {
		 if ($(window).width() > 767) {
		   var wow = new WOW({
			 boxClass: 'wow',
			 animateClass: 'animated',
			 offset: 0,
			 mobile: true,
			 live: true
		   });
		  new WOW().init();
		 }
		});		
		

        /* ==================================================
            # Magnific popup init
         ===============================================*/

        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });


        /* ==================================================
            # Feedback Slider
         =================================================*/
	   
	   $('.feed-sldr').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: true,
			arrows: false,
			dots: true,
			autoplaySpeed: 4000,
			responsive: [{
					breakpoint: 1199,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						arrows: false
					}
				}
			]
		});
		        
        /* ==================================================
            # Blog Slider
         ================================================*/
		
	   $('.blog-sldr').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			arrows: false,
			dots: true,
			autoplaySpeed: 4000,
			responsive: [{
					breakpoint: 1150,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						arrows: false
					}
				}
			]
		});
		
        /* ==================================================
            # Fun Factor Init
        ===============================================*/
        $('.timer').countTo();
        $('.fun-fact').appear(function() {
            $('.timer').countTo();
        }, {
            accY: -100
        });
		
	/* ==================================================
		Contact Form Validations
	================================================== */

		$(function() {

			// Get the form.
			var form = $('#contact-form');

			// Get the messages div.
			var formMessages = $('.form-message');

			// Set up an event listener for the contact form.
			$(form).submit(function(e) {
				// Stop the browser from submitting the form.
				e.preventDefault();

				// Serialize the form data.
				var formData = $(form).serialize();

				// Submit the form using AJAX.
				$.ajax({
					type: 'POST',
					url: $(form).attr('action'),
					data: formData
				})
				.done(function(response) {
					// Make sure that the formMessages div has the 'success' class.
					$(formMessages).removeClass('error');
					$(formMessages).addClass('success');

					// Set the message text.
					$(formMessages).text(response);

					// Clear the form.
					$('#contact-form input,#contact-form textarea').val('');
				})
				.fail(function(data) {
					// Make sure that the formMessages div has the 'error' class.
					$(formMessages).removeClass('success');
					$(formMessages).addClass('error');

					// Set the message text.
					if (data.responseText !== '') {
						$(formMessages).text(data.responseText);
					} else {
						$(formMessages).text('Oops! An error occured and your message could not be sent.');
					}
				});
			});

		});				
		
        /* ==================================================
            Preloader Init
         ===============================================*/
		 
        $(window).on("load", function() {
            // Animate loader off screen
            $(".se-pre-con").fadeOut("slow");
        });
        
		
		 /* ==================================================
            Mouse Animation
        ================================================== */

			function theme_tm_cursor(){

				var myCursor	= jQuery('.mouse-cursor');

				if(myCursor.length){
					if ($("body")) {
					const e = document.querySelector(".cursor-inner"),
						t = document.querySelector(".cursor-outer");
					let n, i = 0,
						o = !1;
					window.onmousemove = function (s) {
						o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
					}, $("body").on("mouseenter", "a, .cursor-pointer", function () {
						e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
					}), $("body").on("mouseleave", "a, .cursor-pointer", function () {
						$(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
					}), e.style.visibility = "visible", t.style.visibility = "visible"
				}
				}
			};
			theme_tm_cursor()	
		
}); // end document ready function