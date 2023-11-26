
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    autoplayButtonOutput: false,
    navPosition: top,
});

document.querySelector('.slick-prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.slick-next').addEventListener('click', function() {
    slider.goTo('next');
})