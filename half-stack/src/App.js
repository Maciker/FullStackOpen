import Course from './components/Course'
import {useState} from "react";
const App = () => {
  const [courses, setCourses] = useState([{
    id: 1,
    name: 'Half Stack application development',
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
  }])
  const [newCourse, setNewCourse] = useState('a new course')
  const [showAll, setShowAll] = useState(true)

  const coursesToShow = showAll
      ? courses
      : courses.filter( course => course.parts.reduce((total, part) => total + part.exercises, 0) > 0)

  const addCourse = (event) => {
    event.preventDefault()
    const courseObject = {
      id: courses.length + 1,
      name: newCourse,
      parts: []
    }

    setCourses(courses.concat(courseObject))
    setNewCourse('')
  }

  const handleCourseChange = (event) => {
    console.log(event.target.value)
    setNewCourse(event.target.value)
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
          {coursesToShow.map(course => <Course course={course} key={course.id}/>)}
        </div>
        <form onSubmit={addCourse}>
          <input value={newCourse} onChange={handleCourseChange}/>
          <button type="submit">SAVE COURSE</button>
        </form>

      </>
  );
};

export default App;
