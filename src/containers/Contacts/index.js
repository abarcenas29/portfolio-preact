import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Grid,
  Form,
  Header,
  Icon,
  Message,
  List
} from 'semantic-ui-react'
import css from 'styled-components'

import PageSplash from 'components/PageSplash'
import { NoPaddingGrid } from 'components/CommonJS'

import Waypoint from 'react-waypoint'

import { dimNavMenuAction } from 'containers/App/actions'
import {
  SwitchToLinkAction
} from 'components/MainNav/actions'

const ContactContainer = css.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

class Home extends Component {
  constructor (props, context) {
    super(props, context)

    this.waypointOnEnter = this.waypointOnEnter.bind(this)
    this.waypointOnLeave = this.waypointOnLeave.bind(this)
  }

  componentWillMount () {
    this.props.switchToLink(true)
  }

  waypointOnEnter () {
    this.props.dimNavMenu(false)
  }

  waypointOnLeave () {
    this.props.dimNavMenu(true)
  }

  render () {
    return (
      <ContactContainer>
        <Waypoint
          onEnter={this.waypointOnEnter}
          onLeave={this.waypointOnLeave}>
          <div style={{ width: '100%' }}>
            <PageSplash
              title='Contacts'
              backgroundUrl='/assets/images/splash.cover.web.jpg'
            />
          </div>
        </Waypoint>
        <NoPaddingGrid>
          <Grid.Row centered>
            <Grid.Column
              stretched
              computer={13}
              widescreen={8}
              mobile={16}
              textAlign='center'>
              <br />
              <Header as='h2'>Contact Information</Header>
              <List horizontal link>
                <List.Item
                  as='a'
                  href='https://github.com/abarcenas29'
                  target='_new'>
                  <Icon name='github square' size='huge' />
                </List.Item>
                <List.Item
                  as='a'
                  href='https://twitter.com/solidad'
                  target='_new'>
                  <Icon name='twitter square' size='huge' />
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered style={{ margin: 0 }}>
            <Grid.Column
              stretched
              computer={13}
              widescreen={8}
              mobile={16}>
              <Form
                action='https://formspree.io/aldrich.barcenas@gmail.com'
                method='POST'>
                <Form.Group widths='equal'>
                  <Form.Input
                    name='name'
                    label='Your Name'
                    placeholder='Your Name'
                  />
                  <Form.Input
                    name='email'
                    label='Email'
                    placeholder='Email'
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                    name='subject'
                    label='Subject'
                    placeholder='Subject'
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.TextArea
                    name='message'
                    label='Message'
                  />
                </Form.Group>
                <Form.Group
                  style={{ justifyContent: 'center' }}>
                  <Message info>
                    <p>
                      <Icon name='exclamation triangle' />
                      If you want to use your preferred email client. You can email me at aldrich.barcenas[at]gmail.com.
                    </p>
                  </Message>
                </Form.Group>
                <Form.Group
                  style={{ justifyContent: 'center' }}>
                  <Button primary>Submit</Button>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </NoPaddingGrid>
      </ContactContainer>
    )
  }
}

const mapStateToProps = store => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    dimNavMenu: payload =>
      dispatch(dimNavMenuAction(payload)),
    switchToLink: payload =>
      dispatch(SwitchToLinkAction(payload)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  Home
)
