import React from 'react'
import styled from '@emotion/styled'
import Loader from '../Loader'

const DemoBox = styled.div`
  padding: 40px;
`

storiesOf('Animation|Loader', module).add('. default', () => (
  <DemoBox>
    <Loader />
  </DemoBox>
))
