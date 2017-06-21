import React from 'react'
// import css from 'styled-components'
import { Grid, Header, Image } from 'semantic-ui-react'

const PortfolioItem = () => {
  return (
    <Grid.Column
      color='red'
      computer={13}
      widescreen={8}
      mobile={16}>
      <Header as='h2'>AAA</Header>
      <Image fluid bordered>
        <img src='/assets/images/anest-consulting.jpg' />
      </Image>
      <p>AAA</p>
    </Grid.Column>
  )
}

export default PortfolioItem
