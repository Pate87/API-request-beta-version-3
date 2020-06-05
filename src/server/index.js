const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')

const app = express()

// to use url encoded values
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// Corse for cross origin allowance
const cors = require('cors')
// to use json
app.use(cors())
// to prevent Access-Control-Allow-Origin error
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

// calling API URL
const aylien = require('aylien_textapi')

// save API key & ID
// const dotenv = requrire('dotenv')
const dotenv = require('dotenv').config()
// dotenv.config()

// set aylien API credentias
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Setup Server
const port = 3000;

// Spin up the server
const server = app.listen(port, listening);

// Function for the Server to run
function listening(){
    console.log(`Server runs on localhost: ${port}`);
}

// // designates what port the app will listen to for incoming requests
// app.listen(8090, function () {
//     console.log('Example app listening on port 8090!')
// })

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

