$(document).ready(function() {
  $('[data-serialscrolling]').serialscrolling();
});
const header = document.querySelector(".menu");
const progcl = document.querySelector(".progressset");
    const toggleClass = "has-sticky";
    const progressClass = "progressbg";

    window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 300) {
        header.classList.add(toggleClass);
        progcl.classList.add(progressClass);
    } else {
        header.classList.remove(toggleClass);
        progcl.classList.remove(progressClass);
    }
});
$(document).on("scroll", function(){
  var pixels = $(document).scrollTop();
  var pageHeight = $(document).height() - $(window).height();
  var progress = 100 * pixels / pageHeight;
  
  $(".pageprogress").css("width", progress + "%");
  $(".pageprogress").css("background-color","green");
}) 
var swiper = new Swiper(".seen-slider", {
    loop:true,
    autoplay:true,
    spaceBetween:5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4.1,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
  var swiper = new Swiper(".reviewpoint1", {
    loop:true,
    spaceBetween:0,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  var swiper = new Swiper(".homeslide", {
    autoplay:true,
    speed: 1200,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }); 
  var swiper = new Swiper(".tslide", {
    loop:true,
    allowTouchMove: true,
    slidesPerView:1,
    spaceBetween:5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });
  var swiper = new Swiper(".brandlist", {
    watchSlidesProgress: true,
    slidesPerView: 5,
    lazy: true,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 10000,
    breakpoints: {
      0: {
        slidesPerView: 2.2,
      },
      575: {
        slidesPerView: 3.8,
      },
      768: {
        slidesPerView: 3.8,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });
  var swiper = new Swiper(".galleryguest", {
    loop:true,
    allowTouchMove: true,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      468: {
        slidesPerView: 2.6,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 3.3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
  window.addEventListener('DOMContentLoaded', () => {
    new CircularProgressBar({
      percent: 100,
      pie: 'piea',
      color: '#fe5000'
    });
    new CircularProgressBar({
      percent: 99,
      pie: 'pieb',
      color: '#fe5000'
    });
    new CircularProgressBar({
      percent: 86,
      pie: 'piec',
      color: '#fe5000'
    });
    new CircularProgressBar({
      percent: 66,
      pie: 'pied',
      color: '#fe5000'
    });
  });
  
  
  $('.noword').keypress(function(event) {
  console.log(event.which);
  if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
        event.preventDefault();
  }
});

$('input[type="tel"]').bind('input', function() {
var c = this.selectionStart,
    r = /[^a-z0-9 .]/gi,
    v = $(this).val();
if(r.test(v)) {
  $(this).val(v.replace(r, ''));
  c--;
}
this.setSelectionRange(c, c);
}); 