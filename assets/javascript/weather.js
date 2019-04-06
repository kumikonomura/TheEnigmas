      
      const addCity = input => {
        let btnelem = document.createElement('submit')
        btnelem.className = 'getCity'
        btnelem.setAttribute('data-city', input)
        btnelem.textContent = input
        document.querySelector('#btnDiv').append(btnelem)
      }    
      document.addEventListener('click', e => {
        e.preventDefault()
        if (e.target.className === 'cityName') {
            fetch('https://api.openweathermap.org/data/2.5/weather?q=Bujumbara,Burundi,&units=imperial&appid=166a433c57516f51dfab1f7edaed8413')
            .then(r => r.json())
            .then(({ name, wind, main }) => {
              console.log(name)
              document.querySelector('#city').textContent = `${name} City Details`
              document.querySelector('#wind').textContent = `Wind Speed: ${wind.speed}`
              document.querySelector('#humidity').textContent = `Humidity: ${main.humidity}`
              document.querySelector('#temp').textContent = `Temperature (F): ${main.temp}`
            })
         }
        //  else if (e.target.id === '') {
        //   movies.push(document.querySelector('#movie-input').value)
        //   document.querySelector('#movie-input').value = ''
        //   dispBtns()
        // }
      })

// linking the submit button
// adding the API 
// designing the webpage
