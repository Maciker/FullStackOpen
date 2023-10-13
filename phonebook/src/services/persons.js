import axios from "axios";

const baseUrl = 'http://localhost:6001/api/persons'

const getAllPersons = () => {
    const personsRequest = axios.get(baseUrl)
    return personsRequest.then(response => response.data)
}

const createPerson = newPerson => {
    const createPersonRequest = axios.post(baseUrl, newPerson)
    return createPersonRequest.then(response => response.data)
}

const updatePerson = (id, updatedPerson) => {
    const updatePersonRequest = axios.put(`${baseUrl}/${id}`, updatedPerson)
    return  updatePersonRequest.then(response => response.data)
}

const deletePerson = (id ) => {
    const deletePersonRequest = axios.delete(`${baseUrl}/${id}`)
    return deletePersonRequest.then(response => response.data)
}
export default {
    getAllPersons,
    createPerson,
    updatePerson,
    deletePerson
}