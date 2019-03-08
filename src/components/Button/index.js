/* global requestAnimationFrame */
import React from 'react'
import styled from '@emotion/styled'

const defaultState = {
  isActive: false,
  width: 0,
  height: 0,
  pos: {
    x: 0,
    y: 0
  },
  origin: {
    x: 0,
    y: 0
  },
  rotation: {
    rx: 0,
    ry: 0
  }
}

class Button extends React.Component {
  state = defaultState

  setSize (event) {
    const { width, height } = event.currentTarget.getBoundingClientRect()
    this.setState({
      width,
      height
    })
  }

  // set origin at center
  setOrigin (event) {
    const {
      left,
      top,
      width,
      height
    } = event.currentTarget.getBoundingClientRect()
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
    this.setState({ pos })
  }

  setRotation () {
    const { isActive, pos, width, height } = this.state
    const { x, y } = pos

    if (!isActive) return {}

    const isTopLeft = x < 0 && y > 0
    const isBottomRight = x > 0 && y < 0

    const rotation = {
      rx: (x / width / 2).toFixed(2),
      ry: (y / height / 2).toFixed(2)
    }

    if (isTopLeft || isBottomRight) {
      return this.setState({
        rotation: {
          rx: rotation.rx * -1,
          ry: rotation.ry * -1
        }
      })
    }

    this.setState({ rotation })
  }

  startTracking (event) {
    event.persist()
    this.setSize(event)
    this.setOrigin(event)
    this.setState({ isActive: true })
  }

  stopTracking () {
    this.setState(defaultState)
  }

  track (event) {
    event.persist()
    requestAnimationFrame(() => {
      this.setPosition(event)
      this.setRotation()
    })
  }

  render () {
    const {
      href,
      label,
      transformAccent,
      transformBox,
      transformLabel,
      children,
      labelProps,
      ...other
    } = this.props
    const { rx, ry } = this.state.rotation
    const containerProps = {
      onMouseEnter: event => this.startTracking(event),
      onMouseLeave: () => this.stopTracking(),
      onMouseMove: event => this.track(event)
    }

    const rotate = rx && ry ? `rotateX(${rx}deg) rotateY(${ry}deg)` : ''
    const rotateAnti =
      rx && ry ? `rotateX(${-0.5 * rx}deg) rotateY(${-0.5 * ry}deg)` : ''

    const { pos } = this.state
    const tr = {
      box: transformBox(rotate, pos),
      label: transformLabel(rotateAnti, pos),
      accent: transformAccent(rotate, pos)
    }

    return (
      <div {...containerProps} {...other} style={{ transform: tr.box }}>
        <div className='label' {...labelProps} style={{ transform: tr.label }}>
          {label}
        </div>
        <a
          href={href}
          target='_blank'
          className='accent'
          style={{ transform: tr.accent }}
        />
        {children}
      </div>
    )
  }
}

Button.defaultProps = {
  href: '#',
  label: undefined,
  children: null,
  offset: { x: 0, y: 0 },
  transformAccent: f => f,
  transformBox: f => f,
  transformLabel: f => f
}

export default styled(Button)`
  transition: all 0.4s ease-out;
  position: relative;
  display: block;
  background: rgba(255, 255, 255, 0.8);
  z-index: ${props => props.theme.z.pageButton};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);

  perspective: 20px;
  //transform-style: preserve-3d;

  img {
    width: 100%;
    transition: all 0.2s ease-in;
  }

  .label {
    font-family: ${props => props.theme.font.family};
    font-size: ${props => props.theme.font.size.subtitle};
    font-weight: bold;
    letter-spacing: 10px;
    color: white;
    z-index: ${props => props.theme.z.btn.label};
    position: absolute;
    opacity: 0;
    transition: opacity 0.2s ease-in, margin 0.2s ease-in 0s;
  }

  .accent {
    perspective: 400px;
    position: absolute;
    opacity: 0;
    z-index: ${props => props.theme.z.btn.accent};
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
    backdrop-filter: blur(4px);
    img {
      opacity: 0.6;
      transform: scale(0.98);
    }

    .accent,
    .label {
      opacity: 1;
    }

    .label {
    }

    .accent {
      z-index: ${props => props.theme.z.btn.accent};
      background: rgba(255, 255, 255, 0.4);
      margin-top: ${props => props.offset.y}px;
      margin-left: ${props => props.offset.x}px;
    }
  }
`
