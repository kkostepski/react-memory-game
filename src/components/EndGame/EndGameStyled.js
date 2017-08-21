import styled from 'styled-components'

import EndGame from './EndGame.js'

const EndGameStyled = styled(EndGame)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-size: 30px;
  line-height: 1.5;
  
  .youWonImage {
    width: 100px;
  }
  
  .youWonText {
    display: block;
    text-align: center;
  }
  
  .newGameLink {
    color: #fff;
    text-decoration: none;
    
    &:hover {
      opacity: .7
    }
  }
`

export default EndGameStyled
