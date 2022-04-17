import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Pages and components
import Welcome from './components/Welcome'
import MenuBar from './components/MenuBar'

const App = () => {

  return (
    <div className='app-container'>
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route path='/' element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
