import React, { useState } from 'react';
import './App.css';  // component 中把 CSS 引入，webpack 最後才會打包 CSS 
import Counter from './components/Counter';
import CounterHook from './components/CounterHook';

const App = () => {
  const [ count, setCount ] = useState(0);
  return (
    <div className="App" style={{fontSize: '25px',marginTop: '20px'}}>
      This is my react app!
      <Counter count={count} setCount={setCount} title="Counter App"/>
      <CounterHook count={count} setCount={setCount} title="Counter App"/>
    </div>
  );
}

export default App;
