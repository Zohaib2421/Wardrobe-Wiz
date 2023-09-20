// JavaScript for fetching weather data
const apiKey = 'd819733e2fd2744c924d0b49f48befdc';
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const weatherElement = document.getElementById('weather-icon');

// Fetch weather data
function fetchWeatherData() {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            locationElement.textContent = data.name;
            temperatureElement.textContent = data.main.temp;
            weatherElement.textContent = data.weather[0].icon;
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    });
}

// Function to fetch weather data and display it
async function showWeather() {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const locationData = await fetchLocationData(latitude, longitude);

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const locationText = `${data.name}, ${locationData.country}`;
            const temperatureText = `${data.main.temp}°C`;
            const weatherText = data.weather[0].icon;

            // Display location and weather data
            locationElement.textContent = locationText;
            temperatureElement.textContent = temperatureText;
            weatherElement.textContent = weatherText;
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