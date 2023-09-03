const hamburgerMenu = document.querySelector('.hamburger-menu');
const choice = document.querySelector('.choice')
const bodyElement = document.body;


hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    openNav()
    
});

function openNav() {
    if (choice.classList.contains('active')) {
        choice.classList.add('fade-out')
         setTimeout(() => {
            choice.classList.remove('fade-out', 'active');
        }, 250);

        bodyElement.classList.toggle('active')
    }
    else {
        choice.classList.toggle('active')
        bodyElement.classList.toggle('active')
    }
}
    

function closeNav() {
    choice.classList.remove("active")
}