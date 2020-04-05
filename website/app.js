/* Global Variables */
// HTML element to listen for click events
const button = document.getElementById('generate')

// HTML elements to get the values
const zip = document.getElementById('zip')
const feelings = document.getElementById('feelings')

// HTML elements to update dynamically
const date = document.getElementById('date')
const temp = document.getElementById('temp')
const content = document.getElementById('content')

// OpenWeatherApi configuration
const url = 'https://api.openweathermap.org/data/2.5/weather'
const APIKey = '72d4d799de2aecd4c7267456faf6e47b'

// Create a new date instance dynamically with JS
let d = new Date()
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear()

// Fetch Weather Data from OpenWeatherApi
const fetchWeather = async (baseURL, zip, apiKey) => {
  try {
    const request = await fetch(
      `${baseURL}?zip=${zip},us&units=metric&APPID=${apiKey}`,
    )
    const result = await request.json()
    // destructuring of the result object
    const {
      main: {temp},
    } = result
    return temp
  } catch (e) {
    throw e
  }
}

// POST Request to store date, temp and user input
const saveData = async (path, data) => {
  try {
    await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  } catch (e) {
    throw e
  }
}

// Update UI dynamically
const updateUI = async (temperature, newDate, feelings) => {
  date.innerText = newDate
  temp.innerText = `${temperature} deg`
  content.innerText = feelings
}

// Event listener
button.addEventListener('click', () => {
  fetchWeather(url, zip.value, APIKey)
    .then(temp => {
      return {date: newDate, temp, content: feelings.value}
    })
    .then(data => {
      saveData('/api/projectdata', data)
      return data
    })
    .then(({temp, date, content}) => updateUI(temp, date, content))
    .catch(e => {
      // There can be proper error handling with UI
      console.error(e)
    })
})
