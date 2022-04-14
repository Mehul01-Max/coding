
const container = document.querySelector('#container')


const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (i = 1; i < 152 ; i++) {
    const div = document.createElement('div')
    const span = document.createElement('span')
    span.innerText = `#${i}`
    const newImg = document.createElement('img')
    newImg.src = `${baseURL}${i}.png`
    div.appendChild(newImg)
    div.appendChild(span)
    container.appendChild(div)
}