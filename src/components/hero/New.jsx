import React from 'react'
import {newItems as data} from '/src/data.jsx'

export default function New() {
  return (
    <div className='new'>
        <h1 className="new_headline">New</h1>
        <div className="new_article_con">
            {data.map((item, index) => (
                <div className="new_item" key={index}>
                    <h3 className="new_item_headline">{item.headline}</h3>
                    <p className="new_item_desc">{item.desc}</p>
                    <div style={{display: item.line == true ? "block" : 'none'}} className="new_line"></div>
                </div>
            ))}
        </div>
    </div>
  )
}
