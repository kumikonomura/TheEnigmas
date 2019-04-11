// Array of countries from currency API and their codes
let currencyArr = [
    {
        name: 'Australia',
        code: 'AUD',
    },

    {
        name: 'Brazil',
        code: 'BRL',
    },

    {
        name: 'Bulgaria',
        code: 'BGN',
    },

    {
        name: 'Canada',
        code: 'CAD',
    },

    {
        name: 'China',
        code: 'CNY',
    },

    {
        name: 'Croatia',
        code: 'HRK',
    },

    {
        name: 'Czech Republic',
        code: 'CZK',
    },

    {
        name: 'Denmark',
        code: 'DKK',
    },

    {
        name: 'Hong Kong',
        code: 'HKY',
    },

    {
        name: 'Hungary',
        code: 'HUF',
    },

    {
        name: 'Iceland',
        code: 'ISK',
    },

    {
        name: 'India',
        code: 'INR',
    },

    {
        name: 'Indonesia',
        code: 'IDR',
    },

    {
        name: 'Israel',
        code: 'ILS',
    },

    {
        name: 'Japan',
        code: 'JPY',
    },

    {
        name: 'Malaysia',
        code: 'MYR',
    },

    {
        name: 'Mexico',
        code: 'MXN',
    },

    {
        name: 'New Zealand',
        code: 'NZD',
    },

    {
        name: 'Norway',
        code: 'NOK',
    },

    {
        name: 'Philippines',
        code: 'PHP',
    },

    {
        name: 'Poland',
        code: 'PLN',
    },

    {
        name: 'Great Britain',
        code: 'GBP',
    },

    {
        name: 'Romania',
        code: 'RON',
    },

    {
        name: 'Russia',
        code: 'RUB',
    },

    {
        name: 'Singapore',
        code: 'SGD',
    },

    {
        name: 'South Africa',
        code: 'ZAR',
    },

    {
        name: 'South Korea',
        code: 'KRW',
    },

    {
        name: 'Sweden',
        code: 'SEK',
    },

    {
        name: 'Switzerland',
        code: 'CHF',
    },

    {
        name: 'Thailand',
        code: 'THB',
    },

    {
        name: 'Turkey',
        code: 'TRY',
    },

    {
        name: 'United States',
        code: 'USD',
    },
]

// variable called foreignCurrency 
let foreignCurrency;
// function called loadCurrency
function loadCurrency() {
    // set forreignCurrency variable to equal the searchInput on index page from local storage
    foreignCurrency = localStorage.getItem('searchInput')
    currencyArr.forEach(currency => {
        if (foreignCurrency === currency.name) {
            let selectedCurrencyEl = document.getElementById(currency.code)
            selectedCurrencyEl.setAttribute('selected', 'selected')
        }
    })
}

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

loadCurrency()
convertCurrency()
