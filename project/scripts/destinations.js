const filters = document.querySelector('#filters');
const grid = document.querySelector('#destination-grid');
const count = document.querySelector('#count');

function isValidCategory(category) {
    return category === 'all' || categories.some(item => item.id === category);
}

function createFilters() {
    const options = [{ id: 'all', name: `All` }, ...categories];

    filters.innerHTML = options
        .map(option => `<button type="button" data-category="${option.id}">${option.name}</button>`)
        .join(``);
}

function showDestinations(category) {
    let list = destinations;

    if (category !== 'all') {
        list = destinations.filter(place => place.category === category);
    }

    grid.innerHTML = list.map(createCard).join(``);
    count.textContent = `Showing ${list.length} destinations`;

    filters.querySelectorAll('button').forEach(button => {
        const isActive = button.dataset.category === category;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', `${isActive}`);
    });

    localStorage.setItem('lastCategory', category);
}

filters.addEventListener('click', (event) => {
    if (event.target.matches('button')) {
        showDestinations(event.target.dataset.category);
    }
});

// Start with the category from the link, then the last one used, then all
const linkCategory = new URLSearchParams(window.location.search).get('category');
const savedCategory = localStorage.getItem('lastCategory');
let startCategory = 'all';

if (isValidCategory(linkCategory)) {
    startCategory = linkCategory;
} else if (isValidCategory(savedCategory)) {
    startCategory = savedCategory;
}

createFilters();
showDestinations(startCategory);
