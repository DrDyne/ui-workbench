import React from 'react'
import styled from '@emotion/styled'

import { Header, Subtitle } from '../components/Typography'
import LogoBehance from '../components/TopBar/logo behance.png'
import LogoTumblr from '../components/TopBar/logo tumblr.png'
import LogoLinkedIn from '../components/TopBar/logo linked.png'
import LogoGithub from '../components/TopBar/logo github.png'
import Link from '../components/TopBar/Link'
import arrowDown from './assets/arrow-down.png'

const PageBox = styled.div`
  padding: 94px;
  padding-top: 194px;
  min-height: 900px;
  ${Subtitle} {
    max-width: 290px;
  }
`

const LinksBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  a {
    margin-bottom: 2em;
  }
`

const CenterBox = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin: 1em;
  ${Subtitle} {
    margin-top: 240px;
    margin: 0 auto;
    opacity: 0.4;
  }
  img {
    max-width: 40px;
    margin: 1em auto;
  }
`

const Page1 = props => (
  <PageBox light>
    <Header>Hi,</Header>
    <Subtitle>
      {
        "I'm a UX Engineer with 10 years experience in bringing together designers and developers to create amazing web apps."
      }
    </Subtitle>
    <LinksBox>
      {<Link light={false} {...props.behanceLink} />}
      {<Link light={false} {...props.tumblrLink} />}
      {<Link light={false} {...props.linkedInLink} />}
      {<Link light={false} {...props.githubLink} />}
    </LinksBox>
    <CenterBox>
      <Subtitle>Read more</Subtitle>
      <img src={arrowDown} />
    </CenterBox>
  </PageBox>
)

Page1.defaultProps = {
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

export default Page1
