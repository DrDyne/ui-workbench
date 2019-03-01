import React from 'react'
import styled from '@emotion/styled'
import { font, lightTextVariant } from '../../theme'

const transitionLinkColor = `
  transition: background .4s ease-out;
`

export const Branding = styled.a`
  margin: 0 auto 0 -100px;
  padding: 0 50px;
  line-height: 100px;
  color: #fff;
  text-transform: uppercase;
  font-size: 24px;
  text-decoration: none;
  letter-spacing: 0.3em;
  font-family: ${font.family};

  :hover {
    background: rgba(255, 255, 255, 0.2);
  }

  ${transitionLinkColor}

  border: none, none, 4px solid rgba(0,0,0, 1), none;
  transition: border-color 0.2s ease-in;
  :hover {
    border-color: rgba(255, 255, 255, 0.1);
  }
`

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

const linkHighlightColor = ({ to, theme }) => `
  ${transitionLinkColor}
  background: ${
  to === 'behance'
    ? theme.colors.design
    : to === 'tumblr'
      ? theme.colors.tumblr
      : to === 'github'
        ? theme.colors.workbench
        : to === 'linkedin'
          ? theme.colors.resume
          : '#000'
};
`

export const Link = styled(({ children, to, className, ...props }) => (
  <div className={className}>
    <a {...props}>{children}</a>
    <div className='highlight' />
  </div>
))`
  position: relative;
  :hover {
    ${linkHighlightColor}
  }
  a {
    display: flex;
    width: 100%;
    line-height: 100px;
    font-family: ${font.family};
    font-style: normal;
    font-weight: normal;
    font-size: ${font.size.link};
    letter-spacing: 0.15em;
    text-decoration: none;

    text-align: center;
    padding-left: 30px;
    img {
      margin: 0 30px 0 0;
      align-self: center;
    }

    color: ${lightTextVariant};
  }
`
