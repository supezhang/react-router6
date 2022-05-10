import React from 'react'
import {useInRouterContext} from 'react-router-dom'
// 是否在同一路由上下文中
export default function Demo() {
  console.log('demo组件',useInRouterContext());
  return (
    <div>Demo组件</div>
  )
}
