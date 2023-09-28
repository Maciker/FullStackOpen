import axios from "axios";
const baseUrl = 'http://localhost:3001/courses'

const getAllCourses = () => {
    const coursesRequest= axios.get(baseUrl)
    return coursesRequest.then(response => response.data)
}

const createCourse = newCourse => {
    const createCourseRequest = axios.post(baseUrl, newCourse)
    return createCourseRequest.then(response => response.data)
}

const updateCourse = (id, updatedCourse) => {
    return axios.put(`${baseUrl}/${id}`, updatedCourse)
}

export default {
    getAllCourses: getAllCourses,
    createCourse: createCourse,
    updateCourse: updateCourse
}