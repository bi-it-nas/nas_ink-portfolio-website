/* scripts.js */

// Function for smooth scrolling and container transitions
const container = document.getElementById('container');

document.getElementById('about-me',"about").addEventListener('click', function () {
    const aboutSection = document.getElementById('about-section');
    setTimeout(() => {
        aboutSection.scrollIntoView({behavior: 'smooth'});
        container.classList.remove('down');
    }, 500);
    document.getElementsByClassName("pie-parent")[0].classList.remove("pie-hidden")
});

document.getElementById('projects').addEventListener('click', function () {
    const projectsSection = document.getElementById('projects-section');
    setTimeout(() => {
        projectsSection.scrollIntoView({behavior: 'smooth'});
        container.classList.remove('down-fast');
    }, 500);
    document.getElementsByClassName("pie-parent")[0].classList.remove("pie-hidden")

});

document.getElementById('contact').addEventListener('click', function () {
    const contactSection = document.getElementById('contact-section');
    setTimeout(() => {
        contactSection.scrollIntoView({behavior: 'smooth'});
        container.classList.remove('down-fast');
    }, 500);
    document.getElementsByClassName("pie-parent")[0].classList.remove("pie-hidden")
});


document.querySelectorAll('.home-button').forEach(function (button) {
    button.addEventListener('click', function () {
        window.location.href = 'index.html';
        document.getElementsByClassName("pie-parent")[0].classList.add("pie-hidden")
        document.getElementsByClassName("pie-parent")[0].animate()

    });
});

