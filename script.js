document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".hidden");

    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection(); // Run once on load
});
