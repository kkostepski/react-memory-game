import React from 'react'

const EndGame = ({ className }) => {
  const wonImage = require('./images/you-won.svg')

  return (
    <div className={className}>
      <img
        src={wonImage}
        alt="You won"
        className="youWonImage"
      />

      <p className="youWonText">
        Congratulations!<br />You won!
      </p>

      <br />

      <a href="/new-game" className="newGameLink">
        Play again
      </a>
    </div>
  )
}

export default EndGame
