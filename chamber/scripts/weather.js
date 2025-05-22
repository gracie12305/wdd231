document.addEventListener("DOMContentLoaded", async () => {
    const apiKey = "YOUR_API_KEY";
    const lat = 40.7128; // Example: New York
    const lon = -74.0060;

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    try {
        // Fetch current weather
        const weatherResponse = await fetch(weatherURL);
        const weatherData = await weatherResponse.json();

        document.getElementById("current-temp").textContent = `Temp: ${weatherData.main.temp}°C`;
        document.getElementById("high-low").textContent = `High: ${weatherData.main.temp_max}°C / Low: ${weatherData.main.temp_min}°C`;
        document.getElementById("humidity").textContent = `Humidity: ${weatherData.main.humidity}%`;

        const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();
        document.getElementById("sunrise-sunset").textContent = `Sunrise: ${sunrise} / Sunset: ${sunset}`;

        // Fetch forecast
        const forecastResponse = await fetch(forecastURL);
        const forecastData = await forecastResponse.json();

        const forecastContainer = document.getElementById("forecast-container");
        forecastContainer.innerHTML = "";

        // Show forecast for 3 upcoming days at 12:00 PM
        const forecastList = forecastData.list.filter(f => f.dt_txt.includes("12:00:00")).slice(0, 3);

        forecastList.forEach(forecast => {
            const date = new Date(forecast.dt * 1000).toLocaleDateString();
            const temp = forecast.main.temp;
            const icon = forecast.weather[0].icon;
            const description = forecast.weather[0].description;

            const dayDiv = document.createElement("div");
            dayDiv.innerHTML = `
                <h4>${date}</h4>
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" width="50">
                <p>${description} - ${temp}°C</p>
            `;
            forecastContainer.appendChild(dayDiv);
        });
    } catch (error) {
        console.error("Weather fetch error:", error);
    }
});