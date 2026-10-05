const categorySelect = document.querySelector('#category');
const nameInput = document.querySelector('#name');
const findForm = document.querySelector('#find-form');

function addCategoryOptions() {
    categories.forEach(category => {
        categorySelect.innerHTML += `<option value="${category.id}">${category.name}</option>`;
    });
}

function fillSavedName() {
    const savedName = localStorage.getItem('visitorName');

    if (savedName) {
        nameInput.value = savedName;
    }
}

findForm.addEventListener('submit', () => {
    localStorage.setItem('visitorName', nameInput.value.trim());
});

addCategoryOptions();
fillSavedName();
