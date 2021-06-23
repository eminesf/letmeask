import { useState } from 'react';


export const Button = () => {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    // setCounter = counter + 1;
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <button onClick={increment}>{counter}</button>
  )
}

