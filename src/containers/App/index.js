import React, { Component } from 'react'
import css from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { defaultAction } from './actions'

import MainNav from 'components/MainNav'
import MainFooter from 'components/MainFooter'

const Base = css.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
  height: inherit;
`

const FixedHeader = css.div`
  display: block;
  position: fixed !important;
  top: 0;
  left: 0;
  margin: 0;
  padding: 1.5em !important;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0,0,0, ${prop => (prop.dim ? '0.5' : '0')});

  transition: background-color 500ms;
`

const Content = css.div`
  flex-grow: 1;
  margin-bottom: 1em;
`

const Footer = css.div`
  width: 100%;
`

class App extends Component {
  componentWillMount () {
    this.props.default({ text: 'I am launched' })
  }

  render () {
    return (
      <Base>
        <FixedHeader dim={this.props.dimNavMenu}>
          <MainNav />
        </FixedHeader>
        <Content>
          {this.props.children}
        </Content>
        <Footer>
          <MainFooter />
        </Footer>
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
