import React from 'react'
import {Link,Outlet} from 'react-router-dom'
export default function Message() {
  const msg =[
    {id:'001',title:'消息1',content:'锄禾日当午'},
    {id:'002',title:'消息2',content:'汗滴禾下土'},
    {id:'003',title:'消息3',content:'谁知盘中餐'},
    {id:'004',title:'消息4',content:'粒粒皆辛苦'}
  ]
  return (
    <div>
      <h3>消息</h3>
      <ul>
        {
          msg.map(msgobj=>{
            return (
              <li key={msgobj.id}>
                <Link 
                  to='detail' 
                  state={{
                    id:msgobj.id,
                    title:msgobj.title,
                    content:msgobj.content
                  }}>
                  {msgobj.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
      <Outlet />
    </div>
  )
}
