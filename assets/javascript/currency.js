// Click drop down and currencies appear
// List of currencies are from an API

// Click event listener when drop down is clicked
document.querySelector('#currencydropdown').addEventListener('click', e => {
    // prevent page from refresh
    e.preventDefault()
    // Testing = click event listener works!
    console.log('click event working')

// Array of currencies instead of ID's for all?
// Array for currencies
let currencyList= []
// Fetch the API
fetch(`https://api.exchangeratesapi.io/latest`)
    .then(r => r.json())
    .then(r => {
        console.log(r.rates)
    currencyList = Object.keys(r.rates)
    // Testing = working!
    console.log(currencyList)
    })
})

