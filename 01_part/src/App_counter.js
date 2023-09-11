import { useState } from "react";

const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

const Button = ( {action, text }) => {
  return <button onClick={action}>{text}</button>;
};

const App = (props) => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => {
    setCounter(counter + 1);
  };

  const setToZero = () => {
    setCounter(0);
  };

  return (
    <>
      <Display counter={counter} />
      <Button action={increaseByOne} text="PLUS" />
      <Button action={setToZero} text="ZERO" />
    </>
  );
};

export default App;
