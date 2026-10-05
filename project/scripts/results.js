const summary = document.querySelector('#summary');
const resultsGrid = document.querySelector('#results');
const tip = document.querySelector('#tip');

const params = new URLSearchParams(window.location.search);
const visitorName = params.get('name');
const chosenCategory = params.get('category');
const chosenActivities = params.getAll('activities');
const tripLength = params.get('trip');

function getMatches(category, activities) {
    return destinations
        .filter(place => place.category === category)
        .map(place => {
            const score = place.activities.filter(activity => activities.includes(activity)).length;
            return { ...place, score };
        })
        .sort((a, b) => b.score - a.score);
}

function getTripTip(trip) {
    if (trip === 'day') {
        return `Tip: For a day trip, leave early in the morning and choose a place close to San Salvador.`;
    } else if (trip === 'weekend') {
        return `Tip: A weekend is enough time to visit two places in the same area.`;
    }
    return `Tip: With a week or more, you can combine a beach, a volcano, and a cultural town.`;
}

function countSearch() {
    const searches = Number(localStorage.getItem('searchCount')) || 0;
    localStorage.setItem('searchCount', `${searches + 1}`);
    return searches + 1;
}

function showResults() {
    const category = categories.find(item => item.id === chosenCategory);

    if (!category) {
        summary.innerHTML = `We could not find your answers. Please fill out the <a href="find.html">Find a Destination</a> form.`;
        return;
    }

    const matches = getMatches(chosenCategory, chosenActivities);
    console.log(matches)
    const searches = countSearch();

    const timesText = searches === 1 ? `1 time` : `${searches} times`;
    summary.textContent = `${visitorName || `Traveler`}, here are the ${category.name.toLowerCase()} we recommend for you. The first one is your best match. You have used this form ${timesText}.`;
    resultsGrid.innerHTML = matches.map(createCard).join(``);
    tip.textContent = getTripTip(tripLength);

    localStorage.setItem('lastMatch', `${matches[0].name}`);
}

showResults();
