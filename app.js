const express = require('express')
const robot = require('robotjs')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello Dora!')
// })
app.post('/api/space',(req, res) => {
  robot.keyTap('space')
  res.send('成功')
})
app.use(express.static('public'));

app.listen(port, () => {
  console.log("Run");
})