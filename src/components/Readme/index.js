import React from 'react'
import './style.scss'
import readme from './README.md'

const Readme = () => (
  <div className='Readme'>
    <div className='readme' dangerouslySetInnerHTML={{ __html: readme }} />
  </div>
)

export default Readme
