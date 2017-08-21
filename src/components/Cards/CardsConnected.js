import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {
  drop,
  random,
  shuffle
} from 'lodash'

import { getLevelCards } from '../../utils/setLevel'
import {
  loadGame,
  loadSettings,
  saveGame
} from '../../utils/gameState'
import Cards from './CardsStyled.js'

class CardsConnected extends Component {
  constructor(props) {
    super(props)

    this.handleCardClick = this.handleCardClick.bind(this)

    const cards = this.constructor.getCardStates()

    this.state = loadGame() ? loadGame() : {
      cards,
      cardAttempts: [],
      cardAttemptsCount: 0,
      gameFinished: false
    }
  }

  static getCardStates() {
    const selectedLevel = loadSettings('level')
    const cards = getLevelCards(selectedLevel)
    const cardStates = []
    const duplicatedCards = shuffle([...cards, ...cards])

    for (let i=0; i<duplicatedCards.length; i++) {
      cardStates.push({
        id: `${duplicatedCards[i]}-${random(0,999)}`,
        name: duplicatedCards[i],
        show: false
      })
    }

    return cardStates
  }

  getCardIndex(id) {
    return this.state.cards.findIndex(card => {
      return card.id === id
    })
  }

  addCardAttempt(id, name) {
    const cardAttempts = this.state.cardAttempts
    cardAttempts.push({
      id,
      name
    })

    this.setState({
      cardAttempts,
      cardAttemptsCount: ++this.state.cardAttemptsCount
    })
  }

  compareCardAttempts() {
    const attempts = this.state.cardAttempts

    return attempts[0].name === attempts[1].name
  }

  clearPreviousCardAttempts() {
    const attempts = [...this.state.cardAttempts]

    this.setState({
      cardAttempts: drop(attempts, 2),
      cardAttemptsCount: 1
    })
  }

  verifyCardAttempts() {
    if (!this.compareCardAttempts()) {
      this.hideCard(this.state.cardAttempts[0].id)
      this.hideCard(this.state.cardAttempts[1].id)
    }

    this.clearPreviousCardAttempts()
  }

  checkIfAllCardsAreRevealed() {
    const hiddenCards = this.state.cards.some(card => {
      return !card.show
    })

    return !hiddenCards
  }

  showCard(id) {
    const cardIndex = this.getCardIndex(id)

    const cards = [...this.state.cards]
    cards[cardIndex].show = true

    this.setState({
      cards
    })
  }

  hideCard(id) {
    const cardIndex = this.getCardIndex(id)

    const cards = [...this.state.cards]
    cards[cardIndex].show = false

    this.setState({
      cards
    })
  }

  saveGameState() {
    saveGame(this.state)
  }

  endGame() {
    setTimeout(
      () => {
        this.setState({
          gameFinished: true
        })
      }, 1500
    )
  }

  handleCardClick(cardId, cardName) {
    this.showCard(cardId)
    this.addCardAttempt(cardId, cardName)

    if (this.state.cardAttemptsCount === 3) {
      this.verifyCardAttempts()
    }

    if (this.checkIfAllCardsAreRevealed()) {
      this.endGame()
    }

    this.saveGameState()
  }

  render() {
    return this.state.gameFinished
      ? <Redirect to="/end-game" />
      : <Cards
          cards={this.state.cards}
          onClick={this.handleCardClick}
        />
  }
}

export default CardsConnected
