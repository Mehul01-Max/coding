// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("RESPONSE, WAITING TO PARSE...", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("DATA PARSED...")
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("OH NO! ERROR!", e)
//     })



// const fetchBitcoinPrice = async () => {

//     try {

//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(res.data.ticker.price)
//     } catch (e) {
//         console.log('error:', e)
//     }

// }
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const getDadJoke = async () => {
    const config = {headers : {Accept : 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/' , config)
    return res.data.joke
}


const addJoke = async () => {
    const jokeText = await getDadJoke()
    const newLI = document.createElement('LI')
    newLI.append(jokeText)
    ul.append(newLI)
}

button.addEventListener('click' , addJoke)