const express = require('express')
const app = express()

app.use(express.json())

const baseApiUrl = '/api/persons'

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send(`<h1> The PhoneBook Api </h1>`)
})

app.get(baseApiUrl, (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    response.send(`<h3> The phone Book has info for ${persons.length} people`)
})

app.get(baseApiUrl + '/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete(baseApiUrl + '/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter( person => person.id !== id)

    response.status(204).end()
})

app.post(baseApiUrl, (request, response) => {
    const id = Math.max(...persons.map(person => person.id)) + 1

    const person = request.body
    person.id = id

    respon.json(person)
})

const PORT = 6001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})