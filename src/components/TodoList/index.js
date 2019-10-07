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
      <h3>Things you need to stress over</h3>
      <ul>
        {unchecked.length 
          ? unchecked.map((item) => <TodoItem key={item} label={item} onClick={updateTodoItem(item)}/>)
          : <em>🚀 Looks like you are all caught up 🎉</em> }
      </ul>
      <h3>Done</h3>
      <ul>
        {checked.map((item) => <TodoItem key={item} label={item} checked onClick={updateTodoItem(item)}/>)}
      </ul>
    </div>
  )
}