import ReactGA from 'react-ga'

const ga = store => next => action => {
  ReactGA.event({
    category: 'action',
    action: action.type,
    player: action.name
  })
  return next(action)
}

export default ga
