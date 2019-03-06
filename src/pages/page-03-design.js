import React from 'react'
import styled from '@emotion/styled'

import { Subtitle } from '../components/Typography'

import { PageBox, PageLeft, PageRight, ButtonBox } from './Layout'
import WhiteWash from './assets/white wash p3.png'
import BehanceImg from './assets/button behance.png'
import Parallax from 'react-rellax'

const ContentBox = styled.div`
  width: 100%;
  margin-top: 240px;
  margin-left: auto;
  margin-bottom: 500px;
  @media (max-width: ${props => props.theme.breakpoint}px) {
    padding-bottom: 200px;
  }
`

const Page2Parallax = styled(Parallax)`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: auto;
  z-index: 0;
  margin-left: -384px;

  img {
    width: 100%;
  }
  @media (max-width: ${props => props.theme.breakpoint}px) {
    opacity: 0;
  }
`

const BehanceButtonBox = styled(ButtonBox)`
  z-index: 2;
  margin: 0 0 0 auto;
  height: 437px;
  width: 900px;

  .label {
    margin-right: 50px;
    right: 0;
    text-align: right;
  }
  :hover .label {
    margin-right: 20px;
  }
  :hover .accent {
    margin-top: 35px;
    margin-left: -35px;
  }
`

const btnProps = {
  label: (
    <span>
      Some crazy
      <br />
      ideas
    </span>
  )
}

const Page2 = () => (
  <PageBox pageIndex={3} light>
    <PageLeft>
      <Subtitle>
        {
          'I strive to build tools that help people achieve objectives or visualize their progress, make them work faster, or simply improve their quality of life.'
        }
      </Subtitle>
    </PageLeft>

    <PageRight>
      <ContentBox>
        <BehanceButtonBox {...btnProps}>
          <img src={BehanceImg} />
        </BehanceButtonBox>
        <Page2Parallax speed={-2}>
          <img src={WhiteWash} />
        </Page2Parallax>
      </ContentBox>
    </PageRight>
  </PageBox>
)

export default Page2
