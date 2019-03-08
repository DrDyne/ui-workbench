import React from 'react'
import styled from '@emotion/styled'

import TooltipBgImg from './bg.png'
import TooltipAccentImg from './accent.png'

const Tooltip = styled(({ children, href, ...props }) => (
  <div {...props}>
    <a href={href} className='tooltip-label'>
      {children}
    </a>
    <img className='tooltip-accent' src={TooltipAccentImg} />
    <img className='tooltip-bg' src={TooltipBgImg} />
  </div>
))`
  position: relative;
  display: flex;
  margin: 0 auto;
  transition: all 0.2s ease-out;

  a {
    text-decoration: none;
  }

  .tooltip-label {
    position: absolute;
    transform: translate(0, 150%);
    width: 100%;
    text-align: center;
    z-index: 2;
    margin-left: -18px;
  }
  .tooltip-label h3 {
    display: inline;
    margin: 0 auto;
    padding: 0;
  }

  img {
    z-index: 1;
    position: absolute;
  }

  .tooltip-accent {
    margin-top: -3px;
    margin-left: -16px;
  }
`

export default Tooltip
