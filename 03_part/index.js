const express = require('express')
const app = express()

app.use(express.json())

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

let courses = [
    {
        name: 'Half Stack application development',
        id: 1,
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    },
    {
        name: 'Node.js',
        id: 2,
        parts: [
            {
                name: 'Routing',
                exercises: 3,
                id: 1
            },
            {
                name: 'Middlewares',
                exercises: 7,
                id: 2
            }
        ]
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/courses', (resquest, response) => {
    response.json(courses)
})

app.get('/api/courses/:id', (request, response) => {
    const id = Number(request.params.id)
    const course = courses.find( note => note.id === id)
    if (course) {
        response.json(course)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/courses/:id', (request, response) => {
    const id = Number(request.params.id)
    courses = courses.filter(course => course.id !== id)

    response.status(204).end()
})

const requestCourseHandler = (request, response, value) => {
    if(request.body[value]) {
        return request.body[value]
    } else {
        return response.status(400).json({
            error: `${value} missing`
        })
    }
}

const generateId = () => {
    return Math.max(...courses.map(person => person.id)) + 1
}

app.post('/api/courses', (request, response) => {
    const course = {
        id: generateId(),
        name: requestCourseHandler(request, response, 'name'),
        parts: []
    }

    courses = courses.concat(course)

    response.json(course)
})

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})