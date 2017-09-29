const INITIAL_STATE = {
  technologies: [
    'react',
    'redux',
    'recompose',
    'es7',
    'babel',
    'webpack',
    'sass',
    'bulma',
    'jest',
    'travis'
  ]
}
const hero = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default {
  hero
}
