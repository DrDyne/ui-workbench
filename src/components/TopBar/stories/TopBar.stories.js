import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import styled from '@emotion/styled'
import TopBar from '../TopBar'

const DemoBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

storiesOf('Portfolio|TopBar', module)
  .add('. default', () => <TopBar />)
  .add('with links', () => (
    <TopBar showBehance showTumblr showLinkedIn showGithub />
  ))
  .add('fixed top', () => {
    const showLinks = boolean('showLinks?', true)
    const props = !showLinks
      ? {}
      : {
        showBehance: true,
        showTumblr: true,
        showLinkedIn: true,
        showGithub: true
      }

    return (
      <DemoBox>
        <TopBar {...props} />
      </DemoBox>
    )
  })
