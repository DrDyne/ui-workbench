import React from 'react'
import styled from '@emotion/styled'
import { text, number } from '@storybook/addon-knobs'
import Button from '../'

import Kitty from './kitty.jpeg'

const btnSize = `
  width: 500px;
  height: 333px;
`
const DemoBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px;
  background: #ccc;

  > div {
    ${btnSize}
  }
`

storiesOf('Portfolio|Button', module)
  .add('. default', () => (
    <DemoBox>
      <Button>This is a button</Button>
    </DemoBox>
  ))

  .add('image', () => (
    <DemoBox>
      <Button>
        <img src={Kitty} />
      </Button>
    </DemoBox>
  ))

  .add('styled', () => {
    const props = {
      label: text('label', 'Nya! nya! nya!')
    }

    const DemoButton = styled(Button)`
      ${btnSize}

      .label {
        width: ${number('label width', 40)}px;
        margin-left: ${number('label x', 400)}px;
        margin-top: ${number('label y', 20)}px;
      }

      :hover .label {
        margin-left: ${number('label hover x', 400)}px;
        margin-top: ${number('label hover y', 40)}px;
      }

      :hover .accent {
        margin-left: 40px;
        margin-top: 40px;
      }
    `

    return (
      <DemoBox>
        <DemoButton {...props}>
          <img src={Kitty} />
        </DemoButton>
      </DemoBox>
    )
  })
