const filmInput = document.getElementById('film-input')
const addBtn = document.getElementById('add-btn')
const filmList = document.getElementById('film-list')

addBtn.addEventListener('click', function() {
    filmList.innerHTML += `
        <div class="film-item">${filmInput.value}</div>
        `
    filmInput.value = ''
}) 
