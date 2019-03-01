import React from 'react'
import styled from '@emotion/styled'

// import Button from '../components/Button'
import { Subtitle } from '../components/Typography'
import { PageBox, ButtonBox } from './Layout'
import BlueBg from './assets/blue bg.png'

const ContentBox = styled.div`
  display: flex;
  flex-grow: 1;
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
