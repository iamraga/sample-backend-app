const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log("In console");
  res.send('Hello slash!')
})

app.get('/chicken', (req, res) => {
  console.log("In console");
  res.send('Hello!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})