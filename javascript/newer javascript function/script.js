
// function infinity(...know){
//     total = know
//     return total.reduce((sum , num) => sum + num)
// }

// const num1 = {Mehul : 'know', harshil :'Harshile'}
// const num2 = {Hardik : 'how' , harshil :'know'}

// const num = {...num1 , ...num2}


// function race(gold , silver , ...everyone) {
//     console.log(`gold medal goes to ${gold}`)
//     console.log(`silver medal goes to ${silver}`)
//     console.log(`thanks for participating  ${everyone}`)
// }




// const race = ['Mehul' , 'Micheal' , 'Colt' , 'Harshil']

// const [gold , silver , ...everyone] = race

// const randomUser = {
//     Name: 'Mehul Agarwal',
//     email: 'agarwalmehul423@gmail.com',
//     Born: 2005

    
// }

// const anotherRandomUser = {
//     Name : 'IDK',
//     email: 'IDK.com',
//     born: 'Unknown',
//     died: 'Soon'
// }

// const {Name , email , Born = birthYear , died = deathYear =  'N/A'} = randomUser

// const {Name , email , born: birthYear , died: deathYear =  'N/A'} = anotherRandomUser

let arry = [
    {
        movie: 'chernobyl',
        rating: 9.4
    },
    {
        movie: 'Breaking Bad',
        rating: 9.5
    },
    {
        movie: 'Game of Thrones',
        rating: 9.2
    },
    {
        movie: 'dune',
        rating: 8.0
    }
    
]

const arry1 = arry.map(({movie , rating}) => {
    return `${movie} has a rating of ${rating}`
})