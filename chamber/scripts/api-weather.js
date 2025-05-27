const apiKey = '1b8e239dd4f38de85b7ac51c56edc544';
const lat = -26.4988;
const lon = 31.3801;


const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

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

getWeather();
