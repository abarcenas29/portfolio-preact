import React from 'react'
import css from 'styled-components'
import { Grid, Header, Image } from 'semantic-ui-react'

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
      <ColorColumn width={8} background={image}>
        <Grid
          columns={1}
          padded
          verticalAlign='middle'
          style={{ minHeight: '20em' }}>
          <Grid.Column
            computer={13}
            floated={imgFloated}
            verticalAlign='middle'>
            <Image
              size={imgSize || 'small'}
              floated={imgFloated}
              verticalAlign='middle'>
              <img src={imagePath} />
            </Image>
          </Grid.Column>
        </Grid>
      </ColorColumn>
      <ColorColumn width={8} background={text}>
        <Grid
          columns={1}
          padded
          style={{ minHeight: '20em' }}
          floated={textFloated}>
          <Grid.Column
            computer={13}
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
        </Grid>
      </ColorColumn>
    </Grid.Row>
  )
}

export default CompanyBlurb
