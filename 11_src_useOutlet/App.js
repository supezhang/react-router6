import React from 'react'
import {NavLink,useRoutes,useInRouterContext} from 'react-router-dom'
import routes from './routes'
import './app.css'
import Header from './pages/components/Header'
export default function App() {
  
  console.log('@',useInRouterContext());
  const routeElement = useRoutes(routes)
  return (
    <div>
      <Header/>
      <div className="main">
        <ul>
          <li><NavLink className='navlink-item' to='/about'>about</NavLink></li>
          <li><NavLink className='navlink-item' end to='home'>home</NavLink></li>
        </ul>
        {/* <div> */}
          {/* Switch 匹配到对应路由就不继续匹配，Routes也是。 caseSensitive区分大小写*/}
          {/* <Routes>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/' element={<Navigate to='/about'/>}></Route>
          </Routes> */}
          {routeElement}
        {/* </div> */}
      </div>
    </div>
  )
}
