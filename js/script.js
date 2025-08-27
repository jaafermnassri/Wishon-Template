$(document).ready(function () {
  
// STICKY HEADER FUNCTION
//========================
 
  var header = $(".header-main");
  var headerOffset = header.offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() > headerOffset) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  });


// STICKY HEADER FUNCTION
//========================

//HERO SLIDER CAROUSEL 
//===================

$(".hero-sliders").owlCarousel({
    loop: true,

    nav: true,
    items: 3,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        margin: 0,
        loop: true,
        dots: true,
      },
      600: {
        items: 1,
        nav: true,
        margin: 0,
        loop: true,
        dots: false,
        navText : ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"]
      },
    },
  });

  //HERO SLIDER CAROUSEL 
//===================

//COUNTER
//===============

const $statsSection = $('.stats-row');
            const $countUpElements = $('.count-up');

            function countUp($el, endValue) {
                let startValue = 0;
                const duration = 1200; 
                const startTime = performance.now();

                function update() {
                    const currentTime = performance.now();
                    const progress = Math.min((currentTime - startTime) / duration, 1);
                    $el.text(Math.floor(progress * (endValue - startValue) + startValue));

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        $el.text(endValue);
                    }
                }

                requestAnimationFrame(update);
            }


            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        $countUpElements.each(function() {
                            const $this = $(this);
                            const endValue = parseInt($this.text().replace(/[^\d]/g, ''), 10); 
                            countUp($this, endValue);
                        });

                        
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 }); 

            observer.observe($statsSection[0]);

//COUNTER 
//===============

// SECTION 6 CAROUSEL 
//====================
$(".events-slides").owlCarousel({
    loop: true,

    nav: false,
    items: 1,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
        loop: true,
        dots: true,
      },
      600: {
        items: 1,
        nav: false,
        margin: 0,
        loop: true,
        dots: true,
      },
    },
  });
// SECTION 6 CAROUSEL 
//====================

// TESTIMONIALS CAROUSEL 
//======================
$(".testimonials").owlCarousel({
  loop: true,
  nav: false,
  items: 1,
  dots: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      margin: 0,
      loop: true,
      dots: true,
    },
    600: {
      items: 1,
      nav: false,
      margin: 0,
      loop: true,
      dots: true,
    },
  },
});
// TESTIMONIALS CAROUSEL 
//======================


// ACCORDION
//==================================================

    $(".accordion.a-1 .accordion-text").show();
    $(".accordion.a-1 .toggle-icon i").toggleClass("fa-chevron-down fa-chevron-up");
    $(".accordion.a-1 .accordion-title").addClass("active");

    $(".accordion-title").click(function() {

        $(".accordion-text").not($(this).next(".accordion-text")).slideUp();
        $(".toggle-icon i").not($(this).find(".toggle-icon i")).removeClass("fa-chevron-up").addClass("fa-chevron-down");
        $(".accordion-title").not($(this)).removeClass("active");
        

        $(this).next(".accordion-text").slideToggle();
        $(this).find(".toggle-icon i").toggleClass("fa-chevron-down fa-chevron-up");
        $(this).toggleClass("active");
    });

// ACCORDION
//==================================================


// MENU BUTTON 
//==================================================
var isNewLogoDisplayed = false;
$(".menu-button").click(function(){
    if($(window).width() <= 768) {
        $(".navigation").toggleClass("visible").addClass('slide-in-left');
        $(".last-header-part").toggleClass("visible").addClass('slide-in-left');
        if(isNewLogoDisplayed) {

            $(".menu-button i").removeClass("fa-times").addClass("fa-bars");
            
            isNewLogoDisplayed = false;
        } else {
            
            $(".menu-button i").removeClass("fa-bars").addClass("fa-times");
            
            isNewLogoDisplayed = true;
        }
    }
});
// MENU BUTTON
//==================================================

}); //========= Document ready closure ==============