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
