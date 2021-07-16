$(document).ready(function(){
    // Slcik Carousel
    $('.slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
      });



    // Swiper Carousel
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 5,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
        }
      });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
    });


    // Owl Carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        dots:false,
        nav:false,
        margin:10,
        responsive:{
            320:{
                items:1
            },
            576:{
                items:3
            },            
            768:{
                items:5
            },
            992:{
                items:6
            }
        }
    });
    /*
    owl[0].addEventListener('mousewheel', e => {
        if (e.deltaY > 0) {
          $('.owl-carousel').trigger('next.owl');
        } else {
          $('.owl-carousel').trigger('prev.owl');
        }
        e.preventDefault();
    }, false); 
    */
    //Firefox:
    owl.on('DOMMouseScroll','.owl-stage',function(e){
      if (e.originalEvent.detail > 0){ 
          owl.trigger('next.owl');
          } else {
          owl.trigger('prev.owl');
      }
      e.preventDefault();
      });

    //Chrome, IE
    owl.on('mousewheel','.owl-stage',function(e){
      if (e.originalEvent.wheelDelta > 0){
          owl.trigger('next.owl');
          } else {
              owl.trigger('prev.owl');
      }
      e.preventDefault();
    });


    // Flex Slider
    $('.flexslider').flexslider({
      animation: "slide"
    });


    // Gliser Slider
    window.glides = new Glider(document.getElementById('glider-persp'), {
      slidesToShow: 5,
      slidesToScroll: 1,
      draggable: true,
      dots: '.dots',
      responsive: [
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            dots: false,
          }
        },{
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            dots: false,
          }
        },{
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },{
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
          }
        }
      ]
    })

});