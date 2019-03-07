import React from 'react'

export const LinksContext = React.createContext({
  isVisible: false,
  show: f => f,
  hide: f => f
})

export default Component => {
  class LinksContextHOC extends React.Component {
    state = {
      isVisible: false
    }

    show (link) {
      this.setState({ isVisible: true })
    }

    hide (link) {
      this.setState({ isVisible: false })
    }

    render () {
      const props = this.props
      const ctx = {
        ...this.state,
        show: () => this.show(),
        hide: () => this.hide()
      }

      return (
        <LinksContext.Provider value={ctx}>
          <Component {...props} />
        </LinksContext.Provider>
      )
    }
  }

  return LinksContextHOC
}
