document.addEventListener("DOMContentLoaded", function () {
    const now = new Date().toISOString();
    document.getElementById("timestamp"), value = now;
});

const params = new URLSearchParams(window.location.search);
const summary = document.getElemantById("summary");

const fields = ['firstName', 'lastName', 'email', 'phone', 'organization', 'timestamp'];

fields.forEach(field => {
    const value = params.get(field);
    if (value) {
        const p = document.createElement("p");
        p.textContent = `${field.replace(/([A-Z])/g, '$1')}: ${value}`;
        summary.appendChild(p);
    }
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;