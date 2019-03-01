import React from 'react'
import styled from '@emotion/styled'

// import Button from '../components/Button'
import { Subtitle } from '../components/Typography'

import { PageBox, ButtonBox } from './Layout'

import BgSketchesImg from './assets/bg-sketches.png'

const SketchesButtonBox = styled(ButtonBox)``

export default () => (
  <PageBox pageIndex={4} light>
    <Subtitle>
      {
        'When I’m not coding, I can be found sketching, exploring art, design, motion or gaming.'
      }
    </Subtitle>
    <SketchesButtonBox />
    <div className='bg'>
      <img src={BgSketchesImg} />
    </div>
  </PageBox>
)
