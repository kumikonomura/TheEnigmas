// array of weather icons
let nighticons = [
  {
    class: 'fas fa-bolt wiconstyle',
    description: 'lightning',
  },
  {
    class: 'fas fa-cloud-meatball wiconstyle',
    description: 'heavy clouds',
  },
  {
    class: 'fas fa-cloud-moon wiconstyle',
    description: 'few clouds',
  },
  {
    class: 'fas fa-cloud-moon-rain wiconstyle',
    description: 'rain showers clouds',
  },
  {
    class: 'fas fa-meteor wiconstyle',
    description: 'meteor',
  },
]

let dayicons = [
  {
    class: 'fas fa-cloud-rain wiconstyle',
    description: 'light rain',
  },
  {
    class: 'fas fa-cloud-showers-heavy wiconstyle',
    description: 'heavy rain',
  },
  {
    class: 'fas fa-cloud-sun wiconstyle',
    description: 'few clouds',
  },
  {
    class: 'fas fa-cloud-sun wiconstyle',
    description: 'overcast clouds',
  },
  {
    class: 'fas fa-cloud-sun-rain wiconstyle',
    description: 'cloudy and suny and rainy',
  },
  {
    class: 'fas fa-meteor wiconstyle',
    description: 'meteor',
  },
  {
    class: 'fas fa-poo-storm wiconstyle',
    description: 'thunderstorm',
  },
  {
    class: 'fas fa-rainbow wiconstyle',
    description: 'rainbow',
  },
  {
    class: 'fas fa-smog wiconstyle',
    description: 'haze',
  },
  {
    class: 'fas fa-smog wiconstyle',
    description: 'mist',
  },
  {
    class: 'fas fa-snowflake wiconstyle',
    description: 'snow',
  },
  {
    class: 'far far-snowflake wiconstyle',
    description: 'snowy',
  },
  {
    class: 'fas fa-sun wiconstyle',
    description: 'sky is clear',
  },
  {
    class: 'far fa-sun wiconstyle',
    description: 'sunny',
  },

]  
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
    name: 'Belgium',
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
    city: 'Beijing',
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
let countryCode = ''

// function to translate country name into country code
let getCity = () => {
  if(country === "")
  {
    country = 'United States'
  }
  for (j = 0; j < countryArr.length; j++){
    if (country === countryArr[j].name) {
      cityName = countryArr[j].city
      countryCode = countryArr[j].code
    }
  }
}
// creating function for the weather icon to dislay in page
let setweathericon = (description,sunset) => {
  let night = false
  let today
  let epochtime
  let iconary
  let iconclass = undefined
  let iconelem = undefined
  console.log(description)
  console.log(sunset)
  // fetching current time
  today = new Date();
  epochtime = today.valueOf()/1000
  // Declaring night,if current time is greater than sunset and selecting corresponding icon array
  night = (epochtime > sunset)?true:0
  iconary = night?nighticons:dayicons
  console.log(iconary)
  for(let i=0;i<iconary.length;i++)
  {
    //console.log(description)
    //console.log(iconary[i].description)
    if(description === iconary[i].description)
    {
      iconclass = iconary[i].class
      break
    }
  }
  // Declaring default image,if iconclass is undefined
  if(iconclass == undefined)
  {
    iconclass = night?('fas fa-cloud-moon wiconstyle'):('fas fa-sun wiconstyle')
  }
  console.log(iconclass)
  // Assigning iconclass to weather icon element
  iconelem = document.getElementById('weather-icon')
  iconelem.setAttribute('class',`${iconclass}`)
}

// populating 5 day forecast 
let populate_day_forecast = (data,index) => {
     let iconary = dayicons
     let iconclass = undefined
     let dayelem = document.getElementById(`day${index}`)
     let iconelem = document.getElementById(`day${index}_icon`)
     let tempelem = document.getElementById(`day${index}_temp`)
     //Setting the day of the week 
     //Using the moment.js method to get the day of the week by passing the UNIX time(data.dt)
     dayelem.textContent = moment(data.dt,"X").format("ddd")
     //console.log(data.dt)
     //console.log(moment(data.dt,"X").format("ddd"))
     for(let i=0;i<iconary.length;i++)
     {
        //console.log(data.weather[0].description)
        //console.log(iconary[i].description)
        if(data.weather[0].description === iconary[i].description)
        {
          iconclass = iconary[i].class
          break
        }
     }
     if(iconclass == undefined)
     {
       iconclass = 'fas fa-sun wiconstyle'
     }
     console.log(iconclass)
    //  iconelem = document.getElementById('weather-icon')
     iconelem.setAttribute('class',`${iconclass}`)
     console.log(data.temp.max)
     console.log(data.temp.min)
     tempelem.textContent = `${data.temp.min}  ${data.temp.max}`
   }
// function to fetch 5 day forecast based on selected city
let daysforecast = (city, countrycode) => {
  fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city},${countrycode}&cnt=6&units=imperial&appid=166a433c57516f51dfab1f7edaed8413`)
  .then(r => r.json())
  .then(weatherdata => {
    // Now populate the 5 day forecast by parsing the returned weatherdata.list array
    for(let i=1;i<6;i++) {
      populate_day_forecast(weatherdata.list[i],(i))
    }
    //console.log(weatherdata.list)
  })
  .catch(e => console.error(e))
}
// calling the function to get city
getCity()
// fetching the info from weather page
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&units=imperial&appid=166a433c57516f51dfab1f7edaed8413`)
  .then(r => r.json())
  .then(({ weather, name, wind, main, clouds , sys }) => {
      document.querySelector('#cityname').textContent = `${name},${sys.country}`
      if(weather[0].main === "Rain")
        document.querySelector('#Precipitation').textContent = `Precipitation: ${clouds.all}%`
      else
        document.querySelector('#Precipitation').textContent = "Precipitation: 0%"
      // document.querySelector('#Precipitation').textContent = `Precipitation: ${rain || '0'}%`
      document.querySelector('#Wind').textContent = `Wind: ${wind.speed}mph`
      document.querySelector('#Humidity').textContent = `Humidity: ${main.humidity}%`
      document.querySelector('#weather-desc').textContent = `${weather[0].description}`
      document.querySelector('#weather-info').textContent = `Temp (F): ${main.temp}`
     // calling the function to set the weather icon
      setweathericon(`${weather[0].description}`,`${sys.sunset}`)
     //  calling the function to set days forecast
      daysforecast(`${cityName}`,`${sys.country}`)
    })
  .catch(e => console.error(e))

