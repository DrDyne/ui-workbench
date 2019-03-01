import React from 'react'
import styled from '@emotion/styled'

// import Button from '../components/Button'
import { Subtitle } from '../components/Typography'

import { PageBox, ButtonBox } from './Layout'
import WhiteWash from './assets/white wash p3.png'

const ContentBox = styled.div`
  display: flex;
  flex-grow: 1;
  margin-top: 240px;

  && > img {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: auto;
    width: 100%;
    z-index: 0;
  }
`

const BehanceButtonBox = styled(ButtonBox)`
  z-index: 2;
  width: 100%;
  display: flex;
  flex-grow: 1;
  margin: 0 -96px -100px 54px;
  max-height: 437px;
  max-width: 900px;
`

const Page2 = () => (
  <PageBox pageIndex={3} light>
    <Subtitle>
      {
        'I strive to build tools that help people achieve objectives or visualize their progress, make them work faster, or simply improve their quality of life.'
      }
    </Subtitle>
    <ContentBox>
      <BehanceButtonBox />
      <img src={WhiteWash} />
    </ContentBox>
  </PageBox>
)

export default Page2
