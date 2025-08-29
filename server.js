const express = require('express');
const bodyparser = require("body-parser");
const cors = require("cors");


const app = express();
app.use(bodyparser.json());

app.use(cors()); 

app.get("/", (req, res) => {
  res.send("Backend is running. Use /bfhl");
});

app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1, message: "Backend is running! Use POST /bfhl" });
});

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

    let allChars = alphabets.join("").split("").reverse();

  let concat_string = allChars
    .map((ch, idx) =>
      idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
    )
    .join("");


      return {
    is_success: true,
    ...user,
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,

    sum: sum.toString(),
    concat_string
  };
}


app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ is_success: false, message: "Invalid input" });
  }

  const result = processData(data);
  res.json(result);
});

const PORT = 3000;
app.listen(PORT, () => {

  console.log(`Server running on http://localhost:${3000}`);
});