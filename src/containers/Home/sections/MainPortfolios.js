import React from 'react'
import { Element } from 'react-scroll'
import { Link } from 'react-router-dom'
import {
  Button,
  Grid,
  Header,
  Card,
  Image
} from 'semantic-ui-react'

const CardPortfolio = ({ img, title, children }) => {
  return (
    <Card centered raised fluid>
      <Image fluid>
        <img src={img} />
      </Image>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>
          {children}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

/**
 *
 *
 */

export default () => {
  return (
    <Grid centered padded>
      <Grid.Column width={16} textAlign='center'>
        <Element name='main-portfolio'>
          <Header as='h1'>Portfolio</Header>
        </Element>
      </Grid.Column>
      <Grid.Column widescreen={5} computer={8} mobile={16}>
        <CardPortfolio
          img='/assets/images/anest-consulting.jpg'
          title='Anest Consulting'>
          An in-house market matching site for clients finding the appropriate consultants for the job.
        </CardPortfolio>
      </Grid.Column>
      <Grid.Column widescreen={5} computer={8} mobile={16}>
        <CardPortfolio
          img='/assets/images/becashready.jpg'
          title='Becashready'>
          A management tool that enables NGOs to swiftly generate an action plan in delivering the necesary aid to disaster struck areas.
        </CardPortfolio>
      </Grid.Column>
      <Grid.Column width={16} textAlign='center'>
        <Link to='/portfolio'>
          <Button size='large'>
            More Projects
          </Button>
        </Link>
      </Grid.Column>
    </Grid>
  )
}
