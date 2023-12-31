
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
let searchElements = {
    boxes: document.querySelectorAll('header input'),
    forms: document.querySelectorAll('.form-search'),
    searches: document.querySelector('.search'),
    results: document.querySelectorAll('.search-results'),
    deleteValue: document.querySelector('.delete-value'),
    step1:document.querySelectorAll('.step-1'),
    step2:document.querySelectorAll('.step-2'),
};

function toggleSearchElements(length, index, searchElements) {
    if (length > 0) {
        toggleClass(searchElements.step1[index], "replace", 'd-block', 'd-none');
        toggleClass(searchElements.step2[index], "replace", 'd-none', 'd-block');
        toggleClass(searchElements.deleteValue, "replace", 'd-none', 'd-block');
    } else {
        toggleClass(searchElements.step1[index], "replace", 'd-none', 'd-block');
        toggleClass(searchElements.step2[index], "replace", 'd-block', 'd-none');
        toggleClass(searchElements.deleteValue, "replace", 'd-block', 'd-none');
    }
}

function searchActions (){
    const container = document.querySelector('.search');
    document.addEventListener('click', (e) => {
      
        if (!container.contains(e.target)) {
            const collapse = document.querySelector('.search-results');
            new bootstrap.Collapse(collapse, { toggle: false }).hide();
        }else{
             const collapse = document.querySelector('.search-results');
            new bootstrap.Collapse(collapse, { toggle: true }).show();
        }

        if(container.classList.contains('collapsed')){
            toggleClass(container, 'remove', 'action');
           
        }else{
            toggleClass(container, 'add', 'action');
           
        }
    });


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
    
    

    
}


searchActions()







// searchElements.boxes.forEach((searchBox, index) => {

//     searchBox.addEventListener('input', (event) => {
//         // let inputValue = event.target.value;
//         // let length = inputValue.length;
//         // toggleSearchElements(length, index, searchElements);
//         searchElements.deleteValue.addEventListener('click', () => {
//             searchBox.value = "";
//             // length = 0;
//             // toggleSearchElements(0, index, searchElements);
//         });
//     });

//     searchBox.addEventListener('click', () => {
//        let length = 1;
//         toggleSearchElements(length, index, searchElements);
//     });

//     searchBox.addEventListener('blur', ()=> {
//         let length = 0;
//         toggleSearchElements(length, index, searchElements);
//       });
//       searchElements.searches.addEventListener('mousedown', function(event) {
//         event.preventDefault();
//       }, false);

// });




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

function createSwiperSliderCard(elementId, next, prev) {
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


function createSwiperSlider() {
    return new Swiper("#slider", {
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

function specialSwiperSlider(elementId) {
    return new Swiper(elementId, {
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

function activeCLickSpecialSlider(selector) {
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



// login form


const changeStepLogin = () => {
    let bsModal;

    const loginModal = document.querySelector('#login');
    if (!bsModal) {
        bsModal = new bootstrap.Modal(loginModal, {});
    }
    const steps = loginModal.querySelectorAll(".login-step");
    steps.forEach((step) => {

        const btn = step.querySelector('button');

        btn.addEventListener('click', (event) => {

            event.preventDefault();
            if (btn.classList.contains('active')) {
                if (step.classList.contains('login-step-1')) {
                    toggleClass(step, "replace", 'd-block', 'd-none');
                    toggleClass(".login-step-2", "replace", 'd-none', 'd-block');
                }

                if (step.classList.contains('login-step-2')) {
                    toggleClass(step, "replace", 'd-block', 'd-none');
                    toggleClass(".login-step-3", "replace", 'd-none', 'd-block');
                }
                if (step.classList.contains('login-step-3')) {

                }
            }
        })

    })
    loginModal.addEventListener('hidden.bs.modal', function () {
        steps.forEach((step) => {
            if (step.classList.contains('login-step-1')) {
                toggleClass(step, "replace", 'd-none', 'd-block');
            } else {
                toggleClass(step, "replace", 'd-block', 'd-none');
            }
        })
    })

    const textfilds = loginModal.querySelectorAll('.textfild');
    textfilds.forEach((e) => {
        const input = e.querySelector('input');
        input.addEventListener('focus', () => {
            e.classList.add('focus')
        })
        input.addEventListener('blur', () => {
            e.classList.remove('focus')

        })
    })

}




changeStepLogin()