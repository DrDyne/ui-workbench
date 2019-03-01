import React from 'react'
import styled from '@emotion/styled'

// import Button from '../components/Button'
import { Subtitle } from '../components/Typography'
import { PageBox, ButtonBox } from './Layout'
import BlueBg from './assets/blue bg.png'

const ContentBox = styled.div`
  display: flex;
  flex-grow: 1;

  img {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }

  && > div {
    position: absolute;
    margin-left: 94px;
    left: 0;
    bottom: 0;
    max-width: 876px;
    min-height: 493px;
  }
`

const ResumeButtonBox = styled(ButtonBox)``

export default () => (
  <PageBox pageIndex={5}>
    <Subtitle>
      {
        'Most of my experience is based on secure, enterprise-level, innovative web apps, with optimized bundling and offline support, developed and tested by small teams and released in fast iteration cycles through a solid CI pipeline to a wide array of devices.'
      }
    </Subtitle>
    <ContentBox>
      <ResumeButtonBox />
      <img src={BlueBg} />
    </ContentBox>
  </PageBox>
)
