// jest test-running environment, same setup as storybook with extra test-renderer

import React from 'react'
import serializer from 'jest-emotion'

import render from './jest.renderer'

// storyshots / webpack
import registerRequireContextHook from 'babel-plugin-require-context-hook/register'

// enzyme
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
registerRequireContextHook()

global.React = React

global.render = Subject => render(Subject)

// emotion
expect.addSnapshotSerializer(serializer)

Enzyme.configure({ adapter: new Adapter() })
