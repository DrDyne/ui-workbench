import React from 'react'
import styled from '@emotion/styled'

import { Branding } from '../Typography'
import Link from './Link'
import LogoBehance from './logo behance.png'
import LogoTumblr from './logo tumblr.png'
import LogoLinkedIn from './logo linked.png'
import LogoGithub from './logo github.png'

const BarBox = styled.div`
  display: flex;
  background: linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 50%), #232729;
  padding-left: 100px;
  transition: all 0.2ms ease-in;
  div a {
    img {
      max-height: 100px;
    }
  }
`

const trLinkReveal = (delay = 0) => `
  transition-property: opacity;
  transition-duration: .8s;
  transition-timing-function: ease-out;
  transition-delay: ${delay}s;
`

const LinksBox = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-end;
  flex-wrap: wrap;

  > div:hover {
    ${props => !props.show && `background: none;`}
  }

  a {
    opacity: ${props => (props.show ? 1 : 0)};
  }

  a:nth-of-type(1) {
    ${trLinkReveal()}
  }
  a:nth-of-type(2) {
    ${trLinkReveal(0.8)}
  }
  a:nth-of-type(3) {
    ${trLinkReveal(1.2)}
  }
  a:nth-of-type(4) {
    ${trLinkReveal(1.8)}
  }
`

const TopBar = ({ showLinks, ...props }) => (
  <BarBox>
    <Branding href='#'>{'remy  chaumard'}</Branding>
    <LinksBox show={showLinks}>
      <Link {...props.behanceLink} />
      <Link {...props.tumblrLink} />
      <Link {...props.linkedInLink} />
      <Link {...props.githubLink} />
    </LinksBox>
  </BarBox>
)

TopBar.defaultProps = {
  showLinks: false,
  behanceLink: {
    to: 'behance',
    logo: LogoBehance,
    title: 'behance',
    url: 'https://www.behance.net/rchaumard25b7'
  },
  tumblrLink: {
    to: 'tumblr',
    logo: LogoTumblr,
    title: 'tumblr',
    url: 'https://dr-dyne.tumblr.com/tagged/sketch'
  },
  linkedInLink: {
    to: 'linkedin',
    logo: LogoLinkedIn,
    title: 'linked in',
    url: 'https://linkedin.com/in/ryc'
  },
  githubLink: {
    to: 'github',
    logo: LogoGithub,
    title: 'github',
    url: 'https://github.com/DrDyne'
  }
}

export default TopBar
