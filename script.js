// async function getData(){
//   const response = await fetch('./JSON/archive.json');
//   const data = await response.json();

//   console.log(data.Sheet1)
// }
// getData();

// function setData() {
//   document.getElementById("title").textContent = data.Sheet1[0].title;
// }
// setData();

// async function getData() {
//   const response = await fetch('./JSON/archive.json');
//   const data = await response.json();

//   console.log(data.Sheet1);


//   setData(data.Sheet1);
// }

// function setData(sheetData) {
//   document.getElementById("title").textContent = sheetData[2].title;
//   document.getElementById("tag").textContent = sheetData[2].tag;
// }


// getData();

async function populateTable() {
  const response = await fetch('./JSON/archive.json');
  const data = await response.json();
  const dataTable = document.getElementById("dataTable");

  // Get the table body where we'll add the rows
  const tbody = dataTable.querySelector("tbody");

  // Loop through the data and create a row for each item
  data.Sheet1.forEach(item => {
    const row = document.createElement("tr");

    // Create table cells for each property in the JSON data
    const titleCell = document.createElement("td");
    titleCell.textContent = item.title;
    row.appendChild(titleCell);

    // const descriptionCell = document.createElement("td");
    // descriptionCell.textContent = item.description;
    // row.appendChild(descriptionCell);

    // const imageCell = document.createElement("td");
    // const image = document.createElement("img");
    // image.src = item.image;
    // image.alt = "Image";
    // imageCell.appendChild(image);
    // row.appendChild(imageCell);

    // const idCell = document.createElement("td");
    // idCell.textContent = item.id;
    // row.appendChild(idCell);

    const tagCell = document.createElement("td");
    tagCell.textContent = item.tag;
    row.appendChild(tagCell);

    // Add the row to the table body
    tbody.appendChild(row);
  });
}

// Call the function to populate the table
populateTable();
