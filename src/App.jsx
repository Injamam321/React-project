import { useEffect, useState } from 'react';
import './App.css';
import Singleuserdata from './Components/Singleuserdata/Singleuserdata';

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
        alldata.map(singleData => <Singleuserdata

           key={singleData.id}
          singleData = {singleData}
          
        > </Singleuserdata>)
      }
    </div>
  );
}

export default App;


