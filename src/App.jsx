import React, { useState, useEffect } from 'react'


import Header from './Components/Header'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'


import './scss/app.scss'

function App() {



  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
     <NotFound/>
        </div>
      </div>
    </div>
  )
}

export default App
