import React from 'react'

export default function Featured() {
  return (
    <div className='featured'>
        <img src="/images/image-web-3-desktop.jpg" className="featured_img" />
        <div className="featured_article">
            <h1 className="featured_headline">The Bright Future of Web 3.0?</h1>
            <div className="featured_article_con">
                <p className="featured_desc">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <button className="featured_button">Read More</button>
            </div>
        </div>
    </div>
  )
}
