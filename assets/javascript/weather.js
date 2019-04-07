// 
// const addCity = input => {
//   let btnelem = document.createElement('submit')
//   btnelem.className = 'getCity'
//   btnelem.setAttribute('data-city', input)
//   btnelem.textContent = input
//   document.querySelector('#btnDiv').append(btnelem)
// }    
// document.addEventListener('click', e => {
//   e.preventDefault()
//   if (e.target.className === 'cityName') {
//       fetch('https://api.openweathermap.org/data/2.5/weather?q,&units=imperial&appid=166a433c57516f51dfab1f7edaed8413')
//       .then(r => r.json())
//       .then(({ name, wind, main }) => {
//         console.log(name)
//         document.querySelector('#city').textContent = `${name} City Details`
//         document.querySelector('#wind').textContent = `Wind Speed: ${wind.speed}`
//         document.querySelector('#humidity').textContent = `Humidity: ${main.humidity}`
//         document.querySelector('#temp').textContent = `Temperature (F): ${main.temp}`
//       })
//    }
//  else if (e.target.id === '') {
//   movies.push(document.querySelector('#movie-input').value)
//   document.querySelector('#movie-input').value = ''
//   dispBtns()
// }
// })

// linking the submit button
// adding the API 
// designing the webpage

// array of country names and codes
let countryArr = [
  {
    name: 'Argentina',
    code: 'ar',
    city: 'Buenos Aires',
  },

  {
    name: 'Austria',
    code: 'at',
    city: 'Vienna',
  },

  {
    name: "Australia",
    code: 'au',
    city: 'Sydney',
  },

  {
    name: 'Belguim',
    code: 'be',
    city: 'Brussels',
  },

  {
    name: 'Bulgaria',
    code: 'bg',
    city: 'Sofia',
  },

  {
    name: 'Brazil',
    code: 'br',
    city: 'Brazilia',
  },

  {
    name: 'Canada',
    code: 'ca',
    city: 'Toronto',
  },

  {
    name: 'China',
    code: 'cn',
    city: 'Beiging',
  },

  {
    name: 'Colombia',
    code: 'co',
    city: 'Bogota',
  },

  {
    name: 'Cuba',
    code: 'cu',
    city: 'Havana',
  },

  {
    name: 'Czechia',
    code: 'cz',
    city: 'Prague',
  },

  {
    name: 'Egypt',
    code: 'eg',
    city: 'Cairo',
  },

  {
    name: 'France',
    code: 'fr',
    city: 'Paris',
  },

  {
    name: 'Germany',
    code: 'de',
    city: 'Berlin',
  },

  {
    name: 'Great Britain',
    code: 'gb',
    city: 'London',
  },

  {
    name: 'Greece',
    code: 'gr',
    city: 'Athens',
  },

  {
    name: 'Hong Kong',
    code: 'hk',
    city: 'Hong Kong',
  },

  {
    name: 'Hungary',
    code: 'hu',
    city: 'Budapest',
  },

  {
    name: 'India',
    code: 'in',
    city: 'Delhi',
  },

  {
    name: 'Indonesia',
    code: 'id',
    city: 'Jakarta',
  },

  {
    name: 'Ireland',
    code: 'ie',
    name: 'Dublin',
  },

  {
    name: 'Israel',
    code: 'il',
    city: 'Tel Aviv',
  },

  {
    name: 'Italy',
    code: 'it',
    city: 'Rome',
  },

  {
    name: 'Japan',
    code: 'jp',
    city: 'Tokyo',
  },

  {
    name: 'Lithuania',
    code: 'lt',
    city: 'Vilnius',
  },

  {
    name: 'Latvia',
    code: 'lv',
    city: 'Riga',
  },

  {
    name: 'Mexico',
    code: 'mx',
    city: 'Mexico City',
  },

  {
    name: 'Malaysia',
    code: 'my',
    city: 'Kuala Lumpur',
  },

  {
    name: 'Morocco',
    code: 'ma',
    city: 'Rabat',
  },

  {
    name: 'New Zealand',
    code: 'nz',
    city: 'Auckland',
  },

  {
    name: 'Netherlands',
    code: 'nl',
    city: 'Amsterdam',
  },

  {
    name: 'Nigeria',
    code: 'ng',
    city: 'Lagos',
  },

  {
    name: 'Norway',
    code: 'no',
    city: 'Oslo',
  },

  {
    name: 'Philippines',
    code: 'ph',
    city: 'Manila',
  },

  {
    name: 'Poland',
    code: 'pl',
    city: 'Warsaw',
  },

  {
    name: 'Portugal',
    code: 'pt',
    city: 'Lisbon',
  },

  {
    name: 'Romania',
    code: 'ro',
    city: 'Bucharest',
  },

  {
    name: 'Russia',
    code: 'ru',
    city: 'Moscow',
  },

  {
    name: 'Serbia',
    code: 'rs',
    city: 'Belgrade',
  },

  {
    name: 'Singapore',
    code: 'sg',
    city: 'Singapore',
  },

  {
    name: 'Slovenia',
    code: 'si',
    city: 'Ljubljana',
  },

  {
    name: 'Slovakia',
    code: 'sk',
    city: 'Bratislava',
  },

  {
    name: 'South Africa',
    code: 'za',
    city: 'Johannesburg',
  },

  {
    name: 'South Korea',
    code: 'kr',
    city: 'Seoul',
  },

  {
    name: 'Sweden',
    code: 'se',
    city: 'Stockholm',
  },

  {
    name: 'Switzerland',
    code: 'ch',
    city: 'Basel',
  },

  {
    name: 'Taiwan',
    code: 'tw',
    city: 'Taipei',
  },

  {
    name: 'Thailand',
    code: 'th',
    city: 'Phuket',
  },

  {
    name: 'Turkey',
    code: 'tr',
    city: 'Istanbul',
  },

  {
    name: 'Ukraine',
    code: 'ua',
    city: 'Kiev',
  },

  {
    name: 'United Arab Emirates',
    code: 'ae',
    city: 'Dubai',
  },

  {
    name: 'United States',
    code: 'us',
    city: 'Irvine'
  },

  {
    name: 'Venezuela',
    code: 've',
    city: 'Caracas',
  },
]

// retrieves country name selected on index page from local storage
let country = localStorage.getItem('searchInput')
// cityName variable is defined
let cityName = ''

// function to translate country name into country code
let getCity = () => {
  for (j = 0; j < countryArr.length; j++)
    if (country === countryArr[j].name) {
      cityName = countryArr[j].city
    }
}

getCity()

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=166a433c57516f51dfab1f7edaed8413`)
  .then(r => r.json())
  .then(({ weather, name, wind, main }) => {
    console.log(name)
    console.log(weather)
    console.log(wind)
    console.log(main)
    document.querySelector('#city').textContent = `${name} City Details`
      document.querySelector('#wind').textContent = `Wind Speed: ${wind.speed}`
      document.querySelector('#humidity').textContent = `Humidity: ${main.humidity}`
      document.querySelector('#temp').textContent = `Temperature (F): ${main.temp}`
    })
  .catch(e)