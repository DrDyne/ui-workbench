import React from 'react'
import styled from '@emotion/styled'

import TooltipBgImg from './bg.png'
import TooltipAccentImg from './accent.png'

const tr = {
  translate: ({ x, y }) => `translate(${-0.05 * x}px, ${-0.05 * y}px)`,
  rotate: ({ x, y }, width, height) =>
    `rotateX(${30 * (x / width / 2).toFixed(2)}deg) rotateY(${30 *
      (y / height / 2).toFixed(2)}deg)`
  // fade: ({x}, width) =>
  //  0 === x ? .6 : (Math.max(0.4, (Math.abs(x) /width /2))).toFixed(2)
}

const Tooltip = ({ children, href, pos, width, height, ...props }) => (
  <div {...props}>
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
      style={{
        transform: tr.rotate(pos, width, height)
        // opacity: tr.fade(pos, width)
      }}
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
    transition: all 0.2s ease-out;
  }

  .tooltip-accent {
    margin-top: -3px;
    margin-left: -16px;
  }

  :hover .tooltip-bg {
    -webkit-filter: drop-shadow(8px 8px 10px black);
    filter: drop-shadow(8px 8px 10px black);
  }

  :hover .tooltip-accent {
    -webkit-filter: drop-shadow(8px 8px 10px white);
    filter: drop-shadow(8px 8px 10px white);
  }
`
