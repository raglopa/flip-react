import React from 'react'
import './style.scss'

const Footer = () => (
  <footer className={'Footer footer'} >
    <div className={'container'} >
      <div className={'content has-text-centered'} >
        <p >
          <strong >flip-react</strong > by <a >Attila Polgar</a >
        </p >
        <div >
          <a className={'icon'} href={'https://github.com/raglopa/flip-react'} >
            <i className='fa fa-2x fa-github' />
          </a >
        </div >
      </div >
    </div >
  </footer >
)

export default Footer
