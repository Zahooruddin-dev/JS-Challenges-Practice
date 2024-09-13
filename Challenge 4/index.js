const filmInput = document.getElementById('film-input')
const addBtn = document.getElementById('add-btn')
const filmList = document.getElementById('film-list')

addBtn.addEventListener('click', function() {
  const template = document.createElement('div')
  template.classList.add('film-item')
  template.innerText=filmInput.value
  filmList.appendChild(template)
  filmInput.value = ''
})  