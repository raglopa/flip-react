import React from 'react'
import './style.css'

const Footer = () => (
  <footer className='Footer footer is-size-5'>
    <div className={'container'}>
      <div className={'content has-text-centered'}>
        <p>
          <strong>lbd-react-memory-game</strong> by <a>Attila Polgar</a>
        </p>
        <div>
          <a
            className={'icon'}
            href={'https://github.com/raglopa/lbd-react-memory-game'}
            target='_blank'
          >
            <i className='fa fa-2x fa-github-square' />
          </a>
          <a
            className={'icon'}
            href={'https://www.linkedin.com/in/attilapolgar/'}
            target='_blank'
          >
            <i className='fa fa-2x fa-linkedin-square' />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
