      
      const addCity = input => {        
        let btnelem = document.createElement('weather')
        btnelem.className = 'getCity'
        btnelem.setAttribute('data-city', input)
        btnelem.textContent = input
        document.querySelector('#btnDiv').append(btnelem)
      }    
      document.addEventListener('click', e => {
        e.preventDefault()
        let cityName = "irvine";
        //let cityName = document.querySelectory("#searchText").value
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=166a433c57516f51dfab1f7edaed8413`)
            .then(r => r.json())
            .then(({ name, wind, main }) => {  
              console.log(name)
              document.querySelector('#city').textContent = `${name} City Details`
            //   document.querySelector('#wind').textContent = `Wind Speed: ${wind.speed}`
            //   document.querySelector('#humidity').textContent = `Humidity: ${main.humidity}`
            //   document.querySelector('#temp').textContent = `Temperature (F): ${main.temp}`
            // })
         })
         .catch(e)
        })
    
    
        // let getWeather = () =>{
        //     // fetch api
        // }
        // let getRain = () =>{
        //     // Update only precipitation info
        //     //append/updatetextcontent for precip
        // }
        // let getWind = () =>{
        //     //Update only wind
        // }

        //on page load- getWeather()
        //Show generic info

// linking the submit button
// adding the API 
// designing the webpage
