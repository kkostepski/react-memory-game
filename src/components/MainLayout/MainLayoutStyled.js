import styled from 'styled-components'

import { colors } from '../../styles/variables.js'
import MainLayout from './MainLayout.js'

const MainLayoutStyled = styled(MainLayout)`
  background-color: ${colors.void};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export default MainLayoutStyled
