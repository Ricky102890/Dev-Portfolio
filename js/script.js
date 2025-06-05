function navSlide() {
    const navItem = document.querySelector('.nav_item');
    const navMenu = document.querySelector('.nav_menu');
    const navLinks = document.querySelector('.nav_links');
    navItem.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        navLinks.classList.toggle('show');
    })
    // navItem.addEventListener('mouseover', () => {
    //     navMenu.classList.toggle('show');
    // })
}
navSlide();