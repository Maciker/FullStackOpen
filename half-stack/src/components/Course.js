import Header from './Header'
import Content from './Content'
const Course = ({course}) => {
    const totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0)
    return <>
        <Header name={course.name} />
        {course.parts.map(part => <Content part={part}/>)}
        <ExercisesByCourse totalExercises={totalExercises} />
    </>
}

const ExercisesByCourse = ({totalExercises}) => {
    return <p>Total of {totalExercises} exercises</p>
}

export default Course