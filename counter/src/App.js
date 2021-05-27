import { useState } from 'react';

import './App.css';
import styles from './Vars.module.css';

console.log(styles);

let componentVariable = '--component-variable';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');

  const handleClick = () => {
    if (color === 'green') setColor('red');
    else setColor('green');
    // debugger;
    setCount(count + 1);
  };

  return (
    <div className="App" style={{ [componentVariable]: color }}>
      <button onClick={handleClick}>#{count}</button>
    </div>
  );
}

export default App;
