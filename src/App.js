import React from 'react';

import { TodoList } from './components'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Super Cool Todo App</h1>
      <TodoList 
        items={{
          // [label]: isChecked 
          "Test Todo feature 1": true,
          "Test Todo feature 2": false,
          "Test Todo feature 3": true,
          "Test Todo feature 4": false,
          "Test Todo feature 5": false,
          "Test Todo feature 6": false,
        }}
      />
    </div>
  );
}

export default App;
