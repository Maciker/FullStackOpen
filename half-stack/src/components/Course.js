import Header from './Header'
import Content from './Content'
import ExercisesByCourse from './ExercisesByCourse'
import CourseCompletion from "./CourseCompletion";
const Course = ({course, toggleFinished}) => {
    const totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0)
    const labelFinished = course.finished ? 'Course Finished' : 'Course not completed'
    const courseFinished = course.finished ? 'Not completed' : 'Completed'
    return <>
        <Header name={course.name} />
        {course.parts.map(part => <Content part={part} key={part.id}/>)}
        <ExercisesByCourse totalExercises={totalExercises} />
        <CourseCompletion labelFinished={labelFinished} toggleFinished={toggleFinished} courseFinished={courseFinished} />
    </>
}
export default Course