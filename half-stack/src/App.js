const App = () => {
  const course = "Half Stack App development";
  const part1 = "Fundamentals of react";
  const exercises1 = 10;
  const part2 = "Ussing props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  );
};

export default App;
