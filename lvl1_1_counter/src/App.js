import { useState } from 'react'
import './App.css';

function App() {

  let [count, setCount] = useState(0);

  return (

    <div className="App">
      <section className='counter_display'>
        <h1>Counter {count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button><a href="./App.js">Reset</a></button>
      </section >
    </div>
  );
}

export default App;
