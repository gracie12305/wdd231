document.addEventListener("DOMContentLoaded", () => {
    // Purpose fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        setTimeout(() => {
            el.classList.add('animate-visible');
        }, 300);
    });

    //Basketball slide-in
    const slideElements = document.querySelectorAll('.slide-in');
    slideElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('animate-visible');
        }, index * 700);
    });

    //FAQ link alerts
    document.querySelectorAll('.q-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            alert(`More information coming soon for: "${this.textContent}"`);
        });
    });

    // year
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

    //To show/hide form on click
    const showFormBtn = document.getElementById("showFormBtn");
    const joinFormSection = document.getElementById("joinFormSection");

    if (showFormBtn && joinFormSection) {
        showFormBtn.addEventListener("click", (event) => {
            event.preventDefault();

            const isHidden = joinFormSection.classList.contains("hidden");

            if (isHidden) {
                joinFormSection.classList.remove("hidden");

                // Optional animation reset
                joinFormSection.classList.remove("fade-in");
                void joinFormSection.offsetWidth;
                joinFormSection.classList.add("fade-in");

                showFormBtn.textContent = "Hide Form";
            } else {
                joinFormSection.classList.add("hidden");
                showFormBtn.textContent = "Join Us Today";
            }
        });
    } else {
        console.warn("Form or button not found. Check your HTML IDs.");
    }
});
