import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import animejs from 'animejs'

const rotateLoop = () => {
  console.log('rotate')
  animejs({
    targets: '[role="loader"] section',
    duration: 1800,
    delay: 400,
    keyframes: [{ rotateY: 180, scaleZ: -50 }, { rotateY: 180, scaleZ: 100 }],
    loop: true,
    easing: 'easeOutElastic(1, .8)'
  })

  animejs({
    targets: '[role="loader"] section + section',
    duration: 1200,
    keyframes: [{ rotateY: -360 }],
    loop: true,
    easing: 'easeOutElastic(1, .8)'
  })
}

const Loader = props => {
  useEffect(rotateLoop)

  return (
    <div {...props} role='loader'>
      <section />
      <section />
    </div>
  )
}

export default styled(Loader)`
  position: relative;
  padding: 40px;

  section {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;

    background: orange;
  }

  section + section {
    position: absolute;
    top: 24px;
    left: 24px;
    display: flex;
    width: 24px;
    height: 24px;
    border: 4px solid royalblue;
    background: white;
    box-shadow: 0px 2px 2px black;
  }
`
