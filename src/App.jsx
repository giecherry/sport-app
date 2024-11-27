import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddPlayerPage from './pages/AddPlayerPage' 


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/addplayer' element={<AddPlayerPage />}></Route>
      </Routes>
    </>
  )
}

export default App
