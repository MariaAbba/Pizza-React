import React, { useState, useEffect } from 'react'
import {Routes, Route } from 'react-router-dom'

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
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/not-found" element={<NotFound/>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
