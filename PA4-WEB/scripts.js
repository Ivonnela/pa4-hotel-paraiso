$(document).ready(function () {
    let index = 0;
    const images = $("#banner img");
    images.eq(index).fadeIn();

    setInterval(function () {
        images.eq(index).fadeOut();
        index = (index + 1) % images.length;
        images.eq(index).fadeIn();
    }, 3000);
});
