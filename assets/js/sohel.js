var swiper = new Swiper('.product_slider', {
    // Optional parameters
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    grabCursor: true,
    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    //     dynamicBullets: true,
    // },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1.2
        },
        576: {
            slidesPerView: 2.5
        },
        768: {
            slidesPerView: 3.5
        },
        // 992: {
        //     slidesPerView: 4.5
        // }
    }
});


var swiper = document.querySelector('.product_slider').swiper

$(".product_slider").mouseenter(function() {
    swiper.autoplay.stop();
});

$(".product_slider").mouseleave(function() {
    swiper.autoplay.start();
});


// video play button
const video = document.getElementById("video_shot");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function() {
    circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function() {
    circlePlayButton.style.opacity = 1;
});

// video play vutton END



// header small when scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('nav').addClass('nav_scroll py-1 py-lg-3');
        $('nav').removeClass('py-2 py-lg-4');

    } else {
        $('nav').removeClass('nav_scroll py-1 py-lg-3');
        $('nav').addClass('py-2 py-lg-4');

    }
});
// header small when scroll END


// preloaer
// requires jquery

$(document).ready(function($) {

    $(window).bind('load', function() {
        $('#preloader, body').addClass('loaded');
        setTimeout(function() {
            $('#preloader').css({ 'opacity': '0', 'visibility': 'hidden', 'transition': '.3s' })
        }, 2000)
    });

    // Will removepreloader after 1min for users cannnot load properly.
    setTimeout(function() {
        $('#preloader, body').addClass('loaded');
    }, 60000);
});

// preloaer END