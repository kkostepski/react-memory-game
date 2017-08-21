import React from 'react';
import { chunk } from 'lodash'

import {
  Card,
  Header
} from '../../components'

const Cards = ({ cards, className, onClick }) => {
  const chunkedCards = chunk(cards, 10)

  return (
    <div className={className}>
      <Header />

      <div className="Cards__content">
        {chunkedCards.map((cards, index) =>
          <ul key={index}>
            {cards.map((card, index) =>
              <Card
                className="Card"
                id={card.id}
                key={`${card.name}--${index}`}
                name={card.name}
                onClick={() => !card.show && onClick(card.id, card.name)}
                show={card.show}
              />
            )}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Cards;
