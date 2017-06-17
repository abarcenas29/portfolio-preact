import React from 'react'
import css from 'styled-components'
import { Grid, Header, Image } from 'semantic-ui-react'

import { NoPaddingGrid } from 'components/CommonJS'

const ColorColumn = css(Grid.Column)`
  background-color: ${prop => prop.background} !important;
  color: #FFF;
`

const CompanyBlurb = ({
  backgroundColor,
  children,
  company,
  imagePath,
  position,
  reversed,
  imgSize,
  year
}) => {
  const { image, text } = backgroundColor
  let imgFloated = 'right'
  let textFloated = 'left'

  if (reversed) {
    imgFloated = 'left'
    textFloated = 'right'
  }

  return (
    <Grid.Row
      style={{ minHeight: '20em', padding: '0em' }}
      reversed={reversed}>
      <ColorColumn
        computer={8}
        mobile={16}
        background={image}>
        <NoPaddingGrid
          columns={1}
          padded
          verticalAlign='middle'
          style={{ minHeight: '20em' }}>
          <Grid.Column
            computer={13}
            floated={imgFloated}
            only='computer'
            verticalAlign='middle'>
            <Image
              size={imgSize || 'small'}
              floated={imgFloated}
              verticalAlign='middle'>
              <img src={imagePath} />
            </Image>
          </Grid.Column>
          <Grid.Column
            only='mobile'
            mobile={16}
            verticalAlign='middle'>
            <Image
              size={imgSize || 'small'}
              centered
              verticalAlign='middle'>
              <img src={imagePath} />
            </Image>
          </Grid.Column>
        </NoPaddingGrid>
      </ColorColumn>
      <ColorColumn
        computer={8}
        mobile={16}
        background={text}>
        <NoPaddingGrid
          columns={1}
          padded
          style={{ minHeight: '20em' }}
          floated={textFloated}>
          <Grid.Column
            computer={13}
            mobile={16}
            verticalAlign='middle'
            floated={textFloated}>
            <Header as='h3' inverted>
              <Header.Content>
                {company}
                <Header.Subheader>
                  {position}
                </Header.Subheader>
                <Header.Subheader>
                  {year}
                </Header.Subheader>
              </Header.Content>
            </Header>
            {children}
          </Grid.Column>
        </NoPaddingGrid>
      </ColorColumn>
    </Grid.Row>
  )
}

export default CompanyBlurb
