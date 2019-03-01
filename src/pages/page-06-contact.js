import React from 'react'
import ContactLineImg from './assets/contact-line.png'
import DarkWashImg from './assets/dark wash.png'
import TooltipImg from './assets/tooltip.png'
import { PageBox } from './Layout'

export default () => (
  <PageBox pageIndex={6} light>
    <img className='dark-wash' src={DarkWashImg} />
    <img className='tooltip' src={TooltipImg} />
    <img className='contact-line' src={ContactLineImg} />
  </PageBox>
)
