import React from 'react'

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
  }
}

const getBoundingClientRect = event =>
  event.currentTarget.getBoundingClientRect()
const { requestAnimationFrame } = window

export default (
  Component,
  options = { getBoundingClientRect, requestAnimationFrame }
) => {
  class MouseTracker extends React.Component {
    state = defaultState

    setSize (event) {
      const { width, height } = options.getBoundingClientRect(event)
      this.setState({ width, height })
    }

    // set origin at center
    setOrigin (event) {
      const { left, top, width, height } = options.getBoundingClientRect(event)
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

    startTracking (event) {
      event.persist()
      this.setOrigin(event)
      this.setSize(event)
      this.setState({ isActive: true })
    }

    stopTracking () {
      this.setState(defaultState)
    }

    track (event) {
      event.persist()
      options.requestAnimationFrame(() => {
        this.setPosition(event)
      })
    }

    render () {
      const { width, height, pos, origin } = this.state
      const trackerProps = {
        onMouseEnter: event => this.startTracking(event),
        onMouseLeave: () => this.stopTracking(),
        onMouseMove: event => this.track(event),
        width,
        height,
        pos,
        origin
      }

      return <Component {...trackerProps} {...this.props} />
    }
  }

  return MouseTracker
}
