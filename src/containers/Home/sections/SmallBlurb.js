import React from 'react'
import css from 'styled-components'
import { Grid, Header } from 'semantic-ui-react'

const SmallBlurb = css(Grid)`
  height: 10em;
  background-color: cyan;
`

export default () => {
  return (
    <SmallBlurb columns={1}>
      <Grid.Column
        textAlign='center'
        verticalAlign='middle'>
        <Header as='h2'>
          This is a small blurb that talks a bit about myself
        </Header>
      </Grid.Column>
    </SmallBlurb>
  )
}
