import styled from '@emotion/styled'
import initStoryshots, {
  multiSnapshotWithOptions
} from '@storybook/addon-storyshots'
import serializer from 'jest-emotion'

initStoryshots({
  suite: 'UI-WORKBENCH',
  test: multiSnapshotWithOptions(),
  snapshotSerializers: [serializer]
})

const MyButton = styled.button`
  color: royalblue;
  //color: orange; // breaks test
`

describe('jest-emotion serializer', () => {
  test('should render css', () => {
    const dom = render(<MyButton />)
    expect(dom).toMatchSnapshot()
  })
})
