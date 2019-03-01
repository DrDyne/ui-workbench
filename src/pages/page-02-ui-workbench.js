import React from 'react'
import styled from '@emotion/styled'
// import Button from '../components/Button'
import { Subtitle } from '../components/Typography'
import FigmaLogo from './assets/logo-figma.png'
import ReactLogo from './assets/logo-react.png'
import StorybookLogo from './assets/logo-storybook.png'
import WhiteWash from './assets/white wash p2.png'

import { PageBox, ButtonBox } from './Layout'

const ContentBox = styled.div`
  display: flex;
  flex-grow: 1;
  min-width: 560px;
  transition: all 0.2s;

  @media (min-width: 740px) {
    padding-left: 200px;
  }

  img {
    position: absolute;
    left: 0;
    top: 0;
  }

  img {
    left: 428px;
    top: 126px;
  }

  img + img {
    left: 316px;
    top: 451px;
    z-index: 1;
  }

  img + img + img {
    padding-left: 695px;
    margin-top: -85px;
  }

  img + img + img + img {
    padding: 0;
    left: 0;
    bottom: 0;
    right: 0;
    top: auto;
    width: 100%;
    z-index: 0;
    margin-bottom: -100px;
  }
`

const UIWBButtonBox = styled(ButtonBox)`
  z-index: 2;
  width: 100%;
  max-width: 686px;
  height: 363px;
  margin-top: 94px;

  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
`

const Page2 = () => (
  <PageBox pageIndex={2} light>
    <Subtitle>
      {
        'These days I use Figma and React, backed by Storybook to build visual libraries of components that can be tested and regressed automatically.'
      }
    </Subtitle>
    <ContentBox>
      <UIWBButtonBox />
      <img src={FigmaLogo} />
      <img src={StorybookLogo} />
      <img src={ReactLogo} />
      <img src={WhiteWash} />
    </ContentBox>
  </PageBox>
)

export default Page2
