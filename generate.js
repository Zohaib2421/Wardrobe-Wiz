// Function to generate clothing based on weather
function generateClothingBasedOnWeather(weatherData) {
    const temperature = weatherData.main.temp;
    const weatherCondition = weatherData.weather[0].main;
  
    let filteredWardrobeItems = wardrobeItems.filter(item => {
      if (temperature < 0 && item.material === "Wool") {
        return true;
      }
      if (temperature >= 0 && temperature < 10 && item.material !== "Cotton") {
        return true;
      }
      if (temperature >= 10 && temperature < 20 && item.style !== "Heavy Jacket") {
        return true;
      }
      if (temperature >= 20 && item.style === "T-shirt") {
        return true;
      }
      return false;
    });
  
    if (weatherCondition === "Rain") {
      filteredWardrobeItems = filteredWardrobeItems.filter(item => item.material === "Waterproof");
    }
  
    // Update the clothing-item div
    const clothingItemDiv = document.getElementById('clothing-item');
    clothingItemDiv.innerHTML = `<h1>Suggested Clothing:</h1>`;
    
    filteredWardrobeItems.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'suggested-clothing-item';
      itemElement.innerHTML = `
        <h2>${item.style}</h2>
        <p>Color: ${item.color}</p>
        <p>Material: ${item.material}</p>
        <p>Brand: ${item.brand}</p>
      `;
      clothingItemDiv.appendChild(itemElement);
    });
  }
  
  // Attach the function to the 'generate' button
  document.getElementById('generate').addEventListener('click', function() {
    // Assuming you have a function getWeatherData that fetches weather data
    getWeatherData().then(weatherData => {
      generateClothingBasedOnWeather(weatherData);
    });
  });
  