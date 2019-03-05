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
  black: '#232729'
}

export const gradients = {
  header: `linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 50%), #232729`,
  accentLight: `linear-gradient(235.77deg, rgba(35, 39, 41, 0) 12.8%, rgba(35, 39, 41, 0.2) 46.35%, rgba(35, 39, 41, 0) 88.7%), #FFFFFF`,
  accentDark: `linear-gradient(235.77deg, rgba(255, 255, 255, 0) 12.8%, rgba(255, 255, 255, 0.2) 46.35%, rgba(255, 255, 255, 0) 88.7%), #232729`
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
  gradients,
  pageBackground,
  z,
  lightTextVariant,
  hoverLinkBorderColor,
  breakpoint
}
