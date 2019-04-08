// // Click event listener when drop down is clicked
// document.querySelector('#currencydropdown').addEventListener('click', e => {
//     // prevent page from refresh
//     e.preventDefault()
//     // Testing = click event listener works!
//     console.log('click event working')
//     // Array for currencies
//     let currencyList = []
//     // Fetch the API
//     fetch(`https://api.exchangeratesapi.io/latest`)
//         .then(r => r.json())
//         .then(r => {
//             console.log(r.rates)
//             currencyList = Object.keys(r.rates)
//             // Testing = working!
//             console.log(currencyList)
//         })
    
// })

// Figure out how to use API to add currencies to list
function convertCurrency() {
    let from = document.getElementById('from').value
    let to = document.getElementById('to').value
    fetch(`https://api.exchangeratesapi.io/latest`)
    .then(r => r.json())
    .then(r => {
        console.log(r.rates)
        currencyList = Object.keys(r.rates)
        console.log(currencyList)
        let oneUnit = r.rates[to]/r.rates[from]
        let amount = document.getElementById('fromAmount').value
        document.getElementById('toAmount').value = (oneUnit*amount).toFixed(2)
    })
}

