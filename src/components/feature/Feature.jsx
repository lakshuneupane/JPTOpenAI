import React from 'react'
import './feature.css'


const Feature = ({title, text}) => {
  return (
    <div className='jpt__features-container__feature'>
      <div className='jpt__features-container__feature-titles'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='jpt__features-container__feature_feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature