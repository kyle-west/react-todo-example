import React from 'react'
import './styles.css'

export default function TodoItem({ label, checked }) {



  return (
    <li 
      className="TodoItem" 
      
      // reflect to an attribute in the DOM - for styling
      data-checked={checked ? '' : undefined}
    >
      <input type="checkbox" checked={!!checked} />
      {label}
    </li>
  )
}