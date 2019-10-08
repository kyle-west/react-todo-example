import React from 'react'
import './styles.css'

import TodoItem from '../TodoItem'

function sortChecked(items) {
  const unchecked = []
  const checked = []

  // [label]: isChecked 
  Object.keys(items).forEach(item => {
    items[item] ? checked.push(item) : unchecked.push(item)
  }) 

  return { unchecked, checked }
}

export default function TodoList ({ items = { /* [label]: isChecked */ } }) {
  const [ todos, setTodos ] = React.useState(items);
  const { unchecked, checked } = sortChecked(todos)
  
  // TODO: add handler to update the checked state for an individual <TodoItem />
  // HINT: closures are your friend here.
  
  // Handle a new entry from the user
  function checkForSubmit (event) {
    let todo = event.target.value;
    if (todo && event.key === 'Enter') {
      // TODO: add an item to the `todos` state object
      //   don't forget to reset field
    }
  }

  return (
    <div className="TodoList">
      <h3>Things you need to do</h3>
      <ul>
        {/* TODO: For each unchecked item render a <TodoItem /> */}
        {/* STRETCH: handle when no items left unchecked */}
      </ul>
      
      <h3>Completed</h3>
      <ul>
        {/* TODO: For each checked item render a <TodoItem /> */}
        {/* STRETCH: handle when no items have been checked */}
      </ul>

      <label>Add an item to list below</label>
      <input onKeyPress={checkForSubmit}/>
    </div>
  )
}