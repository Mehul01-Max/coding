// const fakeRequest = (color) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color
//             resolve()
//         }, 1000)
//     })
// }

// async function rainbow() {
//     await fakeRequest('red')
//     await fakeRequest('yellow')
//     await fakeRequest('orange')
//     await fakeRequest('green')
//     await fakeRequest('blue')
//     await fakeRequest('indigo')
//     await fakeRequest('violet')
//     console.log('alldone')
// }



// const login = async (username, password) => {
//     if (!username || !password) throw 'please fill all credentials'
//     else if (password === 'Mehul123') return 'welcome'
//     throw 'invalid password'
// }

// login('know')
//     .then((msg) => {
//         console.log(msg)
//     })
//     .catch((err) => {
//         console.log(err)
//     })


const fakeRequestPromise = async (url) => {
    const delay = Math.floor(Math.random() * (4500)) + 500;
    setTimeout(() => {
        try {
            if (delay > 4000) {
                throw 'Connection Timeoout :('
            } else {
                console.log(`Here is your fake data from ${url}`)
            } 
            return `Here is your fake data from ${url}`
            
        } catch (e) {
            console.log('error:', e)
        }

    }, delay)


}

const fakeRequest = async () => {
    try {
        let data = await fakeRequestPromise('/page1')
        console.log(data)

    } catch (e) {
        console.log('caught an error : ', e)
    }
}