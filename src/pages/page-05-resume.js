import React from 'react'
import styled from '@emotion/styled'

// import Button from '../components/Button'
import { Subtitle } from '../components/Typography'
import { PageBox, ButtonBox } from './Layout'
import BgGradientImg from './assets/blue bg.png'

const BgBox = styled.div`
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
      height: 600px;
    }
  }
  .row {
    display: flex;
    z-index: 0;
    width: 100%;
    max-height: 440px;
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
  margin-bottom: 40px;
  width: 876px;
  height: 500px;
  position: absolute;
  margin-top: 435px;
`

export default () => (
  <PageBox pageIndex={5}>
    <Subtitle>
      {
        'Most of my experience is based on secure, enterprise-level, innovative web apps, with optimized bundling and offline support, developed and tested by small teams and released in fast iteration cycles through a solid CI pipeline to a wide array of devices.'
      }
      {/* <div /> */}
    </Subtitle>
    <ResumeButtonBox />

    <BgBox>
      <div className='column'>
        <img className='top' src={BgGradientImg} />
      </div>
      <div className='row'>
        <img className='left' src={BgGradientImg} />
        <img className='right' src={BgGradientImg} />
      </div>
    </BgBox>
  </PageBox>
)
