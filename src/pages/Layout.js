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
    z-index: 3;
    .bg {
      display: block;
      width: 100%;
      height: auto;
      margin-top: -174px;
      margin-bottom: -5px;
    }

    div:last-child { width: 100% }
    div img {
      margin-top: 150px;
      width: 100%;
    }

    ${Subtitle} {
      width: 100%;
      max-width: 800px;
      text-align: center;
      margin: -172px auto 0 auto;
      padding: 50px;
      background: rgba(0, 0, 0, 0.33);
      backdrop-filter: blur(8px);
    }
  `}

  ${props =>
    props.pageIndex === 5 &&
    `/* page 5 -- resume (vertical flow) */
    flex-direction: vertical;
    justify-content: center;

    ${Subtitle} {
      max-width: 1088px;
      margin: 100px 0 0 0;
      padding: 0 100px;
      position: relative;
      z-index: 4;
      text-align: center;

      @media(max-width: ${props.theme.breakpoint}px) {
        margin-top: -200px;
      }
    }
  `}

  ${props =>
    props.pageIndex === 6 &&
    `
    overflow: hidden;
    .tooltip {
      z-index: 1;
      max-width: 750px;
      max-height: 207px;
      margin-left: 54px;
      margin-top: -600px;
    }

    .bg {
      margin-bottom: -5px;
      position: relative;
      display: block;
      height: 100%;
      width: 100%;
      > img { width: 100% }

      .contact-line {
        position: absolute;
        right: 85px;
        bottom: 50px;
      }
    }

  `}
`

export const PageLeft = styled.section`
  position: relative;
  display: flex;
`

export const PageRight = styled.section`
  position: relative;
  display: flex;
  flex-grow: 1;
  z-index: 1;
`

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  background: #fff;
  z-index: ${props => props.theme.z.pageButton};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
`
