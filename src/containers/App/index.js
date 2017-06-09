import React, { Component } from 'react'
import css from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { defaultAction } from './actions'

import { Grid } from 'semantic-ui-react'
import MainNav from 'components/MainNav'
import MainFooter from 'components/MainFooter'

const Base = css(Grid)`
  height: inherit;
  position: relative;
  padding: 0;
`

const FixedHeader = css(Grid.Column)`
  position: fixed !important;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  z-index: 1000;
`

const Content = css(Grid.Column)`
  flex-grow: 1;
`

class App extends Component {
  componentWillMount () {
    this.props.default({ text: 'I am launched' })

    this.redirect = this.redirect.bind(this)
  }

  redirect (url) {
    this.props.redirect(url)
  }

  render () {
    return (
      <Base columns={1}>
        <FixedHeader width={16}>
          <MainNav />
        </FixedHeader>
        <Content width={16}>
          {this.props.children}
        </Content>
        <Grid.Column width={16}>
          <MainFooter />
        </Grid.Column>
      </Base>
    )
  }
}

const mapStateToProps = store => {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    default: payload => dispatch(defaultAction(payload)),
    redirect: url => dispatch(push(url)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  App
)
