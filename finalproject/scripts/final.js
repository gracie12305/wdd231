document.addEventListener('DOMContentLoaded', () => {
    // Purpose fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        // Make it fade in shortly after page load
        setTimeout(() => {
            el.classList.add('animate-visible');
        }, 300);
    });

    // Basketball slide-in
    const slideElements = document.querySelectorAll('.slide-in');
    slideElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('animate-visible');
        }, index * 700); // Staggered like a status slideshow
    });

    // FAQ click alerts
    document.querySelectorAll('.q-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            alert(`More information coming soon for: "${this.textContent}"`);
        });
    });

    // Footer year & last modified
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});

