<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather & Wardrobe</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://use.typekit.net/kog5frj.css">
    <script src="script.js" defer></script>
</head>

<?php
$servername = "localhost";
$username = "root";
$password = "";
$conn = new mysqli($servername, $username, $password);
?>

<body>
    <main>
        <div class="left">
            <div class="weather-info">
                <img id="weather-icon" src="" alt="Weather Icon">
                <p><span id="temperature">Loading...</span></p>
                <p><span id="location">Loading...</span></p>
                <p><span id="weather">Loading...</span></p>
            </div>
            <div>
                <h1>Wardrobe</h1>
                <h1>Wizz</h1>
            </div>
        </div>
        <div class="right">
            <h1>Today's Outfit</h1>
            <div class="clothing">
                <div class="clothing-item">
                    <img class="shirt" src="SVG/t-shirt.svg" alt="">
                </div>
                <div class="clothing-item">
                    <img class="pants" src="SVG/pants.svg" alt="">
                </div>
                <div class="clothing-item">
                    <img class="outerwear" src="SVG/outerwear.svg" alt="">
                </div>
                <div class="clothing-item">
                    <img class="shoes" src="SVG/shoes.svg" alt="">
                </div>
            </div>
            <div class="buttons">
                <button id="generate">Generate Clothing</button>
                <form action="Wardrobe.html" method="post">
                    <button type="submit" id="add">Add to Wardrobe</button>
                </form>
            </div>
        </div>
    </main>
</body>

</html>