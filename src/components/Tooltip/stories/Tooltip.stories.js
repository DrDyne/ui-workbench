import React from 'react'
import { actions } from '@storybook/addon-actions'
import styled from '@emotion/styled'
import Tooltip from '../'

const DemoBox = styled.div`
  background: ${props => props.theme.colors.black};
  min-height: 900px;
  padding: 200px;
  > div {
    min-height: 100px;
  }
`
const eventProps = {
  ...actions('onMouseEnter', 'onMouseLeave', 'onMouseMove')
}

storiesOf('Portfolio|Tooltip', module)
  .addDecorator(story => <DemoBox>{story()}</DemoBox>)
  .add('. default', () => <Tooltip />)
  .add('with text', () => <Tooltip>Here is some text.</Tooltip>)
  .add('event logger', () => <Tooltip {...eventProps} />)
