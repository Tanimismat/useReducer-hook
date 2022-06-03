import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  
  function increment() {
    setCount(previousCount => previousCount + 1)
  }
  
  function decrement() {
    setCount(previousCount => previousCount-1)
  }
  return (
    <>
      <button onClick={increment}>+</button>
      <span> {count} </span>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default App;
