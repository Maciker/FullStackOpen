import Header from './Header'
import Content from './Content'
import ExercisesByCourse from './ExercisesByCourse'
const Course = ({course, toggleFinished}) => {
    const totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0)
    const labelFinished = course.finished ? 'Course Finished' : 'Course not completed'
    const courseFinished = course.finished ? 'Not completed' : 'Completed'
    return <>
        <Header name={course.name} />
        {course.parts.map(part => <Content part={part} key={part.id}/>)}
        <ExercisesByCourse totalExercises={totalExercises} />
        <div>
            <h4>{labelFinished}</h4>
            <button onClick={toggleFinished}>{courseFinished}</button>
        </div>
    </>
}
export default Course