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
    navbarMenu.classList.remove('open');
})


//네비게이션 클릭 시, 테두리 설정
navbarMenu.addEventListener('click', (event) => {
    const navbarMenuList = document.querySelector('.navbar_menu').children;
    for (var i = 0; i < navbarMenuList.length; i++) {
        if (navbarMenuList[i].classList.length > 1) {
            navbarMenuList[i].classList.remove('active');
        }
    }
    const target = event.target;
    const link = target.dataset.link;
    const navbarToggle = document.querySelector(`li[data-link="${link}"]`)
    navbarToggle.classList.add('active');
})


// 프로젝트 필터링 제어
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (event) => {
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;

    // 프로젝트 필터링 버튼 테두리 설정
    const active = document.querySelector('.category_btn.active');
    active.classList.remove('active');
    const categotyBtn = document.querySelector(`button[data-filter="${filter}"]`);
    categotyBtn.classList.add('active');

    if (filter == null) {
        return;
    }
    projects.forEach((project) => {
        if (project.dataset.type === filter || filter === '*') {
            project.classList.remove('invisible');
        } else {
            project.classList.add('invisible');
        }
    })
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
});

// arrow_up 버튼 이벤트
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home')
});

// 햄버거 버튼 눌렀을때, 네비메뉴보이게 하기
const navBtn = document.querySelector('.navbar__toggle-btn');
navBtn.addEventListener('click', (event) => {
    navbarMenu.classList.toggle('open');
})


// 1.모든 섹션요소들과 메뉴아이템을 가지고 온다
// 2.IntersectionObserver를 이용해서 모든 섹션들을 관찰한다.
// 3.보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.

// const sectionIds = [
//     '#home',
//     '#about',
//     '#skills',
//     '#work',
//     '#contact'
// ]
// const sections = sectionIds.map(id => document.querySelector(id));
// const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`));
// let selectedNavItem = navItems[0];
// const option = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.3,
// }
// const observerCallback = (entries, observer) => {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             const index = sectionIds.indexOf(`#${entry.target.id}}`);
//             let selectedIndex;
//             if (entry.boundingClientRect.y < 0) {
//                 selectedIndex = index + 1;
//             } else {
//                 selectedIndex = index - 1;
//             }
//             selectedNavItem.classList.remove('active');
//             selectedNavItem = navItems[selectedIndex];
//             selectedNavItem.classList.add('active');
//         }
//     })
// }

// const observer = new IntersectionObserver(observerCallback, option);
// sections.forEach(section => observer.observe(section));

