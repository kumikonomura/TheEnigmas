// Click drop down and currencies appear
// List of currencies are from an API

// Create click event listener when drop down is clicked
document.querySelector('#currencydropdown').addEventListener('click', e => {
    e.preventDefault()
    fetch(`https://api.exchangeratesapi.io/latest`)
    .then(r => r.json())
    .catch(err => console.log(err))
    console.log('click event working')
})

// Array of currencies instead of ID's for all?