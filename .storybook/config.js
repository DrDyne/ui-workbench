import React from 'react'
import 'regenerator-runtime/runtime'
import { configure, addDecorator, storiesOf } from '@storybook/react'
import { themes } from '@storybook/components'
import { withOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs'

import theme from '../src/theme'
import { ThemeProvider } from 'emotion-theming'

global.storiesOf = storiesOf

const req = require.context('../src', true, /.stories.jsx?$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

// storybook options
addDecorator(
  withOptions({
    name: 'ui-workbench',
    url: 'http://drdyne.github.io/ui-workbench',
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
    sortStoriesByKind: true,
    enableShortcuts: false,
    theme: {
      ...themes.light,
      mainBorder: '1px solid transparent',
      mainBorderRadius: '0',
      mainBackground: '#fff',
      mainTextFace: 'Roboto Mono,Montserrat,Helvetica,Arial,sans-serif',
      mainTextColor: '#444',
      dimmedTextColor: '#ccc',
      highlightColor: '#ea4862', // '#331C86',
      inputFill: 'rgba(0,0,0,0.05)',
      barFill: 'rgba(43, 43, 43, 0.05)',
      menuLink: { color: '#331c86', fontWeight: 'bold' }
    }
  })
)

// addons
addDecorator(withKnobs)

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

configure(loadStories, module)
