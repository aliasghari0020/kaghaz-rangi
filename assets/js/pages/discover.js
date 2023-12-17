const slider = createSwiperSlider();

const productSlider = createSwiperSliderCard("#product-crousle" ,"#product-next", "#product-prev");


const specialSlider = specialSwiperSlider("#product-crousle-special");

const spectialSliderBtn = activeCLickSpecialSlider(".content  .btn-slide");




window.onscroll = () => {
    let stickyButton = document.querySelector('.btn-sticky');
    let linkInsideButton = stickyButton.querySelector('.btn-sticky a');
    let opacity = Math.max(0, 1 - window.pageYOffset / 2000);
    stickyButton.style.opacity = opacity.toString();
    if (opacity <= 0.7) {
        stickyButton.disabled = true;
        linkInsideButton.style.pointerEvents = 'none';
    } else {
        stickyButton.disabled = false;
        linkInsideButton.style.pointerEvents = 'auto';
    }
};