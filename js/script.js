function navSlide() {
    const navItem = document.querySelector('.nav_item');
    const navMenu = document.querySelector('.nav_menu');
    
    navItem.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    })
    // navItem.addEventListener('mouseover', () => {
    //     navMenu.classList.toggle('show');
    // })
}
navSlide();