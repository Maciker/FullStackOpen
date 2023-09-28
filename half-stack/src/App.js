import Course from './components/Course'
import {useState, useEffect} from "react";
import courseService from './services/courses'

const App = () => {
  const [courses, setCourses] = useState([])
  const [newCourse, setNewCourse] = useState('a new course')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
      courseService.getAllCourses().then(initialCourses => setCourses(initialCourses))}, [])

  const coursesToShow = showAll
      ? courses
      : courses.filter( course => course.parts.reduce((total, part) => total + part.exercises, 0) > 0)

  const addCourse = (event) => {
    event.preventDefault()
    const courseObject = {
      name: newCourse,
      finished: false,
      parts: []
    }

    courseService.createCourse(courseObject).then(response => {
        setCourses(courses.concat(response.data))
        setNewCourse('')
    })
  }

  const handleCourseChange = (event) => {
    console.log(event.target.value)
    setNewCourse(event.target.value)
  }

  const toggleFinished = (id) => {
      const singleCourse = courses.find(course => course.id === id )
      const changedCourse = { ...singleCourse, finished: !singleCourse.finished }

      courseService.updateCourse(id, changedCourse).then(response => {
          setCourses(courses.map(course => course.id !== id ? course :response.data))
      })
  }

  return (
      <>
        <div>Exercises 2.1 --2.5 and 2B part: Forms</div>
        <div>
          <button onClick={() => setShowAll(!showAll)}>
            Show {showAll ? 'Courses with exercises' : 'All courses'}
          </button>
        </div>
        <div>
          {coursesToShow.map(course => <Course course={course} key={course.id} toggleFinished={() => toggleFinished(course.id)}/>)}
        </div>
        <form onSubmit={addCourse}>
          <input value={newCourse} onChange={handleCourseChange}/>
          <button type="submit">SAVE COURSE</button>
        </form>

      </>
  );
};

export default App;
