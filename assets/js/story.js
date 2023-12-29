

const storys = document.querySelectorAll('.story');
const closeBtn = document.querySelectorAll('.btn-close-modal');
let isAutoplaying = false;

let bsModal;
//  Open the modal at the specified index when a story element is clicked
storys.forEach((story, index) => {
    story.setAttribute('onclick', `swiper1.slideTo(${index})`);
    story.addEventListener('click', (e) => {
        openCloseModal('show');

    })
})
// Close the modal when a close button element is clicked
closeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        openCloseModal('hide');
        
    })
})
// Open or close the modal
const openCloseModal = (type) => {
    const modal = document.getElementById('modal-story');
   
    if (!bsModal) {
        bsModal = new bootstrap.Modal(modal, {});
    }

    if (type === "show") {
        bsModal.show();
        isAutoplaying = true;
        swiper1.autoplay.start();  
   
    } else if (type === "hide") {
        bsModal.hide();
        isAutoplaying = false;
        swiper1.autoplay.stop(); 
    }
}
// Close the modal after a specified amount of time
const timerClose = () => {
    openCloseModal('hide');
    clearInterval(intervalId);
}

const swiper1 = new Swiper('#full-story-slider', {
    loop: false,
    centeredSlides: true,
    autoplay: {
        delay: 15000,
        disableOnInteraction: false,
    },
    on: {
        slideChange: function () {
            if (this.activeIndex === 8) {
                intervalId = setInterval(() => {
                    timerClose()
                }, 15000);
            }
        },
        autoplayTimeLeft(s, time, progress) {
            if (isAutoplaying) {
                const timeLine = document.querySelectorAll('.time-line div');
                width = Math.floor((1 - progress) * 100);
                timeLine.forEach((line) => {
                    line.setAttribute('style', `width: ${width}%`);
                })
            }
        },
        
    }
});





