// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Populate the gallery dynamically
const gallery = document.querySelector('.gallery');
const imageCount = 12; // Adjust the number of images
for (let i = 1; i <= imageCount; i++) {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = `images/image${i}.jpg`;
    img.alt = `Portfolio Image ${i}`;

    galleryItem.appendChild(img);
    gallery.appendChild(galleryItem);
}

// Add fade-in effect for sections on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});
