import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    console.log("Component mounted");
    setCounter(2); 
  }, [counter]); 

  return (
    <>
      <h1>Hello world: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Tambah</button>
    </>
  );
}

export default App;
