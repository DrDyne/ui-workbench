/* global requestAnimationFrame */
import React from 'react'
import styled from '@emotion/styled'

class Button extends React.Component {
  state = {
    pos: {
      x: 0,
      y: 0
    },
    origin: {
      x: 0,
      y: 0
    }
  }

  accentRef = React.createRef()

  // set origin at center
  setOrigin (event) {
    const { width, height } = this.props
    const { left, top } = event.currentTarget.getBoundingClientRect()
    const origin = {
      x: left + Math.floor(width / 2),
      y: top + Math.floor(height / 2)
    }
    this.setState({ origin })
  }

  setPosition (event) {
    const { x, y } = this.state.origin
    const pos = {
      x: event.clientX - x,
      y: (event.clientY - y) * -1
    }
    console.log(pos, event.clientX, x, event.clientY, y)
    this.setState({ pos })
  }

  rotate (event) {
    const { current } = this.accentRef
    if (!current) return {}

    const { x, y } = this.state.pos
    const { width, height } = this.props

    const isTopLeft = x < 0 && y > 0
    const isBottomRight = x > 0 && y < 0

    if (isTopLeft || isBottomRight) {
      return {
        rx: ((-1 * x) / width / 2).toFixed(2),
        ry: ((-1 * y) / height / 2).toFixed(2)
      }
    }

    return {
      rx: (x / width / 2).toFixed(2),
      ry: (y / height / 2).toFixed(2)
    }
  }

  reset () {
    const defaultPos = { x: 0, y: 0 }
    this.setState({
      pos: defaultPos,
      origin: defaultPos
    })
  }

  render () {
    const { linkProps, label, children, ...other } = this.props
    const { rx, ry } = this.rotate()
    const containerProps = {
      onMouseEnter: event => {
        event.persist()
        this.setOrigin(event)
      },
      onMouseLeave: event => {
        this.reset()
      },
      onMouseMove: event => {
        event.persist()
        requestAnimationFrame(() => {
          this.setPosition(event)
        })
      }
    }

    const rotate = rx && ry ? `rotateX(${rx}deg) rotateY(${ry}deg)` : 'none'

    return (
      <div {...containerProps} {...other} style={{ transform: rotate }}>
        <a
          ref={this.accentRef}
          {...linkProps}
          className='accent'
          style={{ transform: rotate }}
        >
          <div className='label'>{label}</div>
        </a>
        {children}
      </div>
    )
  }
}

Button.defaultProps = {
  linkProps: {
    href: '#'
  },
  width: 10,
  height: 10,
  label: undefined,
  'label-offset': { x: 0, y: 0 },
  'label-origin': { x: 0, y: 0 },
  'label-width': 0,
  'label-delay': 0,
  children: null,
  offset: { x: 0, y: 0 }
}

export default styled(Button)`
  transition: all 0.4s ease-out;
  position: relative;
  display: block;
  background: rgba(255, 255, 255, 0.8);
  z-index: ${props => props.theme.z.pageButton};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
  height: ${props => props.height}px;
  width: ${props => props.width}px;

  perspective: 20px;

  img {
    width: 100%;
    transition: all 0.2s ease-in;
  }

  .label {
    font-family: ${props => props.theme.font.family};
    font-size: ${props => props.theme.font.size.subtitle};
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    max-width: ${props =>
    props['label-width'] > 0 ? props['label-width'] + 'px' : 'none'};
    position: absolute;
    opacity: 0;
    margin-top: ${props => props['label-origin'].y || 0}px;
    margin-left: ${props => props['label-origin'].x || 0}px;
    transition: opacity 0.4s ease-in,
      margin 0.4s ease-in ${props => props['label-delay']}s;
  }

  .accent {
    perspective: 100px;
    position: absolute;
    opacity: 0;
    border: 2px solid white;
    width: 100%;
    height: 100%;
    margin: 0;
    background: rgba(255, 255, 255, 0);
    transition: all 0.2s ease-out, margin 0.2s ease-out, opacity 0.4s ease-out,
      background 0.2s ease-out;
  }

  :hover {
    background: linear-gradient(
        224.01deg,
        rgba(255, 255, 255, 0) 12.8%,
        rgba(255, 255, 255, 0.2) 46.35%,
        rgba(255, 255, 255, 0) 88.7%
      ),
      #232729;
    opacity: 0.6;
    backdrop-filter: blur(4px);
    img {
      transform: skew(5deg, -3deg) scale(1.05);
    }

    .accent,
    .label {
      opacity: 1;
    }

    .label {
      margin-top: ${props => props['label-offset'].y || 0}px;
      margin-left: ${props => props['label-offset'].x || 0}px;
    }

    .accent {
      z-index: 3;
      background: rgba(255, 255, 255, 0.15);
      margin-top: ${props => props.offset.y || 0}px;
      margin-left: ${props => props.offset.x || 0}px;
    }
  }
`
