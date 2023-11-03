import React from 'react'
import './hero.css'
import Featured from './Featured'
import New from './New'

export default function Hero() {
  return (
    <div className='hero'>
        <Featured />
        <New />
    </div>
  )
}
