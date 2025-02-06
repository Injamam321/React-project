// import React, { useState } from 'react';
// import'./App.css'

// function Counter() {
//     const [count, setCount] = useState(100); //Hook useState

//     // function define 
//     const increaseCount = () => {
//         setCount(count + 1);
//     };

//     const decreaseCount = () => {
//         setCount(count - 1);
//     };

//     return (
//         <div>
//             <h1><p>Count: {count}</p></h1>
//             {/* calling function on button*/}
//             <button onClick={increaseCount}>Increase</button>
//             <button onClick={decreaseCount}>Decrease</button>
//         </div>
//     );
// }

// export default Counter;


import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [alldata, setAlldata] = useState([]); // constant -> const 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json()) 
      .then(data => setAlldata(data))
      .catch(err => console.error('Error fetching data:', err)); // Error handling 
  }, []);

  return (
    <div>
      <h1>Data: {alldata.length}</h1>
      {
        alldata.map(singleData => <p> {singleData.phone}</p>)
      }
    </div>
  );
}

export default App;


