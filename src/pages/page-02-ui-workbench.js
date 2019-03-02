import React from 'react'
import styled from '@emotion/styled'
import Parallax from 'react-rellax'

// import Button from '../components/Button'
import { Subtitle } from '../components/Typography'
import FigmaLogo from './assets/logo-figma.png'
import ReactLogo from './assets/logo-react.png'
import StorybookLogo from './assets/logo-storybook.png'
import WhiteWash from './assets/white wash p2.png'

import { PageBox, PageLeft, PageRight, ButtonBox } from './Layout'

const ContentBox = styled.div`
  display: flex;
  flex-grow: 1;
  min-width: 560px;
  transition: all 0.2s;
  min-height: 1000px;

  @media (min-width: 740px) {
    padding-left: 200px;
    > div:first-child {
      margin-top: 240px;
      margin-bottom: -50px;
    }

    > div.parallax {
    }

    img.react-logo {
      padding-left: 300px;
      margin-top: -240px;
    }
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

const Page1Parallax = styled(Parallax)`
  margin-left: -786px;
  img {
    position: absolute;
    left: 0;
    top: 0;
  }

  ${props =>
    props.figma &&
    `
    position: absolute;
    margin-left: -120px;
  `}
  .figma-logo {
    left: -50px;
    top: 126px;
    margin-top: 400px;
  }

  .storybook-logo {
    left: 316px;
    top: 451px;
    z-index: 1;
  }

  .react-logo {
    padding-left: 695px;
    margin-top: -85px;
  }

  ${props =>
    props.wash &&
    `
    @media(max-width: ${props.theme.breakpoint}px) { opacity: 0 }
    @media(min-width: ${props.theme.breakpoint}px) {
      position: absolute;
      left: 0;
      right: 0;
      top: auto;
      margin-top: 300px;
      z-index: 0;

      img.white-wash {
        width: 100%;
      }
    }
  `}
`

const Page2 = () => (
  <PageBox pageIndex={2} light>
    <PageLeft>
      <Subtitle>
        {
          'These days I use Figma and React, backed by Storybook to build visual libraries of components that can be tested and regressed automatically.'
        }
      </Subtitle>
    </PageLeft>
    <PageRight>
      <ContentBox>
        <UIWBButtonBox />
        <Page1Parallax>
          <img src={StorybookLogo} className='storybook-logo' />
          <img src={ReactLogo} className='react-logo' />
        </Page1Parallax>

        <Page1Parallax speed={4} figma>
          <img src={FigmaLogo} className='figma-logo' />
        </Page1Parallax>
      </ContentBox>
    </PageRight>

    <Page1Parallax wash speed={-5}>
      <img src={WhiteWash} className='white-wash' />
    </Page1Parallax>
  </PageBox>
)

export default Page2
