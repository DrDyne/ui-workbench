import React from 'react'
import styled from '@emotion/styled'

import { Header, Subtitle } from '../components/Typography'
import LogoBehance from '../components/TopBar/logo behance.png'
import LogoTumblr from '../components/TopBar/logo tumblr.png'
import LogoLinkedIn from '../components/TopBar/logo linked.png'
import LogoGithub from '../components/TopBar/logo github.png'
import TopBarLink from '../components/TopBar/Link'

import arrowDown from './assets/arrow-down.png'
import WhiteWashImg from './assets/white wash p1.png'

const Link = props => <TopBarLink withBorder {...props} />

const PageBox = styled.div`
  padding: 94px;
  padding-top: 194px;
  min-height: 900px;
  position: relative;
  z-index: 10;

  ${Subtitle} {
    max-width: 290px;
  }

  img.whitewash {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    z-index: -1;
  }
`

const PageLeft = styled.section``

const PageRight = styled.section``

const LinksBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const CenterBox = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.4);
  //margin-top: -400px; // adjust parallax
  height: 100px;

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
  <PageBox pageIndex={1}>
    <PageLeft>
      <Header>Hi,</Header>
      <Subtitle>
        {
          "I'm a UX Engineer with 10 years experience in bringing together designers and developers to create amazing web apps."
        }
      </Subtitle>
    </PageLeft>

    <PageRight>
      <LinksBox>
        {<Link {...props.behanceLink} />}
        {<Link {...props.tumblrLink} />}
        {<Link {...props.linkedInLink} />}
        {<Link {...props.githubLink} />}
      </LinksBox>
    </PageRight>

    <CenterBox>
      <Subtitle>Read more</Subtitle>
      <img src={arrowDown} />
    </CenterBox>

    <img className='whitewash' src={WhiteWashImg} />
  </PageBox>
)

Page1.defaultProps = {
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
    url: 'https://github.com/drdyne'
  }
}

export default Page1
