const Course = ({course}) => {
    const totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0)
    return <>
        <Header name={course.name} />
        {course.parts.map(part => <Content part={part}/>)}
        <ExercisesByCourse totalExercises={totalExercises} />
    </>
}

const Header = ({name}) => {
    return <h2>{name}</h2>
}

const Content = ({part}) => {
    return (
        <p>{part.name}: {part.exercises}</p>
    )
}

const ExercisesByCourse = ({totalExercises}) => {
    return <p>Total of {totalExercises} exercises</p>
}

export default Course