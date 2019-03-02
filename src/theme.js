export const lightTextVariant = props =>
  font[props.light ? 'colorLight' : 'color']

export const font = {
  family: 'Encode Sans',
  color: '#000',
  colorLight: '#fff',
  size: {
    header: '51px',
    subtitle: '28px',
    link: '18px'
  }
}

export const colors = {
  workbench: '#F1618C',
  design: '#4176FB',
  resume: '#9EC4E7',
  tumblr: '#44546A',
  dark: '#232729'
}

export const pageBackground = {
  2: colors.workbench,
  3: colors.design
}

export const hoverLinkBorderColor = {
  behance: '#B1C6FC',
  tumblr: '#B2B9C2',
  github: '#F8BECF',
  linkedin: '#D6E6F4'
}

export const z = {
  pageButton: 10,
  subtitle: 1,
  topbar: 11
}

export const breakpoint = 1200

export default {
  font,
  colors,
  pageBackground,
  z,
  lightTextVariant,
  hoverLinkBorderColor,
  breakpoint
}
