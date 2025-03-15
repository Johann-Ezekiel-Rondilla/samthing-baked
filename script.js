let index = 0;

function moveSlide(step) {
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery img');
    const total = images.length;

    index = (index + step + total) % total; // Ensures proper looping

    gallery.style.transform = `translateX(-${index * 100}%)`;
}
