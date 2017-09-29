import { CHANGE_NAME } from './actions'

import {} from '../utils'

const INITIAL_STATE = {
  name: 'anonymous'
}

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_NAME: {
      const {name} = action
      console.log('name', name, action)
      return {
        ...state,
        name
      }
    }

    default:
      return state
  }
}

export default {
  player
}
