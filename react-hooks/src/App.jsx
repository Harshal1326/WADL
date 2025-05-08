import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0); // useState hook

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
      <button onClick={() => setCount(0)}>🔄 Reset</button>
    </div>
  );
}

export default App;
