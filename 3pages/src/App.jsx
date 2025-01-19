import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom'

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
  
  function Mohammad(){
    const params = useParams();
    return(
      <h1>{params.id}</h1>
    )
  }
  return (
    <BrowserRouter>
    <nav>
      <Link to="/saina">Saina</Link>
      <Link to="/pantea">Pantea</Link>
      <Link to="/shahab">Shahab</Link>
      <Link to="/mohammad">Mohammad</Link>
    </nav>
      
      <Routes>
        <Route path="/saina" element={<Saina />}/>
        <Route path="/pantea" element={<Pantea />}/>
        <Route path="/shahab" element={<Shahab />}/>
        <Route path="/mohammad/:id" element={<Mohammad />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
