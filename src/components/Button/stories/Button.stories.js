import React from 'react'
import styled from '@emotion/styled'
import { text, number } from '@storybook/addon-knobs'
import Button from '../'

import Kitty from './kitty.jpeg'

const DemoBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px;
  background: #ccc;
  min-height: 100vh;
`

const defaultProps = {
  height: 400,
  width: 600
}

storiesOf('Portfolio|Button', module)
  .add('. default', () => (
    <DemoBox>
      <Button {...defaultProps}>This is a button</Button>
    </DemoBox>
  ))

  .add('image', () => (
    <DemoBox>
      <Button {...defaultProps}>
        <img src={Kitty} />
      </Button>
    </DemoBox>
  ))

  .add('offset', () => {
    const props = {
      ...defaultProps,
      label: text('label', 'Nya! nya! nya!'),
      offset: {
        x: number('offset.x', 40),
        y: number('offset.y', 40)
      },
      'label-width': number('labelWidth', 40),
      'label-origin': {
        x: number('labelOrigin.x', 420),
        y: number('labelOrigin.y', 20)
      },
      'label-offset': {
        x: number('labelOffset.x', 420),
        y: number('labelOffset.y', 40)
      },
      'label-delay': number('labelDelay', 0.2)
    }

    return (
      <DemoBox>
        <Button {...props}>
          <img src={Kitty} />
        </Button>
      </DemoBox>
    )
  })
