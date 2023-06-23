const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'e85995ed99e648e68b11719283276ba3',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

// console.log(__dirname, '../public/index.html')

app.get('/', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
    
})

app.get('./castle', (req,res) => {
    res.status(200).send('<h1>Welcome to my castle</h1>')
})

app.get('/profile', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/profile.html'))
    try {
        nonExistentFunction();
    } catch (error) {
        rollbar.error(error);
    };

})






app.listen(4000, console.log('Server running on 4000!'))

