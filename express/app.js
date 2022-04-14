const express = require('express');
const app = express()

// app.use((req, res) => {
//     console.log('A new request recieved');
 
// })

// app.get('/', (req , res) => {
//     res.send('Welcome to my home page');
// })

// app.get('/hello', (req , res) => {
//     res.send('Welcome!');
// })

// app.get('/bye', (req , res) => {
//     res.send('OK! bye');
// })

// app.get('*', (req , res) => {
//     res.send(`I don't know this path. sorry`)
// })

// app.post('*', (req, res) => {
//     res.send('this is a post request')

// })

app.get('/r/:subreddit', (req, res) => {
    
    const { subreddit } = req.params;
    res.send(`<h1>You are viewing ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:id', (req, res) => {
    const {subreddit , id} = req.params;
    res.send(`<h1>You are viewing ${subreddit} subreddit with id ${id}<h1>`)
})
app.get('/search', (req , res) => {
    const { q } = req.query
    if (!q) {
        res.send('<h1>Nothing found if nothing searched</h1>')
    } else {
        res.send(`<h1>Showing results for: ${q}</h1>`)
    }
})
app.listen(8080, () => {
    console.log('listening');
})