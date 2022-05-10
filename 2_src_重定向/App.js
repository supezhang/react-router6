import React from 'react'
import {NavLink,Routes,Route,Navigate} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import './app.css'
export default function App() {
  return (
    <div>
      <h2>router demo</h2>
      <ul>
        <li><NavLink className="navlink-item" to='/about'>about</NavLink></li>
        <li><NavLink className="navlink-item" to='home'>home</NavLink></li>
      </ul>
      <div>
        {/* Switch 匹配到对应路由就不继续匹配，Routes也是。 caseSensitive区分大小写*/}
        <Routes>
          <Route path='/ABOUT' caseSensitive element={<About/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/' element={<Navigate to='/about'></Navigate>}></Route>
        </Routes>
      </div>

    </div>
  )
}
