const reviewCount = document.querySelector('#reviewCount')

let count = Number(localStorage.getItem('reviewCount')) || 0
count++

localStorage.setItem('reviewCount', count)
reviewCount.textContent = count
