import React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import Demo from './pages/Demo'

// ReactDOM.render(
//   <BrowserRouter><App/></BrowserRouter>,
//   document.getElementById("root")
// )
createRoot(document.getElementById('root')).render(
  <div>
    <Demo></Demo>
    <BrowserRouter><App/></BrowserRouter>
  </div>

)