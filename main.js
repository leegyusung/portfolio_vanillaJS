'use strict'



// 스크롤할때 네비게이션에 색상 생기게 하기
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark')
    } else {
        navbar.classList.remove('navbar--dark');
    }
})

// 네비 앵커 제어
const navbarMenu = document.querySelector('.navbar__menu');
document.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }

    scrollIntoView(link);

})

// Contact me 버튼 앵커 제어
const contactButton = document.querySelector('.home__contact');
contactButton.addEventListener('click', (event) => {
    scrollIntoView('#contact');
})

//앵커함수 공통처리
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' })
}


//네비 햄버거 클릭 제어
const navbarButton = document.querySelector('.navbar__toggle-btn');
const navbarMenu2 = document.querySelector('.navbar_menu');
document.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (!link) {
        navbar.classList.add('navbar--dark')
    }
})


//스크롤 내릴 시, 홈 화면 opacity 조정
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
})

// 스크롤 내릴 시, arrow_up 함수 표시
const arrowUp = document.querySelector('.arrow_up')
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible')
    } else {
        arrowUp.classList.remove('visible')
    }
})

// arrow_up 버튼 이벤트
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home')
})