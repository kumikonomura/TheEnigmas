// array of country names and codes
let countryArr = [
  {
    name: 'Argentina',
    code: 'ar',
  },

  {
    name: 'Austria',
    code: 'at',
  },

  {
    name: "Australia",
    code: 'au',
  },

  {
    name: 'Belguim',
    code: 'be',
  },

  {
    name: 'Bulgaria',
    code: 'bg',
  },

  {
    name: 'Brazil',
    code: 'br',
  },

  {
    name: 'Canada',
    code: 'ca',
  },

  {
    name: 'China',
    code: 'ch',
  },

  {
    name: 'Colombia',
    code: 'co',
  },

  {
    name: 'Cuba',
    code: 'cu',
  },

  {
    name: 'Czechia',
    code: 'cz',
  },

  {
    name: 'Egypt',
    code: 'eg',
  },

  {
    name: 'France',
    code: 'fr',
  },

  {
    name: 'Germany',
    code: 'de',
  },

  {
    name: 'Great Britain',
    code: 'gb',
  },

  {
    name: 'Greece',
    code: 'gr',
  },

  {
    name: 'Hong Kong',
    code: 'hk',
  },

  {
    name: 'Hungary',
    code: 'hu',
  },

  {
    name: 'India',
    code: 'in',
  },

  {
    name: 'Indonesia',
    code: 'id',
  },

  {
    name: 'Ireland',
    code: 'ie',
  },

  {
    name: 'Israel',
    code: 'il',
  },

  {
    name: 'Italy',
    code: 'it',
  },

  {
    name: 'Japan',
    code: 'jp',
  },

  {
    name: 'Lithuania',
    code: 'lt',
  },

  {
    name: 'Latvia',
    code: 'lv',
  },

  {
    name: 'Mexico',
    code: 'mx',
  },

  {
    name: 'Malaysia',
    code: 'my',
  },

  {
    name: 'Morocco',
    code: 'ma',
  },

  {
    name: 'New Zealand',
    code: 'nz',
  },

  {
    name: 'Netherlands',
    code: 'nl',
  },

  {
    name: 'Nigeria',
    code: 'ng',
  },

  {
    name: 'Norway',
    code: 'no',
  },

  {
    name: 'Philippines',
    code: 'ph',
  },

  {
    name: 'Poland',
    code: 'pl',
  },

  {
    name: 'Portugal',
    code: 'pt',
  },

  {
    name: 'Romania',
    code: 'ro',
  },

  {
    name: 'Russia',
    code: 'ru',
  },

  {
    name: 'Serbia',
    code: 'rs',
  },

  {
    name: 'Singapore',
    code: 'sg',
  },

  {
    name: 'Slovenia',
    code: 'si',
  },

  {
    name: 'Slovakia',
    code: 'sk',
  },

  {
    name: 'South Africa',
    code: 'za',
  },

  {
    name: 'South Korea',
    code: 'kr',
  },

  {
    name: 'Sweden',
    code: 'se',
  },

  {
    name: 'Switzerland',
    code: 'ch',
  },

  {
    name: 'Taiwan',
    code: 'tw',
  },

  {
    name: 'Thailand',
    code: 'th',
  },

  {
    name: 'Turkey',
    code: 'tr',
  },

  {
    name: 'Ukraine',
    code: 'ua',
  },

  {
    name: 'United Arab Emirates',
    code: 'ae',
  },

  {
    name: 'United States',
    code: 'us',
  },

  {
    name: 'Venezuela',
    code: 've',
  },
]

// retrieves country name selected on index page from local storage
let country = localStorage.getItem('searchInput')
// country code variable is defined
let countryCode = ''

// function to translate country name into country code
let getCode = () => {
  for (j = 0; j < countryArr.length; j++)
  if (country === countryArr[j].name) {
    countryCode = countryArr[j].code
  }
}

getCode()
fetch(
  `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=b3458132a49e43e3a296ebfa66cb04d1`)
  .then(r => r.json())
  .then(r => {
    console.log(country)
    console.log(countryCode)
    console.log(r.articles[0])
    console.log(r.articles[1])
    console.log(r.articles[2])
    console.log(r.articles[3])
    console.log(r.articles[4])
    for (i = 0; i < 5; i++){
      // console.log("Making images")
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
    }
  })