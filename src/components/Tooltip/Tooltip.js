import React from 'react'
import styled from '@emotion/styled'

import TooltipBgImg from './bg.png'
import TooltipAccentImg from './accent.png'

const tr = {
  translate: ({ x, y }) => `translate(${-0.05 * x}px, ${-0.05 * y}px)`,
  rotate: ({ x, y }, width, height) =>
    `rotateX(${30 * (x / width / 2).toFixed(2)}deg) rotateY(${30 *
      (y / height / 2).toFixed(2)}deg)`
}

const Tooltip = ({ children, href, pos, width, height, ...props }) => (
  <div {...props}>
    {console.log(pos, width, height)}
    <a href={href} target='_blank' className='tooltip-label'>
      {children}
    </a>
    <img
      className='tooltip-accent'
      src={TooltipAccentImg}
      style={{ transform: tr.translate(pos) }}
    />
    <img
      className='tooltip-bg'
      src={TooltipBgImg}
      style={{ transform: tr.rotate(pos, width, height) }}
    />
  </div>
)

Tooltip.defaultProps = {
  children: null,
  href: '#',
  width: 0,
  height: 0,
  pos: { x: 0, y: 0 }
}

export default styled(Tooltip)`
  position: relative;
  display: flex;
  margin: 0 auto;
  transition: all 0.2s ease-out;
  min-height: 100px;

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
