import React from 'react'
import './styles.css'

export default function TodoItem({ label, checked, onClick }) {
  return (
    <li 
      className="TodoItem" 
      
      // reflect to an attribute in the DOM - for styling
      data-checked={checked ? '' : undefined}
    >
      <input id={label} type="checkbox" checked={!!checked} onChange={() => onClick(!checked)}/>
      <label htmlFor={label}>
        {label}
      </label>
    </li>
  )
}