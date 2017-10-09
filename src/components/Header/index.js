import React from 'react'
import './style.scss'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  header: state.header
})

let Header = ({ header }) => (
  <nav
    className='Header navbar is-dark'
    role='navigation'
    aria-label='main navigation'
  >
    <div className='navbar-brand'>
      <a className='navbar-item' href='https://github.com/raglopa/flip-react'>
        <span className='is-size-4'>flip-react</span>
      </a>
      {header.navLinks.map(link => (
        <a
          className='navbar-item is-hidden-desktop'
          key={link.icon}
          href={link.url}
          target='_blank'
        >
          <span className='icon'>
            <i className={`fa fa-2x ${link.icon}`} />
          </span>
        </a>
      ))}
    </div>
    <div className='navbar-menu'>
      <div className='navbar-end'>
        {header.navLinks.map(link => (
          <div className='navbar-item' key={link.icon}>
            <a className={''} href={link.url} target='_blank'>
              <span className='icon'>
                <i className={`fa fa-2x ${link.icon}`} />
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  </nav>
)

Header = connect(mapStateToProps, null)(Header)

export default Header
