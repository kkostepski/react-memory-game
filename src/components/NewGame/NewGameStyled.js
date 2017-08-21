import styled from 'styled-components'

import { colors } from '../../styles/variables'
import NewGame from './NewGame.js'

const NewGameStyled = styled(NewGame)`
  .NewGame__title {
    text-align: center;
    font-weight: 300;
    font-size: 40px;
    color: ${colors.white};
  }

  .NewGame__link {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    font-size: 20px;
    color: ${colors.white};
    cursor: pointer;
    transition: opacity .3s ease-in-out;
    
    &:hover {
      opacity: .5;
    }
  }

  ul {
    margin: 0;
    display: flex;
    
    img {
      margin-bottom: 10px;
      width: 100px;
    }
  }
`

export default NewGameStyled
