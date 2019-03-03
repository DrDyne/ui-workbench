import React from 'react'
import ContactLineImg from './assets/contact line.png'
import DarkWashImg from './assets/contact bg.png'
import TooltipImg from './assets/tooltip.png'
import { PageBox } from './Layout'

export default () => (
  <PageBox pageIndex={6}>
    <div className='bg'>
      <img src={DarkWashImg} />
      <div className='contact-line'>
        <img src={ContactLineImg} />
      </div>
    </div>

    <div className='tooltip'>
      <img src={TooltipImg} />
    </div>
  </PageBox>
)
