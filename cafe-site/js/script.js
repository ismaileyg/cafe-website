
window.addEventListener("scroll", function() {
    document.querySelector("header").style.background =
        window.scrollY > 50 ? "#2e1b18" : "#3e2723";
});


const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});


const toggle = document.getElementById("darkModeToggle");

if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}