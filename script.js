async function populateTable() {
  const response = await fetch('./JSON/archive.json');
  const data = await response.json();
  const dataTable = document.getElementById("dataTable");
  const imageContainer = document.getElementById("imageContainer");
  let hoverImage = null; // Store the currently displayed image

  // Get the table body where we'll add the rows
  const tbody = dataTable.querySelector("tbody");

  // Loop through the data and create a row for each item
  data.Sheet1.forEach(item => {
    const row = document.createElement("tr");

    // Create table cells for each property in the JSON data
    const titleCell = document.createElement("td");
    titleCell.textContent = item.title;
    row.appendChild(titleCell);

    // Add other table cells here as needed

    const tagCell = document.createElement("td");
    tagCell.textContent = item.tag;
    row.appendChild(tagCell);

    // Create a cell for the image
    const imageCell = document.createElement("td");

    // Create an anchor (link) element for the image
    const imageLink = document.createElement("a");
    imageLink.href = item.image; // Set the link URL

    // Create an image element and set its source
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = "Image";

    // Add the square-image class to the image
    image.classList.add("square-image");

    imageLink.appendChild(image);
    imageCell.appendChild(imageLink);
    row.appendChild(imageCell);

    // Add an event listener for hover on the title cell
    titleCell.addEventListener("mouseenter", () => {
      // Create an image element and set its source
      hoverImage = document.createElement("img");
      hoverImage.src = item.image;
      hoverImage.alt = "Image";
      hoverImage.classList.add("square-image"); // Add the square-image class
      document.body.appendChild(hoverImage); // Append to the body
    });

    // Remove the image when leaving the title cell
    titleCell.addEventListener("mouseleave", () => {
      if (hoverImage) {
        document.body.removeChild(hoverImage); // Remove the image from the body
        hoverImage = null; // Clear the reference
      }
    });

    // Add the row to the table body
    tbody.appendChild(row);
  });
}

// Call the function to populate the table
populateTable();

async function populateImageGrid() {
  const response = await fetch('./JSON/archive.json'); // Replace with your JSON file path
  const data = await response.json();
  const imageGrid = document.getElementById("imageGrid");

  // Loop through the data and create an image item for each image in the JSON
  data.Sheet1.forEach(item => {
    const imageItem = document.createElement("div");
    imageItem.classList.add("image-item");

    // Create an image element and set its source
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = "Image";

    // Append the image to the image item
    imageItem.appendChild(image);

    // Append the image item to the image grid
    imageGrid.appendChild(imageItem);
  });
}

// Call the function to populate the image grid
populateImageGrid();