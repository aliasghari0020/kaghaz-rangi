
function toggleClass(selector, action, className, newClassName = '') {
    const element = typeof selector === 'string' ? document.querySelector(selector) : selector;
    switch (action) {
        case 'add':
            element.classList.add(className);
            break;
        case 'remove':
            element.classList.remove(className);
            break;
        case 'toggle':
            element.classList.toggle(className);
            break;
        case 'replace':
            if (newClassName) {
                element.classList.replace(className, newClassName);
            }
            break;
    }
}


function fixedHeader() {
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        if (scrollY > 170) {
            toggleClass('header', "add", "fixed-header");
        } else {
            toggleClass('header', "remove", "fixed-header");
        }
    });
}


fixedHeader();


function toggleSearchElements(length, index, searchElements) {

    if (length > 0) {
        toggleClass(searchElements.searches, "replace", 'bg-gray-1', 'bg-white');
        toggleClass(searchElements.boxes[index], "replace", 'bg-gray-1', 'bg-white');
        toggleClass(searchElements.results[index], "replace", 'd-none', 'd-block');
        toggleClass(searchElements.deleteValue, "replace", 'd-none', 'd-block');
    } else {
        toggleClass(searchElements.searches, "replace", 'bg-white', 'bg-gray-1');
        toggleClass(searchElements.boxes[index], "replace", 'bg-white', 'bg-gray-1');
        toggleClass(searchElements.results[index], "replace", "d-block", "d-none");
        toggleClass(searchElements.deleteValue, "replace", 'd-none', 'd-block');

    }
}


let searchElements = {
    boxes: document.querySelectorAll('header input'),
    forms: document.querySelectorAll('.form-search'),
    searches: document.querySelector('.search'),
    results: document.querySelectorAll('.search-results'),
    deleteValue: document.querySelector('.delete-value')
};

searchElements.boxes.forEach((searchBox, index) => {
    searchBox.addEventListener('input', (event) => {
        let inputValue = event.target.value;
        let length = inputValue.length;
        toggleSearchElements(length, index, searchElements);
        searchElements.deleteValue.addEventListener('click', () => {
            searchBox.value = "";
            length = 0;
            toggleSearchElements(0, index, searchElements);
        });

    });


});


searchElements.forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        toggleClass("header .offcanvas", "remove", "aria-modal");
        toggleClass("header .offcanvas", "remove", "role");
        toggleClass("header .offcanvas-backdrop", "remove", "show");
        toggleClass("header .offcanvas", "remove", "show");
    });
});

//  slider for show cards ---------------------------->

function createSwiperSliderCard(elementId,next,prev) {
    return new Swiper(elementId, {
        loop: true,
        slidesPerView: 1.25,
        spaceBetween: 16,
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 16
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 16
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 16
            }, 
            1200: {
                slidesPerView: 5,
                spaceBetween: 16
            },
            1600: {
                slidesPerView: 6,
                spaceBetween: 16
            }
        },
        navigation: {
            nextEl: next,
            prevEl: prev,
        },
    });
}


function createSwiperSlider(){
    return new Swiper("#slider",{
        // Optional parameters
        loop: true,
    
        // If we need pagination
        pagination: {
            el: '#slider-pagination',
        },
    
        // Navigation arrows
        navigation: {
            nextEl: "#slider-next",
            prevEl: "#slider-prev",
        },
    
        // And if we need scrollbar
        scrollbar: {
            el: '#slider-scrollbar',
        }
    });
    
}

function specialSwiperSlider(elementId){
    return new Swiper(elementId,{
        // Optional parameters
        loop: true,
        slidesPerView: 1.144,
        spaceBetween: 16,
        breakpoints: {
            480: {
                slidesPerView: 1.9886,
                spaceBetween: 16
            },
            768: {
                slidesPerView: 1.898,
                spaceBetween: 16
            },
            1024: {
                slidesPerView: 2.7463,
                spaceBetween: 16
            }, 
            1200: {
                slidesPerView: 3.83,
                spaceBetween: 16
            },
            1600: {
                slidesPerView: 4.83,
                spaceBetween: 16
            }
        },
        // Navigation arrows
        navigation: {
            nextEl: '#swiper-next',
            prevEl: '#swiper-prev',
        },
    });
    
}

function activeCLickSpecialSlider(selector){
    const swiperBtn = document.querySelectorAll(selector);
    let activeBtn;
    swiperBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (activeBtn) {
             activeBtn.classList.remove('active');
        }
        activeBtn = btn;
        btn.classList.add('active');
    });
    });
}

