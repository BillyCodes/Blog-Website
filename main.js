// Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

//Nav styles on scroll
const scrollHeader = () =>{
    const navbarElement = selectElement('#header');
    if(this.scrollY >= 15) {
        navbarElement.classList.add('activated');
    } else {
        navbarElement.classList.remove('activated');
    }
}

window.addEventListener('scroll', scrollHeader);


// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchContainer = selectElement('#search-form-container');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);

// Open/Close search form popup
formOpenBtn.addEventListener('click', () => searchContainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchContainer.classList.remove('activated'));

// -- Close the search form popup on ESC keypress
window.addEventListener('keyup', event => {
  if(event.key === 'Escape') searchContainer.classList.remove('activated');
});

// Switch theme/add to local storage
const body = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

//Check to see if there is a theme preference in local Storage, if so add the light theme to the body
if (currentTheme) {
    body.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', function () {
    body.classList.toggle('light-theme'); //Add light theme on click

    if (body.classList.contains('light-theme')) { //If the body has the class of light theme then add it to local Storage, if not remove it
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});

// Swiper
const swiper = new Swiper(".swiper", { //How many slides to show
    slidesPerView: 1, 
    spaceBetween: 20, //How much space between slides
    navigation: { //Make the next and previous buttons work
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: { //Make the pagination indicators work
        el: '.swiper-pagination'
    },
    breakpoints: { //Responsive breakpoints for how many slides to show at that view
        700: { //700px and up shows 2 slides
            slidesPerView: 2
        },
        1200: { //1200px and up shows 3 slides
            slidesPerView: 3
        } 
    }
});




