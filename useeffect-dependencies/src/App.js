import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=10'
      );
      const data = (await response.json()).results;

      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>

      {data.map((item) => (
        <p key={item.name}>{item.name}</p>
      ))}
    </div>
  );
}

export default App;
