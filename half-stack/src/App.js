const App = () => {
  const course = "Half Stack App development";
  const exercise1 = {
    name: "Fundamentals of react",
    number: 10
  }
  const exercise2 = {
    name: "Ussing props to pass data",
    number: 7
  }
  const exercise3 = {
    name: "Ussing props to pass data",
    number: 14
  }

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
      <Content exerciseName={exercise1.name} exerciseNumber={exercise1.number} />
      <Content exerciseName={exercise2.name} exerciseNumber={exercise2.number} />
      <Content exerciseName={exercise3.name} exerciseNumber={exercise3.number} />
      <p>Number of exercises {exercise1.number + exercise2.number + exercise3.number}</p>
    </>
  );
};

export default App;
