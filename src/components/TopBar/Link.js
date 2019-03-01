import React from 'react'
import { Link } from '../Typography'
import { css } from 'emotion'

const linkBox = css`
  display: flex;
  align-items: center;
  color: white;
  min-width: 227px;
  img {
    margin: 0 30px 0 9px;
    max-height: 33px;
    max-width: 33px;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`

export default ({ logo, title, url, ...other }) => (
  <Link href={url} className={linkBox} target='_blank' light {...other}>
    <img src={logo} />
    {title}
  </Link>
)
