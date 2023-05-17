import React from 'react'
import { Blog, Features, Footer, Header, Possibility, WhatJPT } from './containers'
import { Brand, CTA, Navbar } from './components'

import './app.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatJPT />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App