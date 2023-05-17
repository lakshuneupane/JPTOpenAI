import React from 'react'
import Article from '../../components/article/Article'
import './blog.css'
import { blog1, blog2, blog3, blog4, blog5 } from '../../components/article/import'

const Blog = () => {
  return (
    <div className='jpt__blog section__padding' id='blog'>
      <div className='jpt__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className='jpt__blog-container'>
        <div className='jpt__blog-conatiner_groupA'>
          <Article imgUrl={blog1} date= '14 may 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
        <div className='jpt__blog-conatiner_groupB'>
        <Article imgUrl={blog2} date= '14 may 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        <Article imgUrl={blog3} date= '14 may 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        <Article imgUrl={blog4} date= '14 may 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        <Article imgUrl={blog5} date= '14 may 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
      </div>
    </div>
  )
}

export default Blog