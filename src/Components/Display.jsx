import React from 'react'
import style from './Display.module.css'
export default function Display({displayValue}) {
  return (
    <div>
      <input type="text" className={style.display} value={displayValue} readOnly  placeholder='Enter the Value'/>
    </div>
  )
}
