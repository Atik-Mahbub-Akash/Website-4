/* ------------------------------------sticky header-------------------------- */
const header = document.querySelector('.header-2');

window.onscroll = ()=>{
   if(window.pageYOffset > 110){
       header.classList.add('sticky')
   }
   else{
       header.classList.remove('sticky')
   }
   inputForm.classList.remove('active')
}
/* --------------------------------search box-------------------------- */
const search = document.querySelector('#search-box');
const inputGroup = document.querySelector('.input-group');

search.onclick = ()=>{
    inputGroup.classList.toggle('active')
}
/* -----------------------------------------input form-------------------------------- */
const user = document.querySelector('#user-box');
const inputForm = document.querySelector('.input-form');
const close = document.querySelector('#close-bar')

user.onclick = ()=>{
    inputForm.classList.toggle('active')
}
close.onclick = ()=>{
    inputForm.classList.remove('active')
}
/* -------------------------------------------home carousel------------------------------- */
var swiper = new Swiper(".home-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
         0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    });
/* ---------------------------------------------------featured-slider-------------------------------- */
var swiper = new Swiper(".featured-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
         0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    });
/* -------------------------------------------------------arrival-slider---------------------------- */
var swiper = new Swiper(".arrival-slider", {
loop:true,
centeredSlides: true,
    autoplay: {
     delay: 9500,
     disableOnInteraction: false,
},
breakpoints: {
     0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
        },
    1024: {
         slidesPerView: 3,
    },
},
});

/* --------------------------------review slider----------------------------- */
var swiper = new Swiper(".testimonial-slider", {
loop:true,
centeredSlides: true,
    autoplay: {
     delay: 9500,
        disableOnInteraction: false,
},
breakpoints: {
        0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
        },
    1024: {
        slidesPerView: 3,
    },
},
});
/* -------------------------------------------blog slider------------------------------- */
var swiper = new Swiper(".blog-slider", {
loop:true,
centeredSlides: true,
    autoplay: {
        delay: 9500,
         disableOnInteraction: false,
},
breakpoints: {
         0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
        },
    1024: {
        slidesPerView: 3,
    },
 },
});

/* -----------------------------------up and down button-------------------------------- */
const toDo = document.querySelector('.toDo');

window.onscroll = ()=>{
    if(window.pageYOffset > 100){
        toDo.classList.add('active')
    }
    else{
        toDo.classList.remove('active')
    }
}