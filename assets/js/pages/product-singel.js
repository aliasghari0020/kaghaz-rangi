document.querySelector('#text').addEventListener('click',()=>{
    document.querySelector("#text-2 p").classList.toggle('active');
    if(document.querySelector("#text-2 p").classList.contains('active')){
        document.querySelector('#text svg').setAttribute( 'style','transform:rotate(180deg)')
    }else{
        document.querySelector('#text svg').setAttribute( 'style','transform:rotate(0deg)')

    }
})

// 
document.querySelectorAll('.product-box').forEach((item,index)=>{
    item.setAttribute('onclick',`swiper2.slideTo(${index})`)
})


var swiper, swiper2;

function createSwipers() {
    // اگر سویپرها قبلا ایجاد شده‌اند، آن‌ها را نابود کنید
    if (swiper) swiper.destroy();
    if (swiper2) swiper2.destroy();

    let swiperDirection;
    if (window.innerWidth >= 1024) {
        swiperDirection = 'vertical';
    } else {
        swiperDirection = 'horizontal';
    }

    swiper = new Swiper(".mySwiper", {
        direction: swiperDirection,
        spaceBetween: 10,
        slidesPerView: 2.3,
        breakpoints: {
            480: {
                slidesPerView: 3.3,
                spaceBetween: 10,
                
            },
        },
        freeMode: true,
        watchSlidesProgress: true,
        mousewheel: true,
    });

    swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
    });
}

// ایجاد سویپرها در هنگام بارگذاری صفحه
createSwipers();

// ایجاد مجدد سویپرها هر بار که اندازه صفحه تغییر می‌کند
window.onresize = createSwipers;