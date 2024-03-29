import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Components/Header'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import NotFound from './Pages/NotFound'

import './scss/app.scss'

export const AppContext = React.createContext()

function App() {
  const [searchValue, setSearchValue] = React.useState('')

  return (
    <div className="wrapper">
      <AppContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </AppContext.Provider>
    </div>
  )
}

export default App
