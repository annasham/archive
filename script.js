fetch("/JSON/archive.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    // Handle the JSON data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch request
    console.error("Fetch error:", error);
  });

