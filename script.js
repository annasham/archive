fetch('./JSON/archive.json')
  .then((response)=>response.json())
  .then((data)=>console.log(data));

