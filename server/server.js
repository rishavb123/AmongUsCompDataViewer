const express = require('express')
const app = express()
const port = 4000

app.get('/data', (req, res) => {
    res.json({
        cols: ["make", "model", "price"],
        rows: [
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxter", price: 72000},
            {make: "Porsche", model: "Boxter", price: 72000},
            {make: "Porsche", model: "Boxter", price: 72000},
            {make: "Porsche", model: "Boxter", price: 72000},
            {make: "Porsche", model: "Boxter", price: 72000},
            {make: "Porsche", model: "Boxter", price: 72000},
            {make: "Porsche", model: "Boxter", price: 72000},
            {make: "Porsche", model: "Boxter", price: 72000},
            {make: "Porsche", model: "Boxter", price: 72000},
            {make: "Porsche", model: "Boxter", price: 72000},
            {make: "Porsche", model: "Boxter", price: 72000}
        ]
    });
})

app.use(express.static('../build'))

app.listen(port, () => {
    console.log(`Serving site to http://localhost:${port}`)
})