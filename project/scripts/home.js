const featured = document.querySelector('#featured');
const welcome = document.querySelector('#welcome');

function showFeatured() {
    const randomIndex = Math.floor(Math.random() * destinations.length);
    const place = destinations[randomIndex];

    featured.innerHTML = `
        <img src="${place.image}" alt="${place.alt}" loading="lazy" width="600" height="400">
        <div class="featured-text">
            <h3>${place.name}</h3>
            <p class="location">${place.location}</p>
            <p>${place.description}</p>
            <a class="button" href="find.html">Find a Destination</a>
        </div>
    `;
}

function showWelcome() {
    const lastMatch = localStorage.getItem('lastMatch');

    if (lastMatch) {
        welcome.textContent = `Welcome back! Last time we recommended ${lastMatch} for you.`;
    }
}

showFeatured();
showWelcome();
