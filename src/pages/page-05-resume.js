import React from 'react'
import styled from '@emotion/styled'

import { Subtitle } from '../components/Typography'
import { PageBox, ButtonBox } from './Layout'
import VimImg from './assets/button vim.png'

const BgBox = styled.div``

const ResumeButtonBox = styled(ButtonBox)`
  width: 876px;
  height: 493px;
  margin: 100px auto;
  .label {
    text-align: center;
    top: 50%;
    left: 50%;
  }
`

const ContentBox = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.resume};
  background-opacity: 0.4;
`

const btnProps = {
  label: (
    <span>
      Download my
      <br />
      resume
    </span>
  ),
  transformLabel: () => `translate(-50%, -50%)`
}

export default () => (
  <PageBox pageIndex={5}>
    <Subtitle>
      {
        'Most of my experience is based on secure, enterprise-level, innovative web apps, with optimized bundling and offline support, developed and tested by small teams and released in fast iteration cycles through a solid CI pipeline to a wide array of devices.'
      }
    </Subtitle>

    <ContentBox>
      <BgBox>
        <ResumeButtonBox {...btnProps}>
          <img src={VimImg} />
        </ResumeButtonBox>
      </BgBox>
    </ContentBox>
  </PageBox>
)
