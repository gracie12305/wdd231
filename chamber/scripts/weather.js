document.addEventListener("DOMContentLoaded", () => {
    const currentTemp = document.querySelector("#current-temp");
    const highLow = document.querySelector("#high-low");
    const humidity = document.querySelector("#humidity");
    const sunriseSunset = document.querySelector("#sunrise-sunset");
    const forecastContainer = document.querySelector("#forecast-container");

    // Test values — just to prove it works
    if (currentTemp) currentTemp.textContent = "24°C - Clear Skies";
    if (highLow) highLow.textContent = "High: 28°C / Low: 17°C";
    if (humidity) humidity.textContent = "Humidity: 60%";
    if (sunriseSunset) sunriseSunset.textContent = "Sunrise: 06:12 AM | Sunset: 07:45 PM";

    if (forecastContainer) {
        forecastContainer.innerHTML = `
        <p>Mon: ☀️ 25°C</p>
        <p>Tue: 🌤️ 22°C</p>
        <p>Wed: 🌧️ 19°C</p>
      `;
    }
});
  