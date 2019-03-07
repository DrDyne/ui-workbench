import React from 'react'
import { LinksContext } from '../../ctx/links'
import TopBar from './TopBar'

const mapContextToProps = ctx => ({ showLinks: ctx.isVisible })
const withLinksCtx = Component => props => (
  <LinksContext.Consumer>
    {ctx => <Component {...mapContextToProps(ctx)} {...props} />}
  </LinksContext.Consumer>
)

export default withLinksCtx(TopBar)
