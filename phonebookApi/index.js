const express = require('express')
const mongoose = require('mongoose').default
require('dotenv').config()
const morgan = require('morgan')
const cors = require('cors')
const {response} = require("express");
const app = express()

mongoose.connect(process.env.MONGODB_URI)
    .then((result) => console.log('Connected to DB'))
    .catch((error) => console.log(error))

const usersSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: String
})

const User = mongoose.model('User', usersSchema)

app.use(cors())
app.use(express.json())
morgan.token('body', (request, response) => JSON.stringify(request.body))
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'));
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

const baseApiUrl = '/api/users'

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

/*app.get('/add-persons', (request, response) => {
    const data = [
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

    data.map( person => {
        personToAdd = new User(person)
        personToAdd.save().then( (result) => {
            response.send(result)
        }).catch( (error) => console.log(error))
    })
})*/
app.get(baseApiUrl, (request, response) => {
    User.find({}).then(users => {
        response.json(users)
    })
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

const requestPersonHandler = (request, response, value) => {
    if(request.body[value]) {
        return request.body[value]
    } else {
        return response.status(400).json({
            error: `${value} missing`
        })
    }
}

const generateId = () => {
    return Math.max(...persons.map(person => person.id)) + 1
}

app.post(baseApiUrl, (request, response) => {
    const person =     {
        id: generateId(),
        name: requestPersonHandler(request, response, 'name'),
        number: requestPersonHandler(request, response, 'number')
    }

    persons = persons.concat(person)

    response.json(person)
})

app.use(unknownEndpoint)

const PORT = 6001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})