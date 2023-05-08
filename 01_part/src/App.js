const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}! You are {props.age} years old.
      </p>
    </div>
  );
};

const App = () => {
  const iker = {
    name: "Iker",
    age: 37,
  };

  return (
    <>
      <h1>Greetings!</h1>
      <Hello name={iker.name} age={iker.age} />
      <Hello name="Unax" age='2' />
    </>
  );
};

export default App;
