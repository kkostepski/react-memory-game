import React from 'react'

const Card = ({ className, id, name, onClick }) => {
  const image = require(`./images/${name}.svg`)

  return image ? (
    <li className={className}>
      <a className="Card__element" onClick={() => onClick(id, name)}>
        <div className="Card__contents Card__contents--back">
          ?
        </div>
        <div className="Card__contents Card__contents--front">
          <img src={image} alt={name} />
        </div>
      </a>
    </li>
  ) : null
}

export default Card
