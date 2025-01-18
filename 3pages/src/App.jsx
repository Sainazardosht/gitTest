import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  function Saina(){
    return(
      <h1>this page is for Saina</h1>
    )
  }
  function Pantea(){
    return(
      <h1>this page is for Pantea</h1>
    )
  }
  function Shahab(){
    return(
      <h1>this page is for Shahab</h1>
    )
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Link to="/saina">Saina</Link>
        <Link to="/pantea">Pantea</Link>
        <Link to="/shahab">Shahab</Link>
        <Route path="/saina" element={Saina()}/>
        <Route path="/pantea" element={Pantea()}/>
        <Route path="/shahab" element={Shahab()}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
