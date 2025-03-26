// Welcome message based on time of day 
const welcomeMessage = document.getElementById('welcome-message');
const hours = new Date().getHours();
if (hours < 12) {
    welcomeMessage.textContent = 'Good Morning! Welcome to Adedeji\'s World!';
} else if (hours < 18) {
    welcomeMessage.textContent = 'Good Afternoon! Welcome to Adedeji\'s World!';
} else {
    welcomeMessage.textContent = 'Good Evening! Welcome to Adedeji\'s World!';
}

// Populate the gallery dynamically
const gallery = document.querySelector('.gallery');
const imageCount = 53; // Adjust the number of images in the gallery
for (let i = 1; i <= imageCount; i++) {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = `images/image${i}.jpg`; // Ensure the images are named image1.jpg, image2.jpg, etc.
    img.alt = `Photo ${i}`;

    galleryItem.appendChild(img);
    gallery.appendChild(galleryItem);
}

// Lightbox functionality for gallery images
document.body.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG' && e.target.closest('.gallery-item')) {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');

        // Add the clicked image to the lightbox
        const img = document.createElement('img');
        img.src = e.target.src;
        lightbox.appendChild(img);

        // Center the lightbox in the viewport
        lightbox.style.position = 'fixed';
        lightbox.style.top = '50%';
        lightbox.style.left = '50%';
        lightbox.style.transform = 'translate(-50%, -50%)';

        document.body.appendChild(lightbox);

        // Close the lightbox when clicked
        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    }
});

// Add visitor analytics (simple counter)
let visitorCount = localStorage.getItem('visitorCount') || 0;
visitorCount++;
localStorage.setItem('visitorCount', visitorCount);
console.log(`You are visitor number: ${visitorCount}`);

// Dynamically add new testimonials
const testimonialsContainer = document.querySelector('.testimonials-container');

// Array of new testimonials
const newTestimonials = [
    {
        text: "Adedeji's work speaks for itself. Every shot captures the essence of the moment.",
        author: "Shaki Abosede"
    },
    {
        text: "I highly recommend Adedeji Shot it for his professionalism and artistic talent.",
        author: "Alatishe Fathia"

    }
];

// Append new testimonials to the container
if (testimonialsContainer) {
    newTestimonials.forEach(testimonial => {
        const blockquote = document.createElement('blockquote');
        const p = document.createElement('p');
        const cite = document.createElement('cite');

        p.textContent = `"${testimonial.text}"`;
        cite.textContent = `- ${testimonial.author}`;

        blockquote.appendChild(p);
        blockquote.appendChild(cite);
        testimonialsContainer.appendChild(blockquote);
    });
}
// Add a downloadable portfolio link
const aboutSection = document.getElementById('about');
const downloadButton = document.createElement('a');
downloadButton.href = 'files/Adedeji_Portfolio.pdf'; // Ensure the file is in the correct directory
downloadButton.textContent = 'Download My Portfolio';
downloadButton.classList.add('button');
aboutSection.appendChild(downloadButton);

// SEO enhancements - dynamically update page title and meta description
const updateSEO = () => {
    document.title = "Adedeji's Portfolio - Creative Photography and Web Development";
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Explore Adedeji\'s portfolio showcasing creative photography, web development projects, and a passion for storytelling.';
    document.head.appendChild(metaDescription);
};

updateSEO();
