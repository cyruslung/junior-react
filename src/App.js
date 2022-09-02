import React, { useState } from 'react';
import  { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';  // component 中把 CSS 引入，webpack 最後才會打包 CSS 
import Counter from './components/Counter';
import CounterHook from './components/CounterHook';
import StyledElement from './components/StyledElement';
import Form from './components/Form'

const App = () => {
  const [ count, setCount ] = useState(0);
  const [formDone, setFormDone] = useState(false);

  return (
    <Router>
      <div className="App" style={{fontSize: '25px',marginTop: '20px'}}>
        This is my react app!
        <hr/>
        <Counter count={count} setCount={setCount} title="Counter App"/>
        <CounterHook count={count} setCount={setCount} title="Counter App"/>
        <StyledElement />
        <hr/>
        <Form setFormDone={setFormDone}/>
        {formDone ? <p>表單填答完成</p> : <p>請填表單</p>}

        <hr/>
        <p>react router example</p>
        <ul>
          <li><Link to="counter">Counter</Link></li>
          <li><Link to="form">Form</Link></li>
        </ul>
        <Routes>
          <Route path='/counter' components={() => <Counter count={count} setCount={setCount}/>}/>
          <Route path='/form' components={() => <Form formDone={formDone} setFormDone={setFormDone}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
