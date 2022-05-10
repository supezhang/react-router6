import React from 'react'
import {Link,Outlet,useNavigate,useNavigationType,useMatch} from 'react-router-dom'
export default function Message() {
  const msg =[
    {id:'001',title:'消息1',content:'锄禾日当午'},
    {id:'002',title:'消息2',content:'汗滴禾下土'},
    {id:'003',title:'消息3',content:'谁知盘中餐'},
    {id:'004',title:'消息4',content:'粒粒皆辛苦'}
  ]
  const navigate = useNavigate();

  function showDetail(m){
    navigate('detail',{
      replace:false,
      state:{
        id:m.id,
        title:m.title,
        content:m.content
      }
    })
  }
  console.log('useNavigationType',useNavigationType())
  const match = useMatch('/login/:213')
  console.log('useMatch',match)
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
                <button onClick={()=>showDetail(msgobj)}>查看详情</button>
              </li>
            )
          })
        }
      </ul>
      <Outlet />
    </div>
  )
}
