import React from 'react'
import {
  Grid,
  Header,
  Card,
  Image
} from 'semantic-ui-react'

const CardPortfolio = () => {
  return (
    <Card centered raised fluid>
      <Image fluid>
        <img src='http://placehold.it/1280x720' />
      </Image>
      <Card.Content>
        <Card.Header>My Awesome site</Card.Header>
        <Card.Description>
          AAA
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default () => {
  return (
    <Grid centered padded>
      <Grid.Column width={16} textAlign='center'>
        <Header as='h1'>Portfolio</Header>
      </Grid.Column>
      <Grid.Column computer={8} mobile={16}>
        <CardPortfolio />
      </Grid.Column>
      <Grid.Column computer={8} mobile={16}>
        <CardPortfolio />
      </Grid.Column>
    </Grid>
  )
}
