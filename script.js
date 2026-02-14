
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});

// Add hidden class initially
sections.forEach(section => {
    section.classList.add("hidden");
});
