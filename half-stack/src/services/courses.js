import axios from "axios";
const baseUrl = 'http://localhost:3001/api/courses'

const getAllCourses = () => {
    const coursesRequest= axios.get(baseUrl)
    return coursesRequest.then(response => response.data)
}

const createCourse = newCourse => {
    const createCourseRequest = axios.post(baseUrl, newCourse)
    return createCourseRequest.then(response => response.data)
}

const updateCourse = (id, updatedCourse) => {
    const updateCourseRequest = axios.put(`${baseUrl}/${id}`, updatedCourse)
    return updateCourseRequest.then(response => response.data)
}

export default {
    getAllCourses,
    createCourse,
    updateCourse
}