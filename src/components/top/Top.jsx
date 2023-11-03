import React from 'react'
import './top.css'
import {topItems as data} from '/src/data.jsx'

export default function Top() {
  return (
    <div className='top'>
        {data.map((item, index) => (
            <div key={index} className="top_item">
                <img src={item.src} alt={item.headline} className="top_img" />
                <div className="top_text_con">
                    <h1 className="top_num">{item.num}</h1>
                    <h3 className="top_headline">{item.headline}</h3>
                    <p className="top_desc">{item.desc}</p>
                </div>
            </div>
        ))}
    </div>
  )
}
