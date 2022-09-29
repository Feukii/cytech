const express = require('express')
const app = express()
const port = process.env.PORT || 4000


app.use(express.static('www'));

app.get('/health', (req, res) => {
    res.send('ok')
  })
  
app.get('/mot', (req, res) => {
    const d = new Date();
    let day = d.getDay();
    let randNb= Math.floor(Math.random() * 7)
    let word = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]
    word_guess = word[randNb]

    res.send(word_guess)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })