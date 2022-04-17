import React from 'react'

//Style Components
import { Drawer } from '@mui/material'

//Images & Icons
import MenuIcon from '@mui/icons-material/Menu'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import mail from '../images/mail1.png'

const MenuBar = () => {

  //const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='menubar-container'>
      <div className='menu-tab'>
        <button><MenuIcon /></button>
        <h3>MENU</h3>
        <Drawer
        >
          <h3>About</h3>
          <h3>Day 1</h3>
        </Drawer>

      </div>

      <h2>Day Of Frontend</h2>

      <div className='social-icons'>
        <img src={github} alt='GitHub logo'></img>
        <img src={linkedin} alt='LinkedIn logo'></img>
        <img src={mail} alt='Mail icon'></img>
      </div>
    </div>
  )
}

export default MenuBar