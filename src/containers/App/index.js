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
  padding: 0 !important;
  margin: 0 !important;
  flex-direction: column !important;
`

const FixedHeader = css(Grid.Column)`
  display: block;
  position: fixed !important;
  top: 0;
  left: 0;
  margin: 0;
  padding-bottom: 1.5em !important;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0,0,0, ${prop => (prop.dim ? '0.5' : '0')});

  transition: background-color 500ms;
`

const Content = css(Grid.Column)`
  flex-grow: 1;
`

class App extends Component {
  componentWillMount () {
    this.props.default({ text: 'I am launched' })
  }

  render () {
    return (
      <Base columns={1}>
        <FixedHeader
          width={16}
          dim={this.props.dimNavMenu}
          style={{ top: '0em' }}>
          <MainNav />
        </FixedHeader>
        <Content width={16}>
          {this.props.children}
        </Content>
        <Grid.Row>
          <Grid.Column width={16}>
            <MainFooter />
          </Grid.Column>
        </Grid.Row>
      </Base>
    )
  }
}

const mapStateToProps = store => {
  const { App } = store
  return {
    dimNavMenu: App.get('dimNavMenu')
  }
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
