require('dotenv').config()


console.log("BISMILALLAH");


const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/facebook', (req, res) => {
    res.send('shazaib shazi!')
})  

app.get('/instagram', (req, res) => {
    res.send('shazaib shazi!')
})

app.listen(process.env.POST,
    
    () => {
    console.log(`Example app listening on port ${port}`)
})