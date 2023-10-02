import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = () => {
    const personsRequest = axios.get(baseUrl)
    return personsRequest.then(response => response.data)
}

export default {
    getAllPersons
}