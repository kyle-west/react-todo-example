import React from 'react'
import './styles.css'

import TodoItem from '../TodoItem'

export default function TodoList ({}) {
  return (
    <ul className="TodoList">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  )
}