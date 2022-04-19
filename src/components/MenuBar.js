import React, { useState } from 'react'

//Style Components
import { Drawer, List, ListItem, Divider } from '@mui/material'

//Images & Icons
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import mail from '../images/mail1.png'

const MenuBar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleDrawer = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  const handleLinks = (e) => {
    e.target.title === 'github' && window.open('https://github.com/EssiKarj')
    e.target.title === 'linkedin' && window.open('https://www.linkedin.com/in/essi-karjalainen/')
    if (e.target.title === 'mail') return window.location = 'mailto:essi.s.karjalainen@gmail.com'
  }

  return (
    <div className='menubar-container'>
      <div className='menu-tab'>
        <button onClick={handleDrawer}><MenuIcon /></button>
        <h3 onClick={handleDrawer}>DAYS</h3>
        <Drawer
          className='drawer'
          open={isOpen}
          onClose={handleDrawer}
        >
          <List className='drawer-list'>
            <CloseIcon onClick={handleDrawer} className='close' />
            <Divider />
            <ListItem>Day 1</ListItem>
            <Divider />
            <ListItem>Day 2</ListItem>
            <Divider />
            <ListItem>Day 3</ListItem>
            <Divider />
          </List>
        </Drawer>

      </div>

      <h2 className='logo'>Day Of Frontend</h2>

      <div className='social-icons'>
        <img src={github} alt='GitHub logo' title='github' onClick={handleLinks}></img>
        <img src={linkedin} alt='LinkedIn logo' title='linkedin' onClick={handleLinks}></img>
        <img src={mail} alt='Mail icon' title='mail' onClick={handleLinks}></img>
      </div>
    </div>
  )
}

export default MenuBar