import React from 'react'
import withLinksContextProvider, { LinksContext } from '../links'

describe('Context/Links', () => {
  const MyButton = props => (
    <LinksContext.Consumer>
      {ctx => (
        <button
          {...props}
          {...ctx}
          onClick={() => (ctx.isVisible ? ctx.hide() : ctx.show())}
        />
      )}
    </LinksContext.Consumer>
  )
  const MyApp = props => (
    <section {...props}>
      <MyButton />
    </section>
  )
  const Subject = withLinksContextProvider(MyApp)

  describe('withLinksContextProvider', () => {
    test('ctx.isVisible: should hide links by default', () => {
      const { root } = render(<Subject />)

      expect(root.findByType('button').props.isVisible).toBe(false)
    })

    describe('ctx.show()', () => {
      test('should reveal links', () => {
        const { root } = render(<Subject />)
        const button = root.findByType('button')

        expect(button.props.isVisible).toBe(false)
        button.props.onClick()
        expect(button.props.isVisible).toBe(true)
      })
    })

    describe('ctx.hide()', () => {
      test('should hide links', () => {
        const { root } = render(<Subject />)
        const button = root.findByType('button')

        button.props.onClick()
        expect(button.props.isVisible).toBe(true)
        button.props.onClick()
        expect(button.props.isVisible).toBe(false)
      })
    })
  })
})
