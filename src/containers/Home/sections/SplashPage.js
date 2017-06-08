import React from 'react'
import css from 'styled-components'
import {
  Button,
  Grid,
  Header,
  Icon
} from 'semantic-ui-react'

const HomeContainer = css(Grid)`
  height: ${prop => prop.height}px;
  background-color: blue;
`

export default ({ height }) => {
  return (
    <HomeContainer centered height={height}>
      <Grid.Column
        computer={13}
        textAlign='center'
        verticalAlign='middle'>
        <Header as='h1'>
          This is the header
          <Header.Subheader>
            <a><Icon name='github' size='large' /></a>
            <a><Icon name='twitter' size='large' /></a>
            <a><Icon name='linkedin' size='large' /></a>
          </Header.Subheader>
          <Header.Subheader>
            <Button color='orange'>
              Portfolio
            </Button>
          </Header.Subheader>
        </Header>
      </Grid.Column>
    </HomeContainer>
  )
}
