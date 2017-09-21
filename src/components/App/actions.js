export const START_NEW_GAME = 'START_NEW_GAME'
export const TRIGGER_SQUARE = 'TRIGGER_SQUARE'
export const TRIGGER_HISTORY_JUMP = 'TRIGGER_HISTORY_JUMP'

export const startNewGame = () => ({type: START_NEW_GAME})
export const triggerSquare = (index) => ({type: TRIGGER_SQUARE, index})
export const triggerHistoryJump = (step) => ({type: TRIGGER_HISTORY_JUMP, step})
