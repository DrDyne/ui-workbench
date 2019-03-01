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
  background: #000;
  padding-left: 100px;
  transition: all 0.2ms;
  div a {
    img {
      max-height: 100px;
    }
  }
`

const LinksBox = styled.div`
  display: flex;
  align-content: center;
`

const TopBar = ({
  showBehance,
  showTumblr,
  showLinkedIn,
  showGithub,
  ...props
}) => (
  <BarBox>
    <Branding href='#'>{'remy  chaumard'}</Branding>
    <LinksBox>
      {showBehance && <Link {...props.behanceLink} />}
      {showTumblr && <Link {...props.tumblrLink} />}
      {showLinkedIn && <Link {...props.linkedInLink} />}
      {showGithub && <Link {...props.githubLink} />}
    </LinksBox>
  </BarBox>
)

TopBar.defaultProps = {
  showBehance: false,
  showTumblr: false,
  showLinkedIn: false,
  showGithub: false,
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
