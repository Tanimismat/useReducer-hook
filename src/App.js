import { useReducer, useState } from 'react';


function reducer(state, action) {
  // return {count: state.count + 1}
  switch (action.type) {
    case "increment":
      // return (count: state.count+1);
      // return {
      //   ...state,
      //   [action.name]: state[action.name] + 1,
      // };
    case "decrement":
      // return {
      //   ...state,
      //   [action.name]: state[action.name] - 1,
      // };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count:0})

  // const [count, setCount] = useState(0)
  
  function increment() {
    // setCount(previousCount => previousCount + 1)
    // dispatch()
    dispatch({type:'increment'})
  }
  
  function decrement() {
    // setCount(previousCount => previousCount-1)
    dispatch({type:'decrement'})
  }
  return (
    <>
      <button onClick={increment}>+</button>
      {/* <span> {count} </span> */}
      <span> {state.count} </span>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default App;
