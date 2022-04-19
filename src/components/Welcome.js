import React from 'react'

//Components
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

//Icons
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

//Images
import placeholder1 from '../images/placeholder1.jpg'
import placeholder2 from '../images/placeholder2.jpg'
import placeholder3 from '../images/placeholder3.jpg'

const Welcome = () => {

  return (
    <div className='welcome-container'>

      <Box className='hero-container'>

        <Box className='intro-box'>

          <h3>Most Recent: Day 1</h3>
          <p>Proin eleifend gravida sapien. Proin interdum est id dictum ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

          <ButtonGroup variant="text" aria-label="text button group">
            <Button>ReadMe</Button>
            <Button>Name</Button>
          </ButtonGroup>
        </Box>

      </Box>

      <Box className='example-container'>
        <Grid container
          spacing={10}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={3}>
            <img src={placeholder1} alt='title of'></img>
            <h2>Coming soon</h2>
            <p>Proin eleifend gravida sapien. Proin interdum est id dictum ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <KeyboardDoubleArrowDownIcon />
          </Grid>

          <Grid item xs={3}>
            <img src={placeholder2} alt='title of'></img>
            <h2>Coming soon</h2>
            <p>Etiam vel porttitor leo. Phasellus auctor fringilla fermentum. Fusce mi nibh, ultricies non consectetur et, volutpat a sem. Pellentesque nec felis ac ligula tincidunt tempus.</p>
            <KeyboardDoubleArrowDownIcon />
          </Grid>

          <Grid item xs={3}>
            <img src={placeholder3} alt='title of'></img>
            <h2>Coming soon</h2>
            <p>Pellentesque fermentum, ligula quis rhoncus pharetra, lectus risus suscipit mi, ac vulputate urna dolor in augue. Morbi sed congue lectus. Etiam ac magna ut risus fermentum feugiat. </p>
            <KeyboardDoubleArrowDownIcon />
          </Grid>
        </Grid>
      </Box>
      <Box>

      </Box>
    </div>
  )
}

export default Welcome