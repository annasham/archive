// var express = require('express');
// var cors = require('cors');
// var app = express();

// app.use(cors({origin: true, credentials: true}));
  
// function getData(){
//   fetch('./JSON/archive.json')           //api for the get request
//   .then(response => response.json())
//   .then(data => console.log(data));
// }

// getData();

async function getData(){
  const response = await fetch('./JSON/archive.json');
  const data = await response.json();

  console.log(data.Sheet1[0].tag);
}

getData();