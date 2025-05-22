document.addEventListener("DOMContentLoaded", () => {
    const directory = document.getElementById("directory");
    const gridBtn = document.getElementById("gridBtn");
    const listBtn = document.getElementById("listBtn");

    // Toggle view
    gridBtn.addEventListener("click", () => {
        directory.classList.add("grid");
        directory.classList.remove("list");
    });

    listBtn.addEventListener("click", () => {
        directory.classList.add("list");
        directory.classList.remove("grid");
    });

    // Load members
    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            const members = await response.json();
            displayMembers(members);
        } catch (err) {
            console.error("Error loading members:", err);
        }
    }

    function displayMembers(members) {
        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("member-card");

            card.innerHTML = `
          <h3>${member.name}</h3>
          <img src="images/${member.image}" alt="${member.name} logo">
          <p>${member.description}</p>
          <p><strong>Address:</strong> ${member.address}</p>
          <p><strong>Phone:</strong> ${member.phone}</p>
          <p><a href="${member.website}" target="_blank">Visit Website</a></p>
          <p class="level">Membership: ${getMembershipLevel(member.membership)}</p>
        `;

            directory.appendChild(card);
        });
    }

    function getMembershipLevel(level) {
        switch (level) {
            case 3: return "Gold";
            case 2: return "Silver";
            case 1: return "Member";
            default: return "Member";
        }
    }

    fetchMembers();

    // Footer dates
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});
  