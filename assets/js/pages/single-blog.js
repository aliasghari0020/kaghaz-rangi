

const allGalleryComponents = document.querySelectorAll('.gallery');

allGalleryComponents.forEach((component, index) => {
  const modal = component.querySelector(".gallery-modal");
  const itmes = component.querySelectorAll(".item");
  const gallerySlider =  component.querySelector(".gallery-slider")
  const nextButton = component.querySelector(".next-slide-btn");
  const prevButton = component.querySelector(".prev-slide-btn");
  prevButton.style.opacity = '0.5';
  slider = new Swiper(gallerySlider, {
    loop:false,
    navigation: {
      nextEl: ".next-slide-btn",
      prevEl: ".prev-slide-btn",
    },
    on: {
      slideChange: function () {
        if (slider.isEnd) {
          nextButton.style.opacity = '0.5';
        } else {
          nextButton.style.opacity = '1';
        }
        if (slider.isBeginning) {
          prevButton.style.opacity = '0.5';
        } else {
          prevButton.style.opacity = '1';
        }
      },
    },
  });
  itmes.forEach((itme, index) => {
    itme.setAttribute('onclick', `slider.slideTo(${index})`);
    itme.addEventListener("click", () => {
      bsModal = new bootstrap.Modal(modal, {});
      bsModal.show();
    })
  })
})



const sliderBox = (selctor , next , prev)=>{
  const carouselSingle =  new Swiper(selctor, {
    loop: true,
    slidesPerView: 1.25,
    spaceBetween: 16,
    navigation: {
      nextEl: next,
      prevEl: prev,
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 16
        },
        768: {
            slidesPerView: 2.6,
            spaceBetween: 16
        },
        830:{
          slidesPerView: 3,
          spaceBetween: 16
        },
    },
  
  });
}

sliderBox("#chosen-single-slider","#chosen-next" ,"#chosen-prev")

sliderBox("#related-posts-slider","#related-posts-next","#related-posts-prev")
activeCLickSpecialSlider('.btn-slide')




const activeInputComment = () => {
  const inputBox = document.querySelector('#main-input-comment');
  const input = inputBox.querySelector('input');

  let boxClicked = false;

  inputBox.addEventListener('mousedown', () => {
      boxClicked = true;
      input.focus()
      inputBox.classList.add('active');
  });

  document.addEventListener('mouseup', () => {
      if (!boxClicked) {
          inputBox.classList.remove('active');
          input.blur()
      }
      boxClicked = false;
  });
}




activeInputComment();


const changeTextCollapse = ()=>{
  const commentBox = document.querySelectorAll('.comment-box');
  commentBox.forEach((e)=>{
    const collapseText = e.querySelectorAll(".btn-show-sub");
    collapseText.forEach((item)=>{
      const text = item.querySelector('.text')
      item.addEventListener('click',()=>{
       if( item.classList.contains('collapsed')){
        text.innerHTML = "مشاهده همه پاسخ‌ها";
       }else{
        text.innerHTML = "بستن پاسخ‌ها";
       }
      })
    })
  })

}

changeTextCollapse()





