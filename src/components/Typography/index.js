import styled from '@emotion/styled'
import { font, lightTextVariant } from '../../theme'

export const Subtitle = styled.h3`
  font-family: ${font.family};
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: ${font.size.subtitle};
  letter-spacing: 0.15em;

  color: ${lightTextVariant};
`

export const Header = styled.h1`
  font-family: ${font.family};
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: ${font.size.header};
  letter-spacing: 0.15em;
`

export const Link = styled.a`
  font-family: ${font.family};
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: ${font.size.link};
  text-align: right;
  letter-spacing: 0.15em;

  color: ${lightTextVariant};
`
