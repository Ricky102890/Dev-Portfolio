function navSlide() {
    const navItem1 = document.querySelector('.link_box1');
    const navItem2 = document.querySelector('.link_box2');
    const navItem3 = document.querySelector('.link_box3');
    const navMenu1 = document.querySelector('.sub_menu1');
    const navMenu2 = document.querySelector('.sub_menu2');
    const navMenu3 = document.querySelector('.sub_menu3');
    const navLink1 = document.querySelector('sub_link1');
    const navLink2 = document.querySelector('.sub_link2');
    const navLink3 = document.querySelector('.sub_link3');

    navItem2.addEventListener('click', () => {
        navMenu2.classList.toggle('show');
        navLink2.classList.toggle('show');
    })
    navItem3.addEventListener('click', () => {
        navMenu3.classList.toggle('show');
        navLink3.classList.toggle('show');
    })
    // navItem.addEventListener('mouseover', () => {
    //     navMenu.classList.toggle('show');
    // })
}
navSlide();