import React from 'react'
import styled from '@emotion/styled'

const rotate = ({ x, y, width, height }) => {
  const isTopLeft = x < 0 && y > 0
  const isBottomRight = x > 0 && y < 0

  const rotation = {
    rx: (x / width / 2).toFixed(2),
    ry: (y / height / 2).toFixed(2)
  }

  if (isTopLeft || isBottomRight) {
    return {
      rx: rotation.rx * -1,
      ry: rotation.ry * -1
    }
  }

  return rotation
}

const transform = ({
  rx,
  ry,
  pos,
  transformBox,
  transformLabel,
  transformAccent
}) => {
  const rotate = `rotateX(${rx || 0}deg) rotateY(${ry || 0}deg)`
  const rotateAnti = `rotateX(${-0.5 * rx || 0}deg) rotateY(${-0.5 * ry ||
    0}deg)`

  return {
    box: transformBox(rotate, pos),
    label: transformLabel(rotateAnti, pos),
    accent: transformAccent(rotate, pos)
  }
}

const Button = ({
  isActive,
  pos,
  width,
  height,
  href,
  label,
  children,
  transformAccent,
  transformBox,
  transformLabel,
  ...props
}) => {
  const { rx, ry } = rotate({ ...pos, width, height })
  const tr = transform({
    rx,
    ry,
    pos,
    transformBox,
    transformLabel,
    transformAccent
  })

  return (
    <div className='btn-box' {...props} style={{ transform: tr.box }}>
      <div className='label' style={{ transform: tr.label }}>
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

Button.defaultProps = {
  href: '#',
  label: undefined,
  children: null,
  width: 0,
  height: 0,
  pos: { x: 0, y: 0 },
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
    }
  }
`
