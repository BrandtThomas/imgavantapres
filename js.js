const slider = document.querySelector('.slider')
const container = document.querySelector('.container')

slider.addEventListener('input', (event) => {
    container.style.setProperty('--position', `${event.target.value}%`)
})

