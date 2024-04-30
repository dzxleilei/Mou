
// Inisiasi AOS
AOS.init();

console.clear();
gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ scrollTrigger: { markers: false } });

// Animasi untuk buku menu
const cardsWrappers = gsap.utils.toArray(".card-wrapper");
const cards = gsap.utils.toArray(".card");

cardsWrappers.forEach((wrapper, i) => {
    const card = cards[i];
    let scale = 1,
        rotation = 0;
    if (i !== cards.length - 1) {
        scale = 0.9 + 0.025 * i;
        rotation = -10;
    }
    const endValue = window.innerWidth <= 768 ? "bottom 350" : "bottom 550";
    gsap.to(card, {
        scale: scale,
        rotationX: rotation,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
            trigger: wrapper,
            start: "top " + (60 + 10 * i),
            end: endValue,
            endTrigger: ".wrapper",
            scrub: true,
            pin: wrapper,
            pinSpacing: false,
            id: i + 1
        }
    });
});

//Animasi Swiper
var mySwiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 12,
    effect: 'slide',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        reverseDirection: false,
    },
    allowTouchMove: false,
    preventClicks: false,
    // Breakpoints to adjust slidesPerView based on screen size
    breakpoints: {
        // When window width is <= 768px (mobile devices)
        768: {
            slidesPerView: 4 // Display only 1 slide
        },
    }
});


// Get the button
let mybutton = document.getElementById("button-up");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        mybutton.style.visibility = "visible";
    } else {
        mybutton.style.visibility = "hidden";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




