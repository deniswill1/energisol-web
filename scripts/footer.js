const darkMode = document.getElementById('dark-mode')
const lightMode = document.getElementById('light-mode')

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
    darkMode.classList.toggle('hide')
    lightMode.classList.remove('hide')
}) 

lightMode.addEventListener('click', () => {
    document.body.classList.remove('dark-mode')
    lightMode.classList.toggle('hide')
    darkMode.classList.remove('hide')
}) 
