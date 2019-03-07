import React from 'react'
import styled from '@emotion/styled'
import Page1 from '../page-01-hi'
import Page2 from '../page-02-ui-workbench'
import Page3 from '../page-03-design'
import Page4 from '../page-04-sketches'
import Page5 from '../page-05-resume'
import Page6 from '../page-06-contact'

const PageBox = styled.div`
  min-height: 1800px;
`
storiesOf('Portfolio|Pages', module)
  .addDecorator(story => <PageBox>{story()}</PageBox>)
  .add('page 1', () => <Page1 />)
  .add('page 2', () => <Page2 />)
  .add('page 3', () => <Page3 />)
  .add('page 4', () => <Page4 />)
  .add('page 5', () => <Page5 />)
  .add('page 6', () => <Page6 />)
