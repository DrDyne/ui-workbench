import React from 'react'
import { css } from 'emotion'

import BrandingLogo from './sig.png'
import Link from './Link'
import LogoBehance from './logo behance.png'
import LogoTumblr from './logo tumblr.png'
import LogoLinkedIn from './logo linked.png'
import LogoGithub from './logo github.png'

const barBox = css`
  display: flex;
  max-height: 100px;
  background: #000;
  padding: 0 100px;
  transition: all 0.2ms;
  > a {
    img {
      max-height: 100px;
    }
    margin-right: auto;
  }
`

const linksBox = css`
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
  <div className={barBox}>
    <a href='#'>
      <img src={BrandingLogo} />
    </a>
    <div className={linksBox}>
      {showBehance && <Link {...props.behanceLink} />}
      {showTumblr && <Link {...props.tumblrLink} />}
      {showLinkedIn && <Link {...props.linkedInLink} />}
      {showGithub && <Link {...props.githubLink} />}
    </div>
  </div>
)

TopBar.defaultProps = {
  showBehance: false,
  showTumblr: false,
  showLinkedIn: false,
  showGithub: false,
  behanceLink: {
    logo: LogoBehance,
    title: 'behance',
    url: 'https://www.behance.net/rchaumard25b7'
  },
  tumblrLink: {
    logo: LogoTumblr,
    title: 'tumblr',
    url: 'https://dr-dyne.tumblr.com/tagged/sketch'
  },
  linkedInLink: {
    logo: LogoLinkedIn,
    title: 'linked in',
    url: 'https://linkedin.com/in/ryc'
  },
  githubLink: {
    logo: LogoGithub,
    title: 'github',
    url: 'https://github.com/DrDyne'
  }
}

export default TopBar
