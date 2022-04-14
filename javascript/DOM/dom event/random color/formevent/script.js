const tweetForm = document.querySelector('#tweetForm')
const username = document.querySelector('#username')
const tweet = document.querySelector('#tweet')
const tweets = document.querySelector('#tweets')

const newTweet = (username , tweet) => {
    const usernameInput = tweetForm.username.value
    const tweetInput = tweetForm.tweet.value
    const newLi = document.createElement('li')
    const bTag = document.createElement('b')
    bTag.append(usernameInput)
    newLi.append(bTag)
    newLi.append(` - ${tweetInput}`)
    
    tweets.append(newLi)
    console.log(newLi)
}

tweetForm.addEventListener('submit' , function(e) {
    e.preventDefault()
    newTweet(username , tweet)
})



tweets.addEventListener('click' , function(e) {
    e.target.nodeName === 'LI' &&  e.target.remove()
})