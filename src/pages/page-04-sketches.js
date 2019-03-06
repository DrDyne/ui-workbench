import React from 'react'
import styled from '@emotion/styled'
import Parallax from 'react-rellax'

// import Button from '../components/Button'
import { Subtitle } from '../components/Typography'

import { PageBox, ButtonBox } from './Layout'

import BgSketchesImg from './assets/bg-sketches.png'

const SketchesButtonBox = styled(ButtonBox)`
  height: 209px;
  max-width: 600px;
  margin: 0 auto;
  padding: 2em;
  .label {
    margin-top: 20px;
    margin-left: 75px;
    @media (max-width: ${({ theme }) => theme.breakpoint}px) {
      opacity: 1;
      color: ${({ theme }) => theme.colors.black};
    }
  }
  :hover .label {
    margin-top: 50px;
    margin-left: 75px;
    @media (max-width: ${({ theme }) => theme.breakpoint}px) {
      color: white;
    }
  }
  :hover .accent {
    margin-top: -75px;
    margin-left: 25px;
  }
`

const PageBg = styled(({ src, children, ...props }) => (
  <div className='bg' {...props}>
    {children}
    <img src={src} />
  </div>
))`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const btnProps = {
  label: (
    <span>
      Have a look at
      <br />
      some of my
      <br />
      sketches
    </span>
  ),
  transformBox: tr => `${tr} translate(0, -25px)`
}

export default () => (
  <PageBox pageIndex={4} light>
    <Subtitle>
      {
        'When I’m not coding, I can be found sketching, exploring art, design, motion or gaming.'
      }
    </Subtitle>
    <Parallax speed={2}>
      <PageBg src={BgSketchesImg} />
      <SketchesButtonBox {...btnProps} />
    </Parallax>
  </PageBox>
)
