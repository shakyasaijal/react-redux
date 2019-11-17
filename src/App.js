import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
        Hello World
        Counter {counter}

        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

        {isLogged ? <h3>Is Logged In</h3> : <h3>Please Login</h3>}
    </div>
  );
}

export default App;
