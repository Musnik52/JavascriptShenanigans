//Quote API: https://dummyjson.com/quotes/

const api_url = "https://dummyjson.com/quotes/random";
const quote = document.querySelector('#quote')
const author = document.querySelector('#author')
const btnQuote = document.querySelector('#btn-quote')
const btnTweet = document.querySelector('#btn-tweet')



const getQuote = async () => {
  const data = await fetch(api_url).then((res) => res.json())
  quote.innerHTML = data.quote
  author.innerHTML = data.author
};
getQuote()

const tweet = () =>{
  window.open(`https://twitter.com/intent/tweet?text="${quote.innerHTML}", by ${author.innerHTML}.`, 'tweet window', 'width=600, height=300')
}

btnQuote.addEventListener('click', getQuote)
btnTweet.addEventListener('click', tweet)
