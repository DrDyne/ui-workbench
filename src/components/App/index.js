import React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'

import Page1 from '../../pages/page-01-hi'
import Page2 from '../../pages/page-02-ui-workbench'
import Page3 from '../../pages/page-03-design'
import Page4 from '../../pages/page-04-sketches'
import Page5 from '../../pages/page-05-resume'
import Page6 from '../../pages/page-06-contact'
import theme from '../../theme'

import TopBar from '../TopBar'

const TopBarBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${props => props.theme.z.topbar};
`

const App = props => (
  <ThemeProvider theme={theme}>
    <TopBarBox>
      <TopBar />
    </TopBarBox>
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <Page5 />
    <Page6 />
  </ThemeProvider>
)

export default App
