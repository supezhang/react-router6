import React from 'react'
import {NavLink,Routes,Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import './app.css'
export default function App() {
  function computedClassName({isActive}){
    return isActive?'navlink-item aguigu':'navlink-item'
  }
  return (
    <div>
      <h2>router demo</h2>
      <ul>
        <li><NavLink className={({isActive})=>isActive?'navlink-item aguigu':'navlink-item'} to='/about'>about</NavLink></li>
        <li><NavLink className={computedClassName} to='home'>home</NavLink></li>
      </ul>
      <div>
        {/* Switch 匹配到对应路由就不继续匹配，Routes也是。 caseSensitive区分大小写*/}
        <Routes>
          {/* <Route path='/ABOUT' caseSensitive element={<About/>}></Route> */}
          <Route path='/ABOUT' element={<About/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </div>

    </div>
  )
}
