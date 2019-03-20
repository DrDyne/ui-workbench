import React from 'react'
import styled from '@emotion/styled'

import theme from '../theme'
import readme from './readme'

const ColorBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1250px;
  margin: 0 auto;
`

const ColorBlock = styled(({ name, hex, bg, ...other }) => (
  <div {...other}>
    <div />
    <div>
      <p>{name}</p>
      <p>{hex || 'gradient'}</p>
    </div>
  </div>
))`
  font-family: ${props => props.theme.font.family};
  background-color: ${props => props.hex};
  border-radius: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 16px;
  max-width: 250px;
  min-height: 250px;
  width: 100%;
  position: relative;

  :hover {
    box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.4);
  }
  transition: box-shadow 0.3s ease-out;

  ${props =>
    props.bg &&
    `
    background: ${props.bg};
  `}

  div {
    min-height: 130px;
    width: 100%;
    border-radius: 0 0 16px 16px;
  }
  div + div {
    min-height: 0;
    background: white;
    position: absolute;
    bottom: 0;
  }
  div + div > p {
    padding: 0 1em;
    opacity: 0.4;
  }

  div + div > p + p {
    opacity: 1;
  }
`
const TldrBox = styled.div`
  font-family: ${props => props.theme.font.family};
  h1 {
    text-transform: uppercase;
  }
  padding: 40px;

  blockquote {
    margin: 1em;
  }
  blockquote > p:before {
    content: ' ';
    border-left: 4px solid #ccc;
    margin-right: 1em;
  }
`

storiesOf('📌 TLDR;', module).add('README', () => <TldrBox> {readme} </TldrBox>)

storiesOf('Portfolio|Theme', module).add('Palette', () => (
  <ColorBox>
    <ColorBlock name='Black Pearl' hex={theme.colors.black} />
    <ColorBlock name='Brink Pink' hex={theme.colors.workbench} />
    <ColorBlock name='Royal Blue' hex={theme.colors.design} />
    <ColorBlock name='East Bay' hex={theme.colors.tumblr} />
    <ColorBlock name='Sail' hex={theme.colors.resume} />
    <ColorBlock name='Black Pearl to Pure Black' bg={theme.gradients.header} />
    <ColorBlock name='Accent (light)' bg={theme.gradients.accentLight} />
    <ColorBlock name='Accent (dark)' bg={theme.gradients.accentDark} />
  </ColorBox>
))
