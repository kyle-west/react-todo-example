import React from 'react'
import './styles.css'

import TodoItem from '../TodoItem'

export default function TodoList ({}) {
  return (
    <ul className="TodoList">
      <TodoItem label="Test Todo feature 1" checked />
      <TodoItem label="Test Todo feature 2" />
      <TodoItem label="Test Todo feature 3" checked />
      <TodoItem label="Test Todo feature 4" />
      <TodoItem label="Test Todo feature 5" />
      <TodoItem label="Test Todo feature 6" />
    </ul>
  )
}