import React from 'react'
import { Element } from 'react-scroll'
import { Grid, Header, Icon, List } from 'semantic-ui-react'

//

export default () => {
  return (
    <Grid centered columns={1}>
      <Grid.Column textAlign='center'>
        <Element name='contacts'>
          <Header as='h1'>
            YOU CAN FIND ME ON THESE PLATFORMS
          </Header>
        </Element>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <List horizontal link>
          <List.Item>
            <Icon name='github' size='huge' />
          </List.Item>
          <List.Item>
            <Icon name='linkedin' size='huge' />
          </List.Item>
          <List.Item>
            <Icon name='twitter' size='huge' />
          </List.Item>
        </List>
      </Grid.Column>
    </Grid>
  )
}
