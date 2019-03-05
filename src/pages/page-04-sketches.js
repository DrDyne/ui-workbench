import React from 'react'
import styled from '@emotion/styled'
import Parallax from 'react-rellax'

// import Button from '../components/Button'
import { Subtitle } from '../components/Typography'

import { PageBox, ButtonBox } from './Layout'

import BgSketchesImg from './assets/bg-sketches.png'

const SketchesButtonBox = styled(ButtonBox)``

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

export default () => (
  <PageBox pageIndex={4} light>
    <Subtitle>
      {
        'When I’m not coding, I can be found sketching, exploring art, design, motion or gaming.'
      }
    </Subtitle>
    <Parallax speed={2}>
      <PageBg src={BgSketchesImg} />
    </Parallax>
    <SketchesButtonBox />
  </PageBox>
)
