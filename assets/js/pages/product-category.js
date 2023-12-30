const customSelect = document.querySelector('.custom-select');

customSelect.addEventListener('click', () => {
    customSelect.classList.toggle('show');
});

window.addEventListener('click', (e) => {
    if (!customSelect.contains(e.target)) {
        customSelect.querySelector('.options').classList.remove('show');
    }
});

const options = customSelect.querySelectorAll('.options li');

options.forEach((option) => {
    option.addEventListener('click', () => {
        customSelect.querySelector('.selected-option p').innerText = option.innerText;
    });
});



const specialSlider = specialSwiperSlider("#product-crousle-special");

const spectialSliderBtn = activeCLickSpecialSlider(".content  .btn-slide");






  document.querySelector('.show-content ').addEventListener('click',()=>{
    document.querySelector(" .description .content").classList.toggle('show');
    if(document.querySelector(" .description .content").classList.contains('show')){
        document.querySelector('.show-content svg').setAttribute( 'style','transform:rotate(180deg)');
        document.querySelector(".show-content  p").innerHTML="بستن توضیحات";

    }else{
        document.querySelector('.show-content svg').setAttribute( 'style','transform:rotate(0deg)');
        document.querySelector(".show-content  p").innerHTML=" نمایش توضیحات";

    }
})
