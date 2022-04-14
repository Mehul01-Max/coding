p1 = {
    Score: 0,
    Display: document.querySelector('#p1Display'),
    Button: document.querySelector('#p1Button'),
    setsWon: document.querySelector('#SetsWonByP1')
}

p2 = {
    Score: 0,
    Display: document.querySelector('#p2Display'),
    Button: document.querySelector('#p2Button'),
    setsWon: document.querySelector('#SetsWonByP2')
}
const setScore = document.querySelector('#setScore')
const setNo = document.querySelector('#setNo')
const resetButton = document.querySelector('#reset')
const setSelect = document.querySelector('#setSelect')
const winningSelect = document.querySelector('#winningSelect')
const tied = document.querySelector('.tied')
let winningScore = 3
let p1Score = 0
let p2Score = 0
let isGameOver = false

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.Score += 1
        player.Display.textContent = player.Score
        if (player.Score === winningScore) {
            if (winningScore - 1 === opponent.Score || player.Score === opponent.Score) {
                isGameOver = false
            } else {
                if (sets === 1) {
                    isGameOver = true
                    player.Display.classList.add('has-text-success')
                    opponent.Display.classList.add('has-text-danger')
                    player.Button.disabled = true
                    opponent.Button.disabled = true
                    player.setsWon.textContent = '1'
                    player.setsWon.classList.add('has-text-success')
                    opponent.setsWon.classList.add('has-text-danger')

                } else if (sets === 2) {
                    for (set of [1, 2]) {
                        if (player.Score === winningScore) {
                            for (let p of [p1, p2]) {
                                isGameOver = false
                                p.Score = 0
                                p.Display.textContent = 0
                                p.Display.classList.remove('has-text-success', 'has-text-danger')
                                p.Button.disabled = false
                                p.setsWon.classList.remove('has-text-success', 'has-text-danger')

                            }
                            
                            player.setsWon.textContent = parseInt(player.setsWon.textContent) + 1
                            if (parseInt(player.setsWon.textContent) + parseInt(opponent.setsWon.textContent) === sets) {

                                if (parseInt(player.setsWon.textContent) === sets) {
                                    isGameOver = true
                                    player.Display.classList.add('has-text-success')
                                    opponent.Display.classList.add('has-text-danger')
                                    player.Button.disabled = true
                                    opponent.Button.disabled = true
                                    player.setsWon.classList.add('has-text-success')
                                    opponent.setsWon.classList.add('has-text-danger')
                                } else if (parseInt(player.setsWon.textContent) + parseInt(opponent.setsWon.textContent) === sets) {
                                    isGameOver = true
                                    player.Button.disabled = true
                                    opponent.Button.disabled = true
                                    tied.classList.remove('tied')

                                }
                            }
                        }
                    }
                } else if (sets === 3) {
                    for (set of [1, 2, 3]) {
                        if (player.Score === winningScore) {
                            for (let p of [p1, p2]) {
                                isGameOver = false
                                p.Score = 0
                                p.Display.textContent = 0
                                p.Display.classList.remove('has-text-success', 'has-text-danger')
                                p.Button.disabled = false
                                p.setsWon.classList.remove('has-text-success', 'has-text-danger')

                            }
                            player.setsWon.textContent = parseInt(player.setsWon.textContent) + 1
                            if (parseInt(player.setsWon.textContent) === 2) {


                                isGameOver = true
                                player.Display.classList.add('has-text-success')
                                opponent.Display.classList.add('has-text-danger')
                                player.Button.disabled = true
                                opponent.Button.disabled = true
                                player.setsWon.classList.add('has-text-success')
                                opponent.setsWon.classList.add('has-text-danger')


                            }
                        }
                    }
                }




            }
        } else if (player.Score === opponent.Score) {
            isGameOver = false
        } else if (player.Score >= winningScore && player.Score - 1 !== opponent.Score) {
            if (sets === 1) {
                isGameOver = true
                player.Display.classList.add('has-text-success')
                opponent.Display.classList.add('has-text-danger')
                player.Button.disabled = true
                opponent.Button.disabled = true
                player.setsWon.classList.add('has-text-success')
                opponent.setsWon.classList.add('has-text-danger')
            }
            else if (sets === 2) {
                for (set of [1, 2]) {
                    if (player.Score >= winningScore && player.Score - 1 !== opponent.Score) {
                        for (let p of [p1, p2]) {
                            isGameOver = false
                            p.Score = 0
                            p.Display.textContent = 0
                            p.Display.classList.remove('has-text-success', 'has-text-danger')
                            p.Button.disabled = false
                            p.setsWon.classList.remove('has-text-success', 'has-text-danger')

                        }
                        player.setsWon.textContent = parseInt(player.setsWon.textContent) + 1
                        
                        if (parseInt(player.setsWon.textContent) + parseInt(opponent.setsWon.textContent) === sets) {

                            if (parseInt(player.setsWon.textContent) === sets) {
                                isGameOver = true
                                player.Display.classList.add('has-text-success')
                                opponent.Display.classList.add('has-text-danger')
                                player.Button.disabled = true
                                opponent.Button.disabled = true
                                player.setsWon.classList.add('has-text-success')
                                opponent.setsWon.classList.add('has-text-danger')
                            } else if (parseInt(player.setsWon.textContent) + parseInt(opponent.setsWon.textContent) === sets) {
                                isGameOver = true
                                player.Button.disabled = true
                                opponent.Button.disabled = true
                                tied.classList.remove('tied')

                            }
                        }
                    }
                }
            } else if (sets === 3) {
                for (set of [1, 2, 3]) {
                    if (player.Score >= winningScore && player.Score - 1 !== opponent.Score) {
                        for (let p of [p1, p2]) {
                            isGameOver = false
                            p.Score = 0
                            p.Display.textContent = 0
                            p.Display.classList.remove('has-text-success', 'has-text-danger')
                            p.Button.disabled = false
                            p.setsWon.classList.remove('has-text-success', 'has-text-danger')

                        }
                        player.setsWon.textContent = parseInt(player.setsWon.textContent) + 1
                        if (parseInt(player.setsWon.textContent) === 2) {


                            isGameOver = true
                            player.Display.classList.add('has-text-success')
                            opponent.Display.classList.add('has-text-danger')
                            player.Button.disabled = true
                            opponent.Button.disabled = true
                            player.setsWon.classList.add('has-text-success')
                            opponent.setsWon.classList.add('has-text-danger')



                        }
                    }
                }
            }

        }
    }
}

p1Button.addEventListener('click', function () {
    updateScore(p1, p2)
})
p2Button.addEventListener('click', function () {
    updateScore(p2, p1)
})

winningSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    reset()
})
resetButton.addEventListener('click', reset)



function reset() {
    for (let p of [p1, p2]) {
        isGameOver = false
        p.Score = 0
        p.Display.textContent = 0
        p.Display.classList.remove('has-text-success', 'has-text-danger')
        p.Button.disabled = false
        p.setsWon.classList.remove('has-text-success', 'has-text-danger')
        p.setsWon.textContent = 0

    }
    tied.classList.add('tied')



}
let sets = 1
setSelect.addEventListener('change', function () {
    sets = parseInt(this.value)
    setNo.textContent = sets
    reset()
})

