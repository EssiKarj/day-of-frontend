import React from 'react'

//Data for inspiration
import inspirations from '../datafiles/inspirationData'

//Components
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'


//Icons
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

//Images
import placeholder1 from '../images/placeholder1.jpg'
import placeholder2 from '../images/placeholder2.jpg'
import placeholder3 from '../images/placeholder3.jpg'

const Welcome = () => {

  const handleLinks = (url) => {
    window.open(url)
  }

  return (
    <div className='welcome-container'>

      <Box className='hero-container'>

        <Box className='intro-box'>

          <h3>Most Recent: Day 1</h3>
          <p>Lorem ipsum lithum kueht elefend est di ullampre. Proin eleifend gravida sapien. Proin interdum est id dictum ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

          <ButtonGroup variant="text" aria-label="text button group">
            <Button>ReadMe</Button>
            <Button>Name</Button>
          </ButtonGroup>
        </Box>

      </Box>

      <Box className='about-container'>
        <h2>About</h2>
        <p>Day Of Frontend is a digital catalogue of my ideas and experiments where I build them for a day or more. Kind of like a sketchbook or a diary but written in code.<br />
          The thought came from an need of having a playground to test and try new things without needing bigger concept or a plan. All projects are called simply Day 1 or which number project it may be and further descriptions can be found on my <strong>GitHub.</strong>
        </p>
      </Box>

      <Box className='example-container'>
        <h2>Projects</h2>
        <Grid container
          spacing={10}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={3}>
            <img src={placeholder1} alt='title of'></img>
            <h2>Coming soon</h2>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" sx={{ marginBottom: '10px' }} />
            <KeyboardDoubleArrowDownIcon />
          </Grid>

          <Grid item xs={3}>
            <img src={placeholder2} alt='title of'></img>
            <h2>Coming soon</h2>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" sx={{ marginBottom: '10px' }} />
            <KeyboardDoubleArrowDownIcon />
          </Grid>

          <Grid item xs={3}>
            <img src={placeholder3} alt='title of'></img>
            <h2>Coming soon</h2>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" sx={{ marginBottom: '10px' }} />

            <KeyboardDoubleArrowDownIcon />
          </Grid>

        </Grid>
      </Box>

      <Box className='inspiration-container'>
        <h2>Inspirations</h2>
        <Box sx={{
          width: '90%', height: '80vh', overflowY: 'scroll'
        }}>
          < ImageList variant='masonry' cols={3} gap={8}>
            {
              inspirations.map((item, index) => {
                return (<ImageListItem key={index} >
                  <img
                    src={item.img}
                    alt={item.title}
                    onClick={() => handleLinks(item.link)}
                  />
                  <ImageListItemBar title={item.title} onClick={() => handleLinks(item.link)} />
                </ImageListItem>
                )
              })
            }
          </ImageList>
        </Box>
      </Box >
      <Box className='footer'>
        <ul>
          <li onClick={() => handleLinks('https://www.linkedin.com/in/essi-karjalainen/')}>LinkedIn</li>
          <li onClick={() => handleLinks('https://github.com/EssiKarj')}>GitHub</li>
          <li onClick={() => handleLinks('https://github.com/EssiKarj/day-of-frontend')}>Repository for DOF</li>
          <li onClick={() => window.location = 'mailto:essi.s.karjalainen@gmail.com'}>Email</li>
        </ul>
      </Box>
    </div >
  )
}

export default Welcome