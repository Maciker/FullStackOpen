import axios from "axios";
const baseUrl = 'http://localhost:3001/courses'

const getAllCourses = () => {
    return axios.get(baseUrl)
}

const createCourse = newCourse => {
    return axios.post(baseUrl, newCourse)
}

const updateCourse = (id, updatedCourse) => {
    return axios.put(`${baseUrl}/${id}`, updatedCourse)
}

export default {
    getAllCourses: getAllCourses,
    createCourse: createCourse,
    updateCourse: updateCourse
}