document.getElementById('overlay').addEventListener("click", () => {
    closeWardrobe()
    closeForm()
});

function openForm() {
    document.getElementById('form').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    const formElement = document.getElementById('form');
    console.log(document.getElementById('form').style.display);
}

function openWardrobe() {
    document.getElementById('wardrobe').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeWardrobe() {
    document.getElementById('wardrobe').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function closeForm() {
    document.getElementById('form').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Array to store wardrobe items
let wardrobeItems = [];

// Function to create a new card for a clothing item
function createClothingCard(item, index) {
    const card = document.createElement('div');
    card.className = 'clothing-card';
    card.innerHTML = `
      <h2>${item.style}</h2>
      <p>Color: ${item.color}</p>
      <p>Material: ${item.material}</p>
      <p>Brand: ${item.brand}</p>
      <button onclick="removeClothing(${index})">Remove</button>
    `;
    return card;
  }
  

// Function to update the wardrobe display
function updateWardrobe() {
  const wardrobeDiv = document.getElementById('wardrobe');
  wardrobeDiv.innerHTML = ''; // Clear existing items
  wardrobeItems.forEach(item => {
    const card = createClothingCard(item);
    wardrobeDiv.appendChild(card);
  });
}

// Handle form submission
document.getElementById('form').addEventListener('submit', function(event) {  // Fixed the typo here
    event.preventDefault(); // Prevent default form submission behavior
    console.log("Form submission prevented");

    // Get form values
    const item = document.getElementById('item').value;
  const type = document.getElementById('type').value;
  const color = document.getElementById('color').value;
  const material = document.getElementById('material').value;
  const brand = document.getElementById('brand').value;

  // Create a new clothing item object
    const newItem = {
    item,
    type,
    color,
    material,
    brand
  };

  // Add the new item to the wardrobe array
  wardrobeItems.push(newItem);

  // Update the wardrobe display
  updateWardrobe();

  // Clear the form
    event.target.reset();
    closeForm();
});

function removeClothing(index) {
    wardrobeItems.splice(index, 1); // Remove the item at the given index
    updateWardrobe(); // Update the display
}
function updateWardrobe() {
    const wardrobeDiv = document.getElementById('wardrobe');
    wardrobeDiv.innerHTML = ''; // Clear existing items
    wardrobeItems.forEach((item, index) => {
      const card = createClothingCard(item, index);
      wardrobeDiv.appendChild(card);
    });
  }
  
  
