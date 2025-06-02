const apiKey = '1b8e239dd4f38de85b7ac51c56edc544';
const lat = -26.4988;
const lon = 31.3801;


const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;


async function getWeather() {
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        document.getElementById('current-temp').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('current-desc').textContent = `Condition: ${data.weather[0].description}`;
    } catch (error) {
        console.error('Error fetching weather:', error);
        document.getElementById('current-temp').textContent = `Weather unavailable`;
    }
}


// Fetch 3-day forecast
async function getForecast() {
    try {
        const response = await fetch(forecastURL);
        const data = await response.json();
        const forecastContainer = document.getElementById('forecast-container');

        forecastContainer.innerHTML = ''; // Clear old content

        // Filter for 12:00 PM forecast each day
        const forecastList = data.list.filter(item => item.dt_txt.includes('12:00:00'));

        // Limit to next 3 days
        forecastList.slice(0, 3).forEach(day => {
            const date = new Date(day.dt_txt);
            const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
            const temp = day.main.temp.toFixed(1);
            const desc = day.weather[0].description;

            const card = document.createElement('div');
            card.classList.add('forecast-day');
            card.innerHTML = `
                <strong>${weekday}</strong>: ${temp}°C - ${desc}
            `;

            forecastContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Error fetching forecast:', error);
        document.getElementById('forecast-container').textContent = 'Forecast unavailable';
    }
}

// Run both
getWeather();
getForecast();


