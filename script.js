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
const imageCount = 66; // Adjust the number of images in the gallery
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
        document.body.appendChild(lightbox);

        const img = document.createElement('img');
        img.src = e.target.src;
        lightbox.appendChild(img);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    }
});
