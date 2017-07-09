import React from 'react'
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'
import {
  Button,
  Grid,
  Header,
  Icon,
  List
} from 'semantic-ui-react'

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
          <List.Item
            as='a'
            href='https://github.com/abarcenas29'
            target='_new'>
            <Icon name='github' size='huge' />
          </List.Item>
          <List.Item>
            <Icon name='linkedin' size='huge' />
          </List.Item>
          <List.Item
            as='a'
            href='https://twitter.com/solidad'
            target='_new'>
            <Icon name='twitter' size='huge' />
          </List.Item>
        </List>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Link to='/contact'>
          <Button secondary>
            Contact
          </Button>
        </Link>
      </Grid.Column>
    </Grid>
  )
}
