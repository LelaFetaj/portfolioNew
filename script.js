const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky",this.window.scrollY > 120);
})
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () =>{
    menu.remove.toggle('bx-x');
    navlist.remove.toggle('active');
}

document.getElementById('exploreButton').addEventListener('click', function() {
    const visibleJobs = document.querySelector('.visible-jobs');
    const hiddenJobs = document.querySelector('.hidden-jobs');
    
    if (hiddenJobs.style.display === 'none' || hiddenJobs.style.display === '') {
        visibleJobs.style.display = 'none'; // Hide first two jobs
        hiddenJobs.style.display = 'block'; // Show hidden jobs
        // this.style.display = 'none';
        this.textContent = 'Show Less'; // Change button text back
    } else {
        visibleJobs.style.display = 'block';
        hiddenJobs.style.display = 'none';
        // this.style.display = 'none';
        this.textContent = 'Explore More'; // Change button text
    }
});

var typed = new Typed('#element', {
    strings: ['Coder', 'Software Engineer'],
    typeSpeed: 120,
    backSpeed: 90
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('theme-toggle');
    const heroSection = document.querySelector('.hero');
    const themeIcon = toggleButton.querySelector('i');

    toggleButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor behavior

        document.body.classList.toggle('light-theme');

        if (document.body.classList.contains('light-theme')) {
            heroSection.style.backgroundImage = 'url(./img/background5.png)';
            // themeIcon.classList.remove('ri-contrast-2-line'); 
            // themeIcon.classList.add('ri-sun-line'); 
            themeIcon.classList.remove('ri-sun-line'); 
            themeIcon.classList.add('ri-contrast-2-line'); 
        } else {
            heroSection.style.backgroundImage = 'url(./img/background4.png)';
            // themeIcon.classList.remove('ri-sun-line'); 
            // themeIcon.classList.add('ri-contrast-2-line'); 
            themeIcon.classList.remove('ri-contrast-2-line'); 
            themeIcon.classList.add('ri-sun-line'); 
        }
    });
});