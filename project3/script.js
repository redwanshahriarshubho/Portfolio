// ⚠️ REPLACE 'YOUR_API_KEY' WITH YOUR ACTUAL KEY FROM: https://openweathermap.org/api
const API_KEY = 'YOUR_API_KEY';

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        getWeather();
    }
}

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) return alert('Please enter a city name.');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        document.getElementById('cityName').innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').innerText = `${Math.round(data.main.temp)}°C`;
        document.getElementById('description').innerText = data.weather[0].description;
        document.getElementById('feelsLike').innerText = `${Math.round(data.main.feels_like)}°C`;
        document.getElementById('humidity').innerText = `${data.main.humidity}%`;
        document.getElementById('wind').innerText = `${data.wind.speed} m/s`;
        document.getElementById('pressure').innerText = `${data.main.pressure} hPa`;

        const iconCode = data.weather[0].icon;
        document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        document.getElementById('weatherResult').classList.remove('hidden');

    } catch (error) {
        alert('City not found or API error. Please try again.');
        console.error(error);
    }
}