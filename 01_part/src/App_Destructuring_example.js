const Hello = ({ name, age }) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age;
  };
  return (
    <div>
      <p>
        Hello {name}! You are {age} years old.
      </p>
      <p>So you probably born in {bornYear()}</p>
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
      <Hello name="Unax" age="2" />
    </>
  );
};

export default App;
