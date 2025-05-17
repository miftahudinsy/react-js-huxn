import { useReducer, useState } from "react";
import { counterReducer, initialState } from "../counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputvalue] = useState(0);

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });

  const handleIncrementByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
    setInputvalue(0);
  };
  const handleDecrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: Number(inputValue) });
    setInputvalue(0);
  };

  return (
    <div>
      <h2>Coun: {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputvalue(e.target.value)}
        />
        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Subtract</button>
      </div>
    </div>
  );
};

export default Counter;
