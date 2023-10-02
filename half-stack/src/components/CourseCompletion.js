import './CourseCompletion.css'
const CourseCompletion = ({labelFinished, toggleFinished, courseFinished}) => {
    return (
        <div>
            <h4>{labelFinished}</h4>
            <button onClick={toggleFinished}>{courseFinished}</button>
        </div>
    )
}

export default CourseCompletion