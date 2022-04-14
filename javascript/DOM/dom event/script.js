// const buttons = document.querySelectorAll('button')
// const h1s = document.querySelectorAll('h1')
// const randomColor = () => {
// const r = Math.floor(Math.random() * 256);
// const g = Math.floor(Math.random() * 256);
// const b = Math.floor(Math.random() * 256);
// return `rgb(${r},${g},${b})`;
// }
// function colorize(){
//     this.style.backgroundColor = randomColor();
// }

// for (button of buttons) {
//     button.addEventListener('click' , colorize)
// }
// for (h1 of h1s) {
//     h1.addEventListener('click' , colorize)
// }

const input = document.querySelector('input')

input.addEventListener('keydown', function(e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log('UP');
            break;
        case 'ArrowDown':
            console.log('DOWN');
            break;
        case 'ArrowRight':
            console.log('RIGHT');
            break;
        case 'ArrowLeft':
            console.log('LEFT');
            break;
        default:
            console.log('Ignored');
            break;
    }
})
