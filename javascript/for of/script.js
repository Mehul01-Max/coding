// const seatingChart = [
//     ['Kristen', 'Erik' , 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura' , 'Jack' , 'Erika']
// ]

// for (let row of seatingChart) {
    
//     for (let student of row ) {
//         console.log(student)
//     }
// }


const testScores = {
    keenan : 80,
    danon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre:81,
    vonnie: 60
}

let totalScores = 0
let scores = Object.values(testScores)
for (let score of scores ){
    totalScores += score

    
}
console.log(totalScores/scores.length)


