import React from 'react'
import css from 'styled-components'
import { Grid, Header } from 'semantic-ui-react'
import { NoPaddingGrid } from 'components/CommonJS'

const ImageColumn = css(Grid.Column)`
  background-image: url('${props => props.bg}');
  background-size: cover;

  @media only screen and (max-width: 767px) {
    min-height: 10em;
  }
`

const PortfolioItem = ({
  background,
  children,
  color,
  title,
  subheader
}) => {
  return (
    <Grid.Column computer={13} widescreen={16} mobile={16}>
      <NoPaddingGrid
        relaxed
        columns={2}
        reversed='mobile'
        stackable
        padded='mobile'>
        <Grid.Column computer={5} mobile={16} color={color}>
          <Header as='h2' inverted dividing>
            {title}
            <Header.Subheader>
              {subheader}
            </Header.Subheader>
          </Header>
          {children}
        </Grid.Column>
        <ImageColumn
          bg={background}
          computer={11}
          mobile={16}
        />
      </NoPaddingGrid>
    </Grid.Column>
  )
}

export default PortfolioItem
