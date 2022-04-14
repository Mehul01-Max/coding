const button = document.querySelector('button')
const h1 = document.querySelector('h1')
button.addEventListener('click' , function() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const newColor = `rgb(${r},${g},${b})`;
    const white = 'rgb(255,255,255)';
    if (r+b+g <= 50) {
        h1.style.color = white;
    } else {
        h1.style.color = 'rgb(0,0,0)'
    }
    h1.innerText = newColor
    document.body.style.backgroundColor = newColor;
    
})