const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');

    burger.addEventListener('click', () => {
        //toggle nav on small screens
        nav.classList.toggle('nav-active');

        //Animate Nav Links
        navLinks.forEach((link, index ) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        });

        //Burger Menu animation
        burger.classList.toggle('toggle');
    });
}

navSlide();