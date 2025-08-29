const express = require('express');
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());


const user = {
    user_id: "shikhar_burman_123456",
    email: "sb@gmail.com",
    roll_number: "ABCD1234"
};

function processData(data) {
    let even_numbers = [];
  let odd_numbers = [];
  let alphabets = [];
  let special_characters = [];
  let sum = 0;

      for (let item of data) {
    if (!isNaN(item)) {
        
      let num = parseInt(item, 10);
      if (num % 2 === 0) {
        even_numbers.push(item);
      } else {
        odd_numbers.push(item);
      }
      
      sum = sum + num;

    } else if (/^[a-zA-Z]+$/.test(item)) {
      
      alphabets.push(item.toUpperCase());
    } else {
      
      special_characters.push(item);
    }
  }
}