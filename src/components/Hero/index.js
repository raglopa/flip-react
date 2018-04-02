import React from 'react'
import './style.css'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  technologies: state.hero.technologies
})

let Hero = technologies => (
  <section className='Hero hero is-primary has-text-centered'>
    <div className='hero-body'>
      <div className='container'>
        <h1 className='title is-size-1'>lbd-react-memory-game</h1>
        <h2 className='subtitle'>
          example {'{memory game}'} app created and shipped with
        </h2>
        <div className='tags'>
          {technologies.technologies.map(technology => (
            <span key={technology} className='tag is-medium is-warning'>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
)

Hero = connect(mapStateToProps, null)(Hero)
export default Hero
