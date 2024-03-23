import React, { useState } from 'react'
import style from "./App.module.css"
import Display from './Components/Display'
import ButtonContainer from './Components/ButtonContainer'
export default function App() {
  const [calVal,setCalVal]=useState("")
  const onButtonClick=(buttonText)=>{
    if(buttonText==="C"){
      setCalVal("")
    }
    else if(buttonText==="="){
      const result=eval(calVal)
      setCalVal(result)
    }
    else{
      const newDisplayValue=calVal+buttonText
      setCalVal(newDisplayValue)
    }
  }
  return (
   <center>
     <div className={style.calculator}>
      <Display displayValue={calVal}/>
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
   </center>
  )
}
