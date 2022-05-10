import React from 'react'
import {useParams,useMatch} from 'react-router-dom'
export default function Detail() {
  const {id,title,content}= useParams()
  const a = useMatch('/home/message/detail/:id/:title/:content')
  console.log(a);
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
