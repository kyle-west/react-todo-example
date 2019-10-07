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

export default function TodoList ({ items = {} }) {
  const [ todos, setTodos ] = React.useState(items);
  const { unchecked, checked } = sortChecked(todos)
  
  // use a closure to snatch the item key value
  function updateTodoItem (item) {
    return (checked) => {
      setTodos(latest => Object.assign({}, latest, {[item]: checked}))
    } 
  }
  
  function checkForSubmit (event) {
    let todo = event.target.value;
    if (todo && event.key === 'Enter') {
      setTodos(latest => Object.assign({}, latest, {[todo]: false}))
      event.target.value = '' // reset field
    }
  }

  return (
    <div className="TodoList">
      <h3>Things you need to do</h3>
      <ul>
        { unchecked.length 
           ? unchecked.map((item) => <TodoItem key={item} label={item} onClick={updateTodoItem(item)}/>)
           : <em>🚀 Looks like you are all caught up 🎉</em> }
      </ul>
      
      { checked.length > 0 && (
        <>
          <h3>Completed</h3>
          <ul>
            { checked.map((item) => <TodoItem key={item} label={item} onClick={updateTodoItem(item)} checked/>) }
          </ul>
        </>
      )}

      <label>Add an item to list below</label>
      <input onKeyPress={checkForSubmit}/>
    </div>
  )
}