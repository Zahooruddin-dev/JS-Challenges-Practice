const ageInput = document.getElementById('age')
const resultDisplay = document.getElementById('result-display')
const checkButton = document.getElementById('btn-check')
const minDrinkAge = 21
const minDriveAge = 16
checkButton.addEventListener('click', function () {
    let message = ''
    const age = ageInput.value
        if (age < minDrinkAge && age < minDriveAge) {
            message = `I'm sorry, you cannot drink or drive ⛔`
        } else if (age >= minDrinkAge && age < minDriveAge) {
            message = "You can drink 🍺 but you cannot drive"
        } else if (age >= minDriveAge && age < minDrinkAge) {
            message = "You can drive 🚗 but you cannot drink"
        } else {
            message = "You can drink 🍺 and drive 🚗 (not at the same time though!)"
        } 
        renderMessage(message)
})
function renderMessage(message) {
    resultDisplay.innerText = message
    
}