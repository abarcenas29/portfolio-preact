import React, { Component } from 'react'
import { Grid, Header } from 'semantic-ui-react'

export default class NotFound extends Component {
  render () {
    return (
      <Grid>
        <Grid.Column width={16}>
          <Header as='h1'>
            This is 404 page
          </Header>
        </Grid.Column>
      </Grid>
    )
  }
}
