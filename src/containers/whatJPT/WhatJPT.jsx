import React from 'react'
import './whatJPT.css'
import { Feature } from '../../components'

const WhatJPT = () => {
  return (
    <div className='jpt__whatjpt section__padding' id='jpt'>
      <div className='jpt__whatjpt-feature'>
        <Feature title={'What is JPT?'} text={'JPT is a natural language processing tool driven by AI technology that allows you to have human-like conversations and much more with the chatbot. The language model can answer questions and assist you with tasks, such as composing emails, essays, and code.'}/>
      </div>
      <div className='jpt__whatjpt-heading'>
        <h1 className='gradient__text'>The Possibilities Are Beyond Your Imagination.</h1>
        <p>Explore The Library</p>
      </div>
      <div className='jpt__whatjpt-container'>
        <Feature title={'Chatbots'} text={'A chatbox is the user interface of a given chat application. A common use for chatboxes is a popup window on a business website through which the user interacts with a live agent or AI bot.'} />
        <Feature title={'Knowledgebase'} text={'A knowledge base is a self-serve online library of information about a product, service, department, or topic. The data in your knowledge base can come from anywhere. Typically, contributors who are well versed in the relevant subjects add to and expand the knowledge base.'}/>
        <Feature title={'Education'} text={'Education is a purposeful activity directed at achieving certain aims, such as transmitting knowledge or fostering skills and character traits. These aims may include the development of understanding, rationality, kindness, and honesty. '}/>
      </div>
    </div>
  )
}

export default WhatJPT