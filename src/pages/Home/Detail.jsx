import React from 'react'
import {useLocation,useResolvedPath} from 'react-router-dom'
export default function Detail() {
  // const {state} = useLocation()
  // const id = state.id
  // const title = state.title
  // const content = state.content

  // 解构对象连续写法
 const {state:{id,title,content}} = useLocation()

 console.log(useResolvedPath('/user?id=001&name=tom#abc'))
  return (
    <div>
      <h3>详情</h3>
      <ul>
        <li>编号：{id}</li>
        <li>标题：{title}</li>
        <li>消息：{content}</li>
      </ul>
    </div>
  )
}
