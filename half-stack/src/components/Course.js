import Header from './Header'
import Content from './Content'
import ExercisesByCourse from './ExercisesByCourse'
const Course = ({course}) => {
    const totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0)
    return <>
        <Header name={course.name} />
        {course.parts.map(part => <Content part={part} key={part.id}/>)}
        <ExercisesByCourse totalExercises={totalExercises} />
        <p>{course.finished ? 'Course Finished' : 'Course Not Finished'}</p>
    </>
}
export default Course