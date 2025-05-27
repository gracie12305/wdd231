async function loadSpotlights() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();

        // Filter gold or silver members
        const filtered = members.filter(m => m.membership === 'gold' || m.membership === 'silver');

        // Shuffle array
        const shuffled = filtered.sort(() => 0.5 - Math.random());

        // Pick first 3 or less
        const selected = shuffled.slice(0, 3);

        const container = document.getElementById('spotlight-cards');
        container.innerHTML = '';

        selected.forEach(member => {
            const card = document.createElement('div');
            card.className = 'spotlight-card';



            card.innerHTML = `
          <h3>${member.name}</h3>
          <img src="images/${member.image}" alt="${member.name} logo" width="100" />
          <p>${member.phone}</p>
          <p>${member.address}</p>
          <p><a href="${member.website}" target="_blank">Visit Website</a></p>
          <p>Membership: ${member.membership}</p>
        `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading members:', error);
    }
}

loadSpotlights();


// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;