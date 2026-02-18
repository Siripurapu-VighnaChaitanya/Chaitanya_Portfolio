let skills_arr = ["FrontEnd Developer!", "Python Developer!", "Software Developer!"]
let typing = document.querySelector(".typing");
let index = 0;
setInterval(() => {
    typing.innerHTML = `<b>${skills_arr[index]}</b>`
    index = (index + 1) % skills_arr.length
}, 3000);

// Project Card Slideshow
const projectCards = document.querySelectorAll('.project_card_img');

projectCards.forEach(card => {
    const gallery = card.querySelector('.scrollable-gallery');
    if (!gallery) return;

    let intervalId;
    let scrollStep = 0;
    const images = gallery.querySelectorAll('img');
    const imageCount = images.length;

    // No need to slide if only 1 or 0 images
    if (imageCount <= 1) return;

    card.addEventListener('mouseenter', () => {
        // Start slideshow
        intervalId = setInterval(() => {
            const cardWidth = card.clientWidth; // Get current width
            scrollStep++;

            // If we've scrolled past all images, reset
            if (scrollStep >= imageCount) {
                scrollStep = 0;
                gallery.scrollTo({ left: 0, behavior: 'auto' }); // Instant jump back
            } else {
                gallery.scrollTo({ left: scrollStep * cardWidth, behavior: 'smooth' });
            }

        }, 2000); // Change slide every 2 seconds
    });

    card.addEventListener('mouseleave', () => {
        // Stop slideshow and reset to first image
        clearInterval(intervalId);
        scrollStep = 0;
        gallery.scrollTo({ left: 0, behavior: 'smooth' });
    });
});

// Form Submission Popup Logic
const form = document.querySelector('form');
const popup = document.getElementById('popup');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission for demo

        // Here you would typically send data to a server
        // For now, just show the popup
        openPopup();

        // Optional: Reset form
        form.reset();
    });
}

function openPopup() {
    popup.classList.add('open-popup');
}

function closePopup() {
    popup.classList.remove('open-popup');
}