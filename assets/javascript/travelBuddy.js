//'https://newsapi.org/v2/everything?q=bitcoin&apiKey=b3458132a49e43e3a296ebfa66cb04d1'
//'http://api.exchangeratesapi.io/latest'
//'api.openweathermap.org/data/2.5/find?q=London&APPID=e79db387e638d0079c0ddbe4d04795b7'

// fetch('https://newsapi.org/v2/top-headlines?country=se&apiKey=b3458132a49e43e3a296ebfa66cb04d1')
// fetch('https://api.exchangeratesapi.io/latest')

document.querySelector('#submit').addEventListener('click',
e => {
   e.preventDefault()
  fetch(
    'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b3458132a49e43e3a296ebfa66cb04d1')
    .then(r => r.json())
    .then(r => {
      document.querySelector('#cityNews').textContent = r.news
    })
})