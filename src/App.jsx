import React, { useState } from 'react';
import'./App.css'

function Counter() {
    const [count, setCount] = useState(0); //Hook useState

    // function define 
    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1><p>Count: {count}</p></h1>
            {/* calling function on button*/}
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
        </div>
    );
}

export default Counter;