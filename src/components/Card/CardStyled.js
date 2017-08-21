import styled from 'styled-components'

import {
  colors,
  transitions
} from '../../styles/variables.js'
import Card from './Card.js'

const CardStyled = styled(Card)`
  width: 90px;
  height: 130px;
  position: relative;
  perspective: 360px;
  margin-bottom: 10px;

  .Card__element {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: opacity .2s ${transitions.bezier},
                transform 1.5s ${transitions.bezier};
    cursor: ${props => props.show ? 'default' : 'pointer'};
    user-select: none;

    ${props => !props.show &&
      `&:hover {
        opacity: .6
      }`
    };
    
    ${props => props.show &&
      `transform: rotateY(180deg)`
    };

    img {
      width: 50px;
    }
  }

  .Card__contents {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: ${colors.nightBlue};
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  
  .Card__contents--front {
    transform: rotateY(180deg);
  }
  
  .Card__contents--back {
    color: ${colors.gray};
    font-size: 50px;
  }
`

export default CardStyled
