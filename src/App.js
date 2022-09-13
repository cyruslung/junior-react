import React, { useState } from 'react';
import  { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';  // component 中把 CSS 引入，webpack 最後才會打包 CSS 
import Counter from './components/Counter';
import CounterHook from './components/CounterHook';
import StyledElement from './components/StyledElement';
import Form from './components/Form';

const App = () => {
  const [ count, setCount ] = useState(0);
  const [formDone, setFormDone] = useState(false);

  return (
      <Router>
        <div className="App" style={{fontSize: '25px',marginTop: '20px'}}>
          <h2>Counter</h2>
          <Counter count={count} setCount={setCount} title="Counter App"/>
          <hr/>

          <h2>CounterHook</h2>
          <CounterHook count={count} setCount={setCount} title="Counter App"/>
          <hr/>

          <h2>StyledElement</h2>
          <StyledElement />
          <hr/>

          <h2>Form</h2>
          <Form setFormDone={setFormDone}/>
          {formDone ? <p>表單填答完成</p> : <p>請填表單</p>}
          <hr/>

          <h2>Router</h2>
          <ul>
            <li><Link to="counter">Counter</Link></li>
            <li><Link to="form">Form</Link></li>
          </ul>
          <Routes>
            <Route path='/counter' components={() => <Counter count={count} setCount={setCount}/>}/>
            <Route path='/form' components={() => <Form formDone={formDone} setFormDone={setFormDone}/>}/>
          </Routes>
          <hr/>
        </div>
      </Router>
  );
}

export default App;
