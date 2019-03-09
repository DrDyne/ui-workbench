import React from 'react'

import { Subtitle } from '../components/Typography'
import Tooltip from '../components/Tooltip'

import ContactLineImg from './assets/contact line.png'
import DarkWashImg from './assets/contact bg.png'
import { PageBox } from './Layout'

const mailto = `mailto:r.chaumard@gmail.com?subject=UX Engineer&body=Hi remy,`

export default () => (
  <PageBox pageIndex={6}>
    <div className='bg'>
      <img src={DarkWashImg} />
      <div className='contact-line'>
        <img src={ContactLineImg} />
      </div>
    </div>

    <div className='tooltip-box'>
      <Tooltip href={mailto}>
        <Subtitle>Sounds interesting? Drop me a line.</Subtitle>
      </Tooltip>
    </div>
  </PageBox>
)
