import React from 'react'
import {NavLink,Outlet,useNavigationType,useOutlet} from 'react-router-dom'
import './index.css'
export default function Home() {
  console.log('home-useOutlet',useOutlet())
  return (
    <>
      <div className='home-wrap'>
        <h2>Home</h2>      
        <div className="home-tabs">
          <ul>
            <li><NavLink to="news">news</NavLink></li>
            <li><NavLink to='message'>message</NavLink></li>
          </ul>
        </div>
        <div className="home-tabs-body">
          <Outlet />
        </div>
      </div>
    </>
  )
}
