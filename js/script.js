// DARK MODE -------------------

const button = document.querySelectorAll('.darkmode');

button.forEach(function (button) {
    button.addEventListener('click', () => {
        // Select image to swap
        const darkMode = button.querySelector('.show');
        const lightMode = button.querySelector('.hide');

        // Invert show & hide class
        darkMode.classList.remove('show');
        darkMode.classList.add('hide');

        lightMode.classList.remove('hide');
        lightMode.classList.add('show');

        // Swap main colors
        const root = document.documentElement;
        const currentBlack = getComputedStyle(root).getPropertyValue('--night-mode-black');
        const currentWhite = getComputedStyle(root).getPropertyValue('--night-mode-white');
        // Swap secondary colors
        const secondaryBlack = getComputedStyle(root).getPropertyValue('--light-mode-black');
        const secondaryWhite = getComputedStyle(root).getPropertyValue('--light-mode-white');

        // Set colors
        root.style.setProperty('--night-mode-black', currentWhite.trim());
        root.style.setProperty('--night-mode-white', currentBlack.trim());
        root.style.setProperty('--light-mode-black', secondaryWhite.trim());
        root.style.setProperty('--light-mode-white', secondaryBlack.trim());


        //Change icon color
        var icons = document.querySelectorAll(".icon");
        icons.forEach(function (icon) {
            // Switch order if landing mode is reversed
            if (document.body.classList.contains("dark-mode")) {
                icon.style.filter = "brightness(0%) saturate(0%)  invert(100%) brightness(98%)"; // White

            } else {
                icon.style.filter = "invert(10%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(90%)"
            }
        });
        document.body.classList.toggle("dark-mode");
    });
});


// DOWNLOAD BUTTON -----------

function downloadDevCV() {
    const link = document.createElement("a");
    link.href = "./data/CV_Baptiste_BLET_DevWeb.pdf";
    link.download = "Baptiste_BLET_CV(développeur web).pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadPoCV() {
    const link = document.createElement("a");
    link.href = "./data/CV_Baptiste_BLET_ProductOwner.pdf";
    link.download = "Baptiste_BLET_CV(product owner).pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// COPY BUTTON -----------------

function copyToClipboard(textToCopy) {
    navigator.clipboard.writeText(textToCopy).then(() => {
        const copiedMessage = document.querySelector('.copied');
        copiedMessage.style.opacity = '1';
        setTimeout(() => {
            copiedMessage.style.opacity = '0';
        }, 1000);
    }).catch(err => {
        console.error('Copy error :', err);
    });
}

// document.querySelectorAll('.button-copy').forEach(button => {
//     button.addEventListener('click', () => {
//         const contentToCopy = button.closest('.copy').querySelector('h4').textContent;
//         navigator.clipboard.writeText(contentToCopy).then(() => {
//             const copiedMessage = button.nextElementSibling;
//             copiedMessage.style.opacity = '1';
//             setTimeout(() => {
//                 copiedMessage.style.opacity = '0';
//             }, 1000);
//         }).catch(err => {
//             console.error('Copy error :', err);
//         });
//     });
// });


// POSITION FOR ANCHOR LINKS --------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevents default behaviour

        const targetId = this.getAttribute('href').substring(1); // Retrieves the target ID
        const targetElement = document.getElementById(targetId); // Selects the target element

        if (targetElement) {
            let offsetPosition;

            // Calculates the position to centre the section
            if (window.innerWidth >= 550) {
                offsetPosition = targetElement.offsetTop - (window.innerHeight / 2) + (targetElement.offsetHeight / 2);
            }
            else {
                offsetPosition = targetElement.offsetTop - (55);
            }
            // Scrolls to calculated position
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' // Smooth scrolling
            });
        }
    });
});
