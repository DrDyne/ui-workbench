// jest test-running environment, same setup as storybook with extra test-renderer

import React from 'react'

import render from './jest.renderer'

import registerRequireContextHook from 'babel-plugin-require-context-hook/register'
registerRequireContextHook() // required for storyshots to use webpack require.context

global.React = React
global.render = Subject => render(Subject)
