import React from 'react'
import './style.scss'

const Footer = () => (
  <footer className='Footer footer is-size-5'>
    <div className={'container'}>
      <div className={'content has-text-centered'}>
        <p>
          <strong>flip-react</strong> by <a>Attila Polgar</a>
        </p>
        <div>
          <a
            className={'icon'}
            href={'https://github.com/raglopa/flip-react'}
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
