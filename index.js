const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000;

app.use(cors());
app.get('/', (req, res) => {
  console.log("In console");x
  res.send('Hello slash!')
})

app.get('/chicken', (req, res) => {
  console.log("In console");
  res.send({name: "EMC 20"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})