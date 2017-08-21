import {
  dropRight,
  shuffle
} from 'lodash'

import cards from '../config/cards.js'
import { saveSettings } from '../utils/gameState.js'

const getBoardSize = (level) => {
  switch (level) {
    case 'ease':
      return 15
    case 'medium':
      return 30
    case 'hard':
      return 45
    case 'very-hard':
      return 60

    default:
      return 15
  }
}

const getLevelCards = (level) => {
  const shuffledCards = shuffle(cards)
  const boardSize = getBoardSize(level)

  const elementsToDropAmount = shuffledCards.length - boardSize

  return dropRight(shuffledCards, elementsToDropAmount)
}

const setLevel = (level) => {
  saveSettings({
    level
  })
}

export {
  getLevelCards
}

export default setLevel
