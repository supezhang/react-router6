import React,{useState} from 'react'
import {Navigate} from 'react-router-dom'
export default function Home() {
  const [sum,setSum] = useState(1)
  return (
    <div>
      <h2>Home</h2>      
      {/* Navigate只要渲染就跳转  replace是否有历史记录，默认为false,*/}
      {
        sum===2? <Navigate to='/about' replace={false}></Navigate>:<h4>当前值：{sum}</h4> 
      }
      <input type="button" value="加1" onClick={()=>setSum(2)} />
    </div>
  )
}
