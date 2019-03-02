import React from 'react'
import styled from '@emotion/styled'

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
  align-items: top;
  width: 100%;
  ${Subtitle} {
    margin-bottom: -180px;
  }
  img {
    width: 100%;
    height: auto;
  }
`

export default () => (
  <PageBox pageIndex={4} light>
    <PageBg src={BgSketchesImg}>
      <Subtitle>
        {
          'When I’m not coding, I can be found sketching, exploring art, design, motion or gaming.'
        }
      </Subtitle>

      <SketchesButtonBox />
    </PageBg>
  </PageBox>
)
