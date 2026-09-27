const hamburgerBtn = document.querySelector('#hamburger-btn');
const nav = document.querySelector('#primary-nav');
const templeChart = document.querySelector('#temple-chart')

//Filters
const allTemples = document.querySelector('#home')
const oldFilter = document.querySelector('#old')
const newFilter = document.querySelector('#new')
const largeFilter = document.querySelector('#large')
const smallFilter = document.querySelector('#small')

hamburgerBtn.addEventListener('click', function () {
    nav.classList.toggle('open');
    const isOpen = nav.classList.contains('open');
    hamburgerBtn.textContent = isOpen ? '✕' : '☰';
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/400%2C/0/default"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/df6b96801c9f11ec99eeeeeeac1ea2207e7c517b/full/400%2C/0/default"
  },
  {
    templeName: "Star Valley Wyoming",
    location: "Afton, Wyoming, United States",
    dedicated: "2016, October, 30",
    area: 18609,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/b6e3d29eb9947ea11a6c777b53d556ed1b282235/full/400%2C/0/default"
  }
];

//Function that displays temples

function displayTemples(templeList) {
    templeChart.innerHTML = ""

    templeList.forEach(temple => { templeChart.innerHTML += `
        <figure class="temple-card">
        <h2>${temple.templeName}</h2>
        <p><span class="label">Location:</span> ${temple.location}</p>
        <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
        <p><span class="label">Size:</span> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
        </figure>
        `
    })
}

//Filter Functions

allTemples.addEventListener('click', (e) => {
    e.preventDefault()
    displayTemples(temples)
})

oldFilter.addEventListener('click', (e) => {
    e.preventDefault()
    const oldTemples = temples.filter(temple => Number(temple.dedicated.split(",")[0]) < 1900)
    displayTemples(oldTemples)
})

newFilter.addEventListener('click', (e) => {
    e.preventDefault()
    const newTemples = temples.filter(temple => Number(temple.dedicated.split(",")[0]) > 2000) 
    displayTemples(newTemples)
})

largeFilter.addEventListener('click', (e) => {
    e.preventDefault()
    const largeTemples = temples.filter(temple => temple.area > 90000)
    displayTemples(largeTemples)
})

smallFilter.addEventListener('click', (e) => {
    e.preventDefault()
    const smallTemples = temples.filter(temple => temple.area < 10000)
    displayTemples(smallTemples)
})

displayTemples(temples)