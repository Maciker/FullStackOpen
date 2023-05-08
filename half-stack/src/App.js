const App = () => {
  const course = "Half Stack App development";
  const exercises = [
    {
      name: "Fundamentals of react",
      number: 10,
    },
    {
      name: "Ussing props to pass data",
      number: 7,
    },
    {
      name: "State of a component",
      number: 14,
    },
  ];

  const Header = (props) => {
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

  return (
    <>
      <Header course={course} />
      {exercises.map((exercise) =>
        {
          return (
            <Content
            exerciseName={exercise.name}
            exerciseNumber={exercise.number}
          />
          )
        }
      )}

    </>
  );
};

export default App;
