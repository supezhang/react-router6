import React from 'react'
import {useSearchParams,useLocation} from 'react-router-dom'
export default function Detail() {
 const [search,setSearch] = useSearchParams();
 const id = search.get("id")
 const title = search.get("title")
 const content = search.get("content")
 const x = useLocation()
 console.log(x);
  return (
    <div>
      <h3>详情</h3>
      <button onClick={()=>setSearch('id=22&title=哈哈&content=喜喜')}>改参数</button>
      <ul>
        <li>编号：{id}</li>
        <li>标题：{title}</li>
        <li>消息：{content}</li>
      </ul>
    </div>
  )
}
