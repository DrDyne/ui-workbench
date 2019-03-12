import React from 'react'
import { mount } from 'enzyme'

import withMouseTracker from '../withMouseTracker.hoc'

describe('withMouseTracker', () => {
  const Button = props => <button {...props} />
  let Subject

  beforeEach(() => {
    const getBoundingClientRect = jest.fn(() => ({
      left: 20,
      top: 20,
      width: 200,
      height: 100
    }))

    const requestAnimationFrame = jest.fn(f => f())

    const options = {
      getBoundingClientRect,
      requestAnimationFrame
    }

    Subject = withMouseTracker(Button, options)
  })

  test('should listen to mouse events [onMouseEnter, onMouseLeave, onMouseMove]', () => {
    const dom = render(<Subject />)
    expect(dom).toMatchSnapshot()

    const { onMouseEnter, onMouseLeave, onMouseMove } = dom.root.findByType(
      'button'
    ).props

    expect(onMouseEnter).toBeDefined()
    expect(onMouseLeave).toBeDefined()
    expect(onMouseMove).toBeDefined()
  })

  test('should store Component origin and dimension when mouse enters', () => {
    const wrapper = mount(<Subject />)

    const event = {
      persist: jest.fn()
    }

    expect(wrapper.state('isActive')).toBe(false)

    wrapper.simulate('mouseEnter', event)

    expect(event.persist).toHaveBeenCalled()

    const { isActive, width, height, origin } = wrapper.state()

    expect(isActive).toBe(true)
    expect(width).toBe(200)
    expect(height).toBe(100)
    expect(origin.x).toBe(120)
    expect(origin.y).toBe(70)
  })

  test('should update mouse position when mouse moves', () => {
    const wrapper = mount(<Subject />)

    wrapper.simulate('mouseEnter')
    wrapper.simulate('mouseMove', { clientX: 50, clientY: 50 })

    const { x, y } = wrapper.state('pos')
    expect({ x, y }).toMatchObject({ x: -70, y: 20 })
  })

  test('should reset when mouse leaves', () => {
    const wrapper = mount(<Subject />)

    wrapper.simulate('mouseEnter')
    wrapper.simulate('mouseMove', { clientX: 50, clientY: 50 })
    wrapper.simulate('mouseLeave')

    const { pos, origin } = wrapper.state()
    expect(pos).toMatchObject({ x: 0, y: 0 })
    expect(origin).toMatchObject({ x: 0, y: 0 })
  })
})
