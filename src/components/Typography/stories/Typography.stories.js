import React from 'react'
import styled from '@emotion/styled'

import { font } from '../../../theme'

import { Header, Subtitle, Link } from '..'

const TypoListItem = styled(({ name, children, ...other }) => (
  <li {...other}>
    <p>{name}</p>
    {children}
  </li>
))`
  display: flex;
  align-items: baseline;

  p {
    min-width: 120px;
    opacity: 0.4;
    font-family: ${font.familty};
    font-size: ${font.size.subtitle};
    margin: 0 1em;
  }
`

storiesOf('Portfolio|Theme', module).add('Typography', () => (
  <div>
    <TypoListItem name='Header'>
      <Header>Hi</Header>
    </TypoListItem>

    <TypoListItem name='Subtitle'>
      <Subtitle>
        I'm a UX Engineer with 10 years experience in bringing together
        designers and developers to create amazing web apps.
      </Subtitle>
    </TypoListItem>

    <TypoListItem name='Link'>
      <Link href='#'>Lorem ipsum dolor</Link>
    </TypoListItem>

    <TypoListItem name='Link/to'>
      <Link href='#' to='github'>
        Github
      </Link>
    </TypoListItem>

    <TypoListItem name='Link/light'>
      <Link href='#' to='github' light>
        Github
      </Link>
    </TypoListItem>
  </div>
))
