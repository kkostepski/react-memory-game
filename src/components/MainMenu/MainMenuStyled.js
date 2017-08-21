import styled from 'styled-components'

import { colors } from '../../styles/variables.js'
import MainMenu from './MainMenu.js'

const MainMenuStyled = styled(MainMenu)`
  width: 100%;
  text-align: center;
  line-height: 2;
  
  a {
    color: ${colors.white};
    font-size: 30px;
    text-decoration: none;
    
    &:hover {
      color: ${colors.gray};
    }
  }
`

export default MainMenuStyled
