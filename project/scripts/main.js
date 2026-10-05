// Shared code for all pages: menu, footer, and destination cards

const menuButton = document.querySelector('#menu');
const nav = document.querySelector('#nav');

function toggleMenu() {
    nav.classList.toggle('open');
    const isOpen = nav.classList.contains('open');
    menuButton.textContent = isOpen ? `✕` : `☰`;
    menuButton.setAttribute('aria-expanded', `${isOpen}`);
}

function setFooterDates() {
    document.querySelector('#year').textContent = `${new Date().getFullYear()}`;
    document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;
}

function createCard(destination) {
    const tags = destination.activities
        .map(activity => `<span>${activityNames[activity]}</span>`)
        .join(``);

    return `
        <article class="card">
            <img src="${destination.image}" alt="${destination.alt}" loading="lazy" width="600" height="400">
            <div class="card-body">
                <h2>${destination.name}</h2>
                <p class="location">${destination.location}</p>
                <p>${destination.description}</p>
                <p class="tags">${tags}</p>
            </div>
        </article>
    `;
}

menuButton.addEventListener('click', toggleMenu);
setFooterDates();
