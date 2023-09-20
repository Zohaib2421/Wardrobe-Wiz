// JavaScript for fetching weather data
const apiKey = 'd819733e2fd2744c924d0b49f48befdc';
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const weatherElement = document.getElementById('weather');

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Fetch weather data
function fetchWeatherData() {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            locationElement.textContent = data.name;
            temperatureElement.textContent = celsiusToFahrenheit(data.main.temp).toFixed(1); // Convert to Fahrenheit and set to the element
            weatherElement.textContent = data.weather[0].description;
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    });
}

// Mapping of OpenWeatherMap icon codes to your SVG icons
const iconMap = {
    '01d': 'SVG/clear-sky-day.svg',          // clear sky (day)
    '01n': 'SVG/clear-sky-night.svg',    // clear sky (night)
    '02d': 'SVG/few-clouds-day.svg',         // few clouds (day)
    '02n': 'SVG/few-clouds-night.svg',   // few clouds (night)
    '03d': 'SVG/scattered-clouds.svg',   // scattered clouds (day)
    '03n': 'SVG/scattered-clouds.svg', // scattered clouds (night)
    '04d': 'SVG/scattered-clouds.svg',      // broken clouds (day)
    '04n': 'SVG/scattered-clouds.svg',// broken clouds (night)
    '09d': 'SVG/shower-rain.svg',        // shower rain (day)
    '09n': 'SVG/shower-rain.svg',  // shower rain (night)
    '10d': 'SVG/rain-day.svg',               // rain (day)
    '10n': 'SVG/rain-night.svg',         // rain (night)
    '11d': 'SVG/thunderstorm.svg',       // thunderstorm (day)
    '11n': 'SVG/thunderstorm.svg', // thunderstorm (night)
    '13d': 'SVG/snow-day.svg',               // snow (day)
    '13n': 'SVG/snow-night.svg',         // snow (night)
    '50d': 'SVG/shower-rain.svg',               // mist (day)
    '50n': 'SVG/shower-rain.svg'          // mist (night)
};

// Function to fetch weather data and display it
async function showWeather() {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            const cityName = data.name.toUpperCase();
            const countryName = data.sys.country.toUpperCase();
            const temperatureCelsius = data.main.temp;
            const temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);
            const locationText = `${cityName}, ${countryName}`;
            const temperatureText = `${temperatureFahrenheit.toFixed(1)}°F`;
            const weatherText = data.weather[0].description.toUpperCase();

            // Determine which SVG icon to display
            const weatherIconCode = data.weather[0].icon;
            const weatherIconUrl = iconMap[weatherIconCode] || 'icons/default.svg'; // Use a default icon if the icon code is not in the map

            // Display location, temperature, and weather data
            locationElement.textContent = locationText;
            temperatureElement.textContent = temperatureText;
            weatherElement.textContent = weatherText;
            document.getElementById('weather-icon').src = weatherIconUrl; // Set the icon URL to the img element

        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    });
}




// Call the function to fetch weather data
fetchWeatherData();
showWeather();

// JavaScript for wardrobe input
const wardrobeForm = document.getElementById('wardrobe-form');
const wardrobeList = document.getElementById('wardrobe-list');

// Event listener for wardrobe form submission
wardrobeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const clothingItemInput = document.getElementById('clothing-item');
    const clothingItemValue = clothingItemInput.value.trim();
    if (clothingItemValue) {
        const listItem = document.createElement('li');
        listItem.textContent = clothingItemValue;
        wardrobeList.appendChild(listItem);
        clothingItemInput.value = '';
    }
});