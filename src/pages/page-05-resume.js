import React from 'react'
import styled from '@emotion/styled'
import Parallax from 'react-rellax'

// import Button from '../components/Button'
import { Subtitle } from '../components/Typography'
import { PageBox, ButtonBox } from './Layout'
import BgGradientImg from './assets/blue bg.png'

const BgBox = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: space-around;
  display: flex;
  flex-direction: column;

  .column {
    z-index: 1;
    opacity: 0.4;
    margin: 0 auto;
    width: 720px;
    display: flex;
    flex-direction: column;
    .top {
      height: 500px;
    }
  }

  .row {
    display: flex;
    z-index: 4;
    width: 100%;
    max-height: 440px;
    margin-top: -1200px;
    margin-bottom: -1px;
    img {
      width: 50%;
    }
    .right {
      transform: scaleX(-1);
    }
  }
`

const ResumeButtonBox = styled(ButtonBox)`
  width: 876px;
  height: 500px;
  margin: 100px auto;
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`

export default () => (
  <PageBox pageIndex={5}>
    <ContentBox>
      <Subtitle>
        {
          'Most of my experience is based on secure, enterprise-level, innovative web apps, with optimized bundling and offline support, developed and tested by small teams and released in fast iteration cycles through a solid CI pipeline to a wide array of devices.'
        }
      </Subtitle>
      <ResumeButtonBox />
    </ContentBox>

    <BgBox>
      <div className='column'>
        <img className='top' src={BgGradientImg} />
      </div>

      <Parallax speed={-3}>
        <div className='row'>
          <img className='left' src={BgGradientImg} />
          <img className='right' src={BgGradientImg} />
        </div>
      </Parallax>
    </BgBox>
  </PageBox>
)
