import styled from '@emotion/styled'
import { lightTextVariant } from '../theme'
import Button from '../components/Button'
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

    [data-rellax-speed] {
      width: 100%;
    }

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

    ${Subtitle} {
      max-width: ${props.theme.breakpoint}px;
      color: ${props.theme.colors.resume};
      margin: 0 auto;
      padding: 100px 100px 20px 100px;
      z-index: 3;
      text-align: center;
    }
  `}

  ${props =>
    props.pageIndex === 6 &&
    `
    position: relative;
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
      display: block;
      height: 100%;
      width: 100%;
      > img { 
        width: 100%;
        min-height: 900px 
      }

      .contact-line {
        position: absolute;
        right: 50px;
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

export const ButtonBox = styled(Button)``
