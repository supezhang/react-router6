import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Header() {
  const navigate = useNavigate();
  
  function back(){
    navigate(-1)
  }
  function forward(){
    navigate(1)
  }
  return (
    <div>
      <h2>header</h2>
      <button  onClick={back}>ει</button>
      <button onClick={forward}>εθΏ</button>
    </div>
  )
}
