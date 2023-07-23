function gotowhatsapp() {
    let query = document.getElementById("newsletter1").value;
    let url =
        "https://wa.me/918088263376?text=" +
        "Hi Gyan Academy , I have query about... :- "
        + query;
    window.open(url, "_blank").focus();
}

// document.querySelector(".cet").click(function(){
//      window.location = "www.http://cetonline.karnataka.gov.in/kea/"; 
//     });

//  function show (){

// document.classList.remove("remove").style.display = "block";
// }







var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

