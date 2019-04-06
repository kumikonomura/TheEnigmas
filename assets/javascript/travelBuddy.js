//'https://newsapi.org/v2/everything?q=bitcoin&apiKey=b3458132a49e43e3a296ebfa66cb04d1'
//'http://api.exchangeratesapi.io/latest'
//'api.openweathermap.org/data/2.5/find?q=London&APPID=e79db387e638d0079c0ddbe4d04795b7'

// fetch('https://newsapi.org/v2/top-headlines?country=se&apiKey=b3458132a49e43e3a296ebfa66cb04d1')
// fetch('https://api.exchangeratesapi.io/latest')

let countryCode = localStorage.getItem('searchInput')

fetch(
  `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=b3458132a49e43e3a296ebfa66cb04d1`)
  .then(r => r.json())
  .then(r => {
    console.log(r.articles[0])
    console.log(countryCode)

    for (i = 0; i < 5; i++)
      console.log("Making images")
    let hElem = document.createElement("h5")
    hElem.innerHTML = r.articles[i].title
    hElem.id = "title" + i
    let contentElem = document.createElement("p")
    contentElem.innerHTML = `
    <p style="font-size:18px; padding-bottom: 10px;">${r.articles[i].content}</p>
    `
    let imgElem = document.createElement("img")
    imgElem.setAttribute("src", r.articles[i].urlToImage)
    let linkElem = document.createElement('a')
    linkElem.setAttribute('href', r.articles[i].url)
    // this will open the link in a new browser window
    linkElem.setAttribute('target', "_blank")
    linkElem.innerHTML = `
    <a style="font-size:18px;">Click here to read full article..</a>`
    document.querySelector('#article').append(hElem, imgElem, contentElem, linkElem)

  })

// document.querySelector('#submit').addEventListener('click',
// e => {
//    e.preventDefault()
//   fetch(
//     'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b3458132a49e43e3a296ebfa66cb04d1')
//     .then(r => r.json())
//     .then(r => {
//       document.querySelector('#cityNews').textContent = r.news
//     })
// })

// fetch('https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&units=imperial&appid=166a433c57516f51dfab1f7edaed8413')
//       .then(r => r.json())
//       .then(({ name, wind, main }) => {
//         console.log(name)
//         document.querySelector('#city').textContent = `${name} City Details`
//         document.querySelector('#wind').textContent = `Wind Speed: ${wind.speed}`
//         document.querySelector('#humidity').textContent = `Humidity: ${main.humidity}`
//         document.querySelector('#temp').textContent = `Temperature (F): ${main.temp}`
//       })
//       const addCity = input => {
//         let btnelem = document.createElement('button')
//         btnelem.className = 'getCity'
//         btnelem.setAttribute('data-city', input)
//         btnelem.textContent = input
//         document.querySelector('#btnDiv').append(btnelem)
//       }
      
//   fetch(
//     `https://newsapi.org/v2/top-headlines?country=${searchInput}&apiKey=b3458132a49e43e3a296ebfa66cb04d1`)
//     .then(r => r.json())
//     .then(r => {
//       console.log(r.articles[0])
//       console.log(searchInput)
   
// for( i=0;  i < 5; i++)
// console.log("Making images")
//            let hElem = document.createElement("h5")
//            hElem.innerHTML = r.articles[i].title
//            hElem.id = "title" + i
//            let imgElem = document.createElement("img")
//            imgElem.setAttribute("src", r.articles[i].urlToImage)
//            let linkElem = document.createElement('a')
//            linkElem.setAttribute('href',r.articles[i].url)
//            linkElem.innerHTML = "Click here to read more!"
//            document.querySelector('#article').append(hElem, imgElem, linkElem)

//           })

// fetch('https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&units=imperial&appid=166a433c57516f51dfab1f7edaed8413')
//       .then(r => r.json())
//       .then(({ name, wind, main }) => {
//         console.log(name)
//         document.querySelector('#city').textContent = `${name} City Details`
//         document.querySelector('#wind').textContent = `Wind Speed: ${wind.speed}`
//         document.querySelector('#humidity').textContent = `Humidity: ${main.humidity}`
//         document.querySelector('#temp').textContent = `Temperature (F): ${main.temp}`
//       })
//       const addCity = input => {
//         let btnelem = document.createElement('button')
//         btnelem.className = 'getCity'
//         btnelem.setAttribute('data-city', input)
//         btnelem.textContent = input
//         document.querySelector('#btnDiv').append(btnelem)
//       }


//       var countries = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"]


