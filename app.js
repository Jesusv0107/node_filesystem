const express = require('express');
require('dotenv').config();
const fs = require ('fs') .promises;

const app = express ();
const PORT = process.env.PORT || 3000;


app.get('/', async (req, res)=> {

    try{
const fileName = "example.txt";
const content = "This is just example text that was written to file";


await fs.writeFile(fileName, content, 'utf-8');

    }catch(error){
console.error('Something went wrong:',error);
res.status(500).send('Internet Server Error');
    }


});


app.listen(8000, () => {
    console.log(`Connected on port ${PORT}`);
});