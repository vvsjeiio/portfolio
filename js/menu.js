const menuButton = document.querySelector('.button-menu');
const menuPanel = document.querySelector('.menu');
const closeButton = document.querySelector('.quit-menu');

function showMenu() {
    menuPanel.classList.add('show-menu');
}

function hideMenu() {
    menuPanel.classList.remove('show-menu');
}

menuButton.addEventListener('click', showMenu);
closeButton.addEventListener('click', hideMenu);

// Close the menu if an anchor link is clicked
menuPanel.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
        hideMenu();
    });
});

window.addEventListener('scroll', () => {
    // Apply the current scroll position so that the menu appears in the right place
    menuPanel.style.top = `${window.scrollY}px`;
});