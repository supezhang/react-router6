import React from 'react'
import {NavLink,useRoutes} from 'react-router-dom'
import routes from './routes'
import './app.css'
export default function App() {
  // 路由表
  // const routeElement = useRoutes([
  //   {
  //     path:'/about',
  //     element:<About/>
  //   },
  //   {
  //     path:'/home',
  //     element:<Home/>
  //   },
  //   {
  //     path:'/',
  //     element:<Navigate to='/about'/>
  //   },
  // ])
  const routeElement = useRoutes(routes)
  return (
    <div>
      <h2>router demo</h2>
      <ul>
        <li><NavLink className='navlink-item' to='/about'>about</NavLink></li>
        <li><NavLink className='navlink-item' to='home'>home</NavLink></li>
      </ul>
      <div>
        {/* Switch 匹配到对应路由就不继续匹配，Routes也是。 caseSensitive区分大小写*/}
        {/* <Routes>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/' element={<Navigate to='/about'/>}></Route>
        </Routes> */}
        {routeElement}
      </div>
    </div>
  )
}
