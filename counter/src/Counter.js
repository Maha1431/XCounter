import React, { useState } from 'react'


function Counter()
{
    const [count, setCount] = useState(0);


    const handleIncrement =() => {
        setCount(count => count +1);
    }
    const handleDncrement =() => {
        setCount(count => count - 1);
    }
   return(
    <div>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDncrement}>Decrement</button>
    </div>
   );
}
export default Counter;