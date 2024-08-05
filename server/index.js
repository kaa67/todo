const express = require('express')
const app = express()


const cors = require('cors')
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));



const port = 8080

const todos = [
  '111',
  '222',
  '333',
];

app.get('/', (req, res) => {
  res.send({ todos })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})