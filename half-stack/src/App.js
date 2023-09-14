const App = () => {
  const course = [{
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
  }]

  /*const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  const Content = (props) => {
    return (
      <div>
        <p>
          {props.exerciseName} {props.exerciseNumber}
        </p>
      </div>
    );
  };

  const totalExercises = exercises.reduce((total, exercise) => total + exercise.number, 0)

  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.total}</p>
      </div>
    );
  };*/

  
  return (
      <div>Exercises 2.1 --2.5</div>
/*    <>
      <Header course={course} />
      {exercises.map((exercise) => {
        return (
          <Content
            exerciseName={exercise.name}
            exerciseNumber={exercise.number}
          />
        );
      })}
      <Total total={totalExercises} />
    </>*/
  );
};

export default App;
