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
  resume: '#9EC4E7'
}

export const pageBackground = {
  2: colors.workbench,
  3: colors.design,
  // 5: colors.resume,
  6: '#000'
}

export const z = {
  pageButton: 10,
  subtitle: 1
}

export default {
  font,
  colors,
  pageBackground,
  z
}
