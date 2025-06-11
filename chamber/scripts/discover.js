document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".discover-grid");

    fetch("data/discover.json")
        .then((response) => response.json())
        .then((items) => {
            items.forEach((item, index) => {
                const card = document.createElement("article");
                card.classList.add("card", `card${index + 1}`);

                card.innerHTML = `
            <figure>
              <img src="${item.image}" alt="${item.name}">
            </figure>
            <h2>${item.name}</h2>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button>Learn More</button>
          `;

                grid.appendChild(card);
            });
        });

    // LAST VISIT MESSAGE
    const visitMessage = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const msInDay = 1000 * 60 * 60 * 24;
        const daysAgo = Math.floor((now - lastVisit) / msInDay);

        if (daysAgo < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent =
                daysAgo === 1
                    ? "You last visited 1 day ago."
                    : `You last visited ${daysAgo} days ago.`;
        }
    }

    localStorage.setItem("lastVisit", now);

    // Footer dates
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});

