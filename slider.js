// slider
// const prev = document.querySelector('.prevBtn');
// const next = document.querySelector('.nextBtn');
// const container = document.querySelector('.images')

// let counter = 0;

// next.addEventListener('click', () => {
//     if (counter === 4) {
//         counter = -1;
//     }
//     counter++;
//     container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`
// })

// prev.addEventListener('click', () => {
//     if (counter === 0) {
//         counter = 4;
//     }
//     counter--;
//     container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`
// })

// $('#myCarousel').carousel({
//     interval: false
// });

//scroll slides on swipe for touch enabled devices

// $("#myCarousel").on("touchstart", function (event) {

//     var yClick = event.originalEvent.touches[0].pageY;
//     $(this).one("touchmove", function (event) {

//         var yMove = event.originalEvent.touches[0].pageY;
//         if (Math.floor(yClick - yMove) > 1) {
//             $(".carousel").carousel('next');
//         } else if (Math.floor(yClick - yMove) < -1) {
//             $(".carousel").carousel('prev');
//         }
//     });
//     $(".carousel").on("touchend", function () {
//         $(this).off("touchmove");
//     });
// });

// split slider
document.addEventListener('DOMContentLoaded', function () {
    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;

    if (wrapper.className.indexOf('skewed') != -1) {
        skew = 1000;
    }

    wrapper.addEventListener('mousemove', function (e) {
        delta = (e.clientX - window.innerWidth / 2) * 0.5;

        handle.style.left = e.clientX + delta + 'px';

        topLayer.style.width = e.clientX + skew + delta + 'px';
    });
});