const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Welcome to our Guestbook!')
})

app.listen(port, () => {
  console.log(`Guestbook app listening on port ${port}`)
})
