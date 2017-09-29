import React from 'react'
import './style.scss'

const component = () => (
  <nav className='Header navbar is-dark' role='navigation' aria-label='main navigation' >
    <div className='navbar-brand' >
      <a className='navbar-item' href='/' >
        <span className='is-size-4' >flip-react</span >
      </a >
      <a className='navbar-item is-hidden-desktop' href={'/readme'} target='_blank' >
        <a className='button' href={'/readme'} >
          <span className='icon' >
            <i className='fa fa-pencil' />
          </span >
          <span >README</span >
        </a >
      </a >
      <a className='navbar-item is-hidden-desktop' href={'https://github.com/raglopa/flip-react'} target='_blank' >
        <span className='icon' >
          <i className='fa fa-2x fa-github' />
        </span >
      </a >
      <a className='navbar-item is-hidden-desktop' href={'https://www.linkedin.com/in/attilapolgar/'} target='_blank' >
        <span className='icon' >
          <i className='fa fa-2x fa-linkedin-square' />
        </span >
      </a >

    </div >
    <div className='navbar-menu' >
      <div className='navbar-end' >
        <div className='navbar-item' >
          <a className='button' href={'/readme'} >
            <span className='icon' >
              <i className='fa fa-pencil' />
            </span >
            <span >README</span >
          </a >
        </div >
        <div className='navbar-item' >
          <a className={''} href={'https://github.com/raglopa/flip-react'} target='_blank' >
            <span className={'icon'} >
              <i className='fa fa-2x fa-github' />
            </span >
          </a >
        </div >
        <div className='navbar-item' >
          <a className={''} href={'\'https://www.linkedin.com/in/attilapolgar/\''} target='_blank' >
            <span className={'icon'} >
              <i className='fa fa-2x fa-linkedin-square' />
            </span >
          </a >
        </div >
      </div >
    </div >
  </nav >
)

export default component
