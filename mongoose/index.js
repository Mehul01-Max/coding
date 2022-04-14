const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true, // <-- no longer necessary
    useUnifiedTopology: true // <-- no longer necessary
})
.then(() => {
    console.log('Connection open')
})
    .catch(err => {
        console.log('ERROR')
        console.log(err)
})

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    Score: Number,
    rating: String,


});

const Movie = mongoose.model('Movie', movieSchema);
// const theAdamProject = new Movie({title: 'The Adam Project' , year:2022 , Score:6.7 , rating:'PG-13'})


// Movie.insertMany([
//     { title: 'The Adam Project', year: 2022, Score: 6.7, rating: 'PG-13' },
//     { title: 'Spider-Man: No Way Home', year: 2021, Score: 8.5, rating: 'PG-13' },
//     { title: 'The Batman', year: 2022, Score: 8.3, rating: 'R' },
//     { title: 'Uncharted', year: 2022, Score: 6.7, rating: 'PG-13' },
//     { title: '83', year: 2021, Score: 7.7, rating: 'U/A' }

// ])
//     .then(data => {
//         console.log('It Worked');
//         console.log(data)
//     })
