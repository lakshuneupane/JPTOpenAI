import React from 'react'
import './article.css'

const Article = ({imgUrl, date, title}) => {
  return (
    <div className='jpt__blog-article'>
      <div className='jpt__blog-article_image'>
        <img src={imgUrl} alt="blog" />
      </div>
      <div className='jpt__blog-article_content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
          <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article