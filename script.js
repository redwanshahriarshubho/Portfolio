// script.js — Simple interactions or future enhancements

console.log("👋 Redwan's Portfolio Loaded — Ready to impress clients!");

// Optional: Add smooth scroll for older browsers or enhance later
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// You can add animations, form handlers, or analytics here later.