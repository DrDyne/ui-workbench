import styled from '@emotion/styled'
import { lightTextVariant } from '../theme'
import { Subtitle } from '../components/Typography'

export const PageBox = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  //padding: 94px;
  background: ${props => props.theme.pageBackground[props.pageIndex] || '#fff'};

  ${Subtitle} {
    color: ${lightTextVariant};
    max-width: 290px;
    margin-top: 240px;
    margin: 240px 0 0 94px;
    z-index: ${props => props.theme.z.subtitle};
  }

  min-height: 900px;
  ${props =>
    props.pageIndex === 4 &&
    `/* page 4 -- sketches (fullscreen image) */
    min-height: 200px;
    .bg {
      display: block;
      width: 100%;
      height: auto;
      margin-top: -184px;
      margin-bottom: -5px;
    }

    .bg > img {
      width: 100%;
    }

    ${Subtitle} {
      width: 100%;
      max-width: 800px;
      margin: 55px auto;
      text-align: center;
    }
  `}

  ${props =>
    props.pageIndex === 5 &&
    `/* page 5 -- resume (vertical flow) */
    flex-direction: vertical;
    ${Subtitle} {
      max-width: 876px;
      margin-top: 100px;
    }

    img {
      width: 100%;
    }
  `}

  ${props =>
    props.pageIndex === 6 &&
    `
    .tooltip {
      z-index: 1;
      max-width: 750px;
      max-height: 207px;
      margin-left: 54px;
      margin-top: -260px;
    }

    .dark-wash {
      z-index: 0;
      width: 100%;
    }

    .contact-line {
      margin: -600px 100px 0 auto;
    }
  `}
`

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  background: #fff;
  z-index: ${props => props.theme.z.pageButton};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
`
