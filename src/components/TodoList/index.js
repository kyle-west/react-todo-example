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

  return (
    <div className="TodoList">
      <h2>Things you need to stress over</h2>
      <ul>
        {unchecked.map((item) => <TodoItem key={item} label={item} onClick={updateTodoItem(item)}/>)}
      </ul>
      <h2>Done</h2>
      <ul>
        {checked.map((item) => <TodoItem key={item} label={item} checked onClick={updateTodoItem(item)}/>)}
      </ul>
    </div>
  )
}